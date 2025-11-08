// src/pages/TeamDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Body from '../components/Body';
import Footer from '../components/Footer';

interface Player {
    id: number;
    name: string;
    position: string;
}

function TeamDetails() {
    const { id } = useParams(); // get the team id from the URL
    const [players, setPlayers] = useState<Player[]>([]);
    const [teamName, setTeamName] = useState<string>('');

    useEffect(() => {
        // Temporary static data (will later come from REST API)
        const teams = [
            {
                id: 1, name: 'Team A', players: [
                    { id: 1, name: 'Alice', position: 'Forward' },
                    { id: 2, name: 'Bob', position: 'Goalkeeper' }
                ]
            },
            {
                id: 2, name: 'Team B', players: [
                    { id: 3, name: 'Charlie', position: 'Defender' },
                    { id: 4, name: 'David', position: 'Midfielder' },
                    { id: 5, name: 'Eva', position: 'Forward' }
                ]
            },
            {
                id: 3, name: 'Team C', players: [
                    { id: 6, name: 'Frank', position: 'Goalkeeper' },
                    { id: 7, name: 'Grace', position: 'Defender' },
                    { id: 8, name: 'Hannah', position: 'Midfielder' },
                    { id: 9, name: 'Ian', position: 'Forward' },
                    { id: 10, name: 'Jack', position: 'Defender' },
                    { id: 11, name: 'Kathy', position: 'Midfielder' },
                    { id: 12, name: 'Leo', position: 'Forward' },
                    { id: 13, name: 'Mona', position: 'Defender' },
                    { id: 14, name: 'Nina', position: 'Midfielder' },
                    { id: 15, name: 'Owen', position: 'Forward' },
                    { id: 16, name: 'Paul', position: 'Defender' },
                    { id: 17, name: 'Quinn', position: 'Midfielder' }
                ]
            }
        ];

        const team = teams.find(t => t.id === Number(id));
        if (team) {
            setTeamName(team.name);
            setPlayers(team.players);
        }
    }, [id]);

    return (
        <div>
            <Menu teamName={teamName || 'Team'} />
            <div style={{ marginTop: '80px', marginBottom: '60px', textAlign: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Teams</Link>
                <Body players={players} />
            </div>
            <Footer />
        </div>
    );
}

export default TeamDetails;
