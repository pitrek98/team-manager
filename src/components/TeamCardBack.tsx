import { Link } from 'react-router-dom';
import './TeamCardBack.css';

interface TeamCardBackProps {
    id: number;
    name: string;
    playerCount: number;
}

export default function TeamCardBack({ id, name, playerCount }: TeamCardBackProps) {
    return (
        <Link
            to={`/team/${id}`}
            style={{
                textDecoration: 'none',
                color: 'black',
            }}
        >
            <div className="team-card-back-link">
                <h3 className="team-card-back-name" >{name}</h3>
                <p className="team-card-back-count">{playerCount} Players</p>
                <p className="team-card-back-href">View Team →</p>
            </div>
        </Link>
    );
}