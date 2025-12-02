import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

interface Player {
    id: number;
    name: string;
    position: string;
    teamId: number;
}

interface Team {
    id: string;
    name: string;
}

function TeamDetails() {
    const { id } = useParams();
    const [team, setTeam] = useState<Team | null>(null);
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const [teamRes, playerRes] = await Promise.all([
                    axios.get(`http://localhost:3000/teams/${id}`),
                    axios.get(`http://localhost:3000/players?teamId=${id}`)
                ]);
                setTeam(teamRes.data);
                setPlayers(playerRes.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, [id]);

    if (loading) return <p>Loading team data...</p>;
    if (!team || !id) return <p>Team not found.</p>;

    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', width: '100vw' }
        }>
            <Menu teamName={team.name} />

            <PageContainer>
                <Body players={players} teamId={id} />
                <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Teams</Link>
                <Footer />
            </PageContainer>
        </div >
    );
}

export default TeamDetails;
