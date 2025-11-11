import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Footer from '../components/Footer';

interface Player {
    id: number;
    name: string;
    position: string;
    teamId: number;
}

interface Team {
    id: number;
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
    if (!team) return <p>Team not found.</p>;

    return (
        <div>
            <Menu teamName={team.name} />
            <div style={{ marginTop: '80px', marginBottom: '60px', textAlign: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Teams</Link>
                <Body players={players} />

                {/* 👇 Add Player Button */}
                <Link
                    to={`/team/${id}/new-player`}
                    style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        textDecoration: 'none'
                    }}
                >
                    + Add New Player
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default TeamDetails;
