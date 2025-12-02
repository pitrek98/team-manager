import Player from './Player';
import Warning from './Warning';
import Info from './Info';
import { Link } from 'react-router-dom';

interface PlayerData {
    id: number;
    name: string;
    position: string;
}

interface BodyProps {
    players: PlayerData[];
    teamId: string;
}

function Body({ players, teamId }: BodyProps) {
    return (
        <main className="body" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            {players.length < 11 ? <Warning /> : <Info />}
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    gridTemplateColumns: 'repeat(auto-fit, 150px)',
                    gap: '40px',
                    justifyContent: 'center',
                    width: '95%',
                }}
            >
                {players.map(player => (
                    <Player key={player.id} name={player.name} position={player.position} />
                ))}

                <Link
                    to={`/team/${teamId}/new-player`}
                    style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        margin: '0.5rem',
                        alignContent: 'center',
                        width: '100%',
                    }}
                >
                    + Add New Player
                </Link>
            </div>
        </main >
    );
}

export default Body;
