import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


interface Team {
    id: number;
    name: string;
}

function TeamList() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/teams')
            .then(res => {
                setTeams(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading teams...</p>;

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Teams</h1>
            <Link
                to="/new-team"
                style={{
                    display: 'inline-block',
                    marginBottom: '1rem',
                    textDecoration: 'none',
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px'
                }}
            >
                + Add New Team
            </Link>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {teams.map(team => (
                    <li key={team.id} style={{ margin: '1rem 0' }}>
                        <Link to={`/team/${team.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                            {team.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamList;
