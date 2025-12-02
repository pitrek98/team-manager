import { useEffect, useState } from 'react';
import axios from 'axios';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import TopBar from '../components/TopBar';
import TeamCard from '../components/TeamCard';
import FlipCard from '../components/FlipCard';
import TeamCardBack from '../components/TeamCardBack';

interface Player {
    id: number;
    name: string;
    teamId: number;
}

interface Team {
    id: number;
    name: string;
    primaryColor: string;
    secondaryColor: string;
}

function TeamList() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const teamsRes = await axios.get("http://localhost:3000/teams");
                const playersRes = await axios.get("http://localhost:3000/players");

                setTeams(teamsRes.data);
                setPlayers(playersRes.data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading data", error);
            }
        }

        fetchData();
    }, []);

    const getPlayerCount = (teamId: number) =>
        players.filter(p => p.teamId === teamId).length;

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw' }
        }>
            <Menu teamName="Teams" />

            <PageContainer>
                <TopBar
                    title="All Teams"
                    buttonText="+ Create Team"
                    buttonLink="/new-team"
                />

                {loading ? (
                    <p>Loading teams...</p>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '20px',
                            width: '95%',
                            margin: '0 auto',
                            justifyItems: 'center',
                        }}
                    >
                        {teams.map(team => (
                            <FlipCard
                                key={team.id}
                                front={<TeamCard id={team.id} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />}
                                back={<TeamCardBack id={team.id} name={team.name} playerCount={getPlayerCount(team.id)} />}
                            />
                        ))}
                    </div>
                )
                }
            </PageContainer >

            <Footer />
        </div >
    );
}

export default TeamList;
