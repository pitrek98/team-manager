import Player from './Player';
import Warning from './Warning';
import Info from './Info';

interface PlayerData {
    id: number;
    name: string;
    position: string;
}

interface BodyProps {
    players: PlayerData[];
}

function Body({ players }: BodyProps) {
    return (
        <main className="body">
            {players.length < 11 ? <Warning /> : <Info />}
            <div className="player-list">
                {players.map(player => (
                    <Player key={player.id} name={player.name} position={player.position} />
                ))}
            </div>
        </main>
    );
}

export default Body;
