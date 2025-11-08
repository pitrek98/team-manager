// src/pages/TeamList.tsx
import { Link } from 'react-router-dom';

function TeamList() {
    const teams = [
        { id: 1, name: 'Team A' },
        { id: 2, name: 'Team B' },
        { id: 3, name: 'Team C' },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Teams</h1>
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
