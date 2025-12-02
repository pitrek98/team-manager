import { Link } from 'react-router-dom';

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
            <div
                style={{
                    width: '200px',
                    // padding: '8px',
                    textAlign: 'center',

                    overflow: "hidden",
                    textOverflow: "clip",
                    whiteSpace: "nowrap",
                    display: 'inline-block',
                }}
            >
                <h3 style={{ margin: 0 }}>{name}</h3>
                <p style={{ margin: '8px 0 0 0' }}>{playerCount} Players</p>
                <p style={{ color: '#666', marginTop: '8px' }}>View Team →</p>
            </div>
        </Link>
    );
}