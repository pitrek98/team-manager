import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import './TeamDetails.css';

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
    const navigate = useNavigate();

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

    const deleteTeam = async () => {
        if (!team || !id) return;

        const confirmDelete = window.confirm(
            `Are you sure you want to delete team "${team.name}"?\nThis will also remove all its players.`
        );

        if (!confirmDelete) return;

        try {
            const deletePlayerPromises = players.map(p =>
                axios.delete(`http://localhost:3000/players/${p.id}`)
            );
            await Promise.all(deletePlayerPromises);

            await axios.delete(`http://localhost:3000/teams/${id}`);

            navigate('/');
        } catch (err) {
            console.error("Failed to delete team:", err);
        }
    };

    if (loading) return <p>Loading team data...</p>;
    if (!team || !id) return <p>Team not found.</p>;

    return (
        <div className="team-details-container">
            <Menu teamName={team.name} />

            <PageContainer>
                <Body players={players} teamId={id} />

                <Link
                    to="/"
                    className='team-details-back-link'
                >
                    ← Back to Teams
                </Link>
                <br />
                <button
                    onClick={deleteTeam}
                    className="team-details-delete"
                >
                    Delete Team
                </button>

            </PageContainer>
            <Footer />

        </div>
    );
}

export default TeamDetails;
