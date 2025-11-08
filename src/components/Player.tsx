import './Player.css';

interface PlayerProps {
    name: string;
    position: string;
}

function Player({ name, position }: PlayerProps) {
    return (
        <div className="player-card">
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
}

export default Player;
