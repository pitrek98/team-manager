import './Player.css';

interface PlayerProps {
    id: number;
    name: string;
    position: string;
    onDelete: (id: number) => void;
}

function Player({ id, name, position, onDelete }: PlayerProps) {

    const handleDelete = () => {
        if (window.confirm(`Delete player "${name}"?`)) {
            onDelete(id);
        }
    };

    return (
        <div className="player-card">
            <h3 className="player-name">{name}</h3>
            <p className="player-position">{position}</p>

            <button
                className="player-delete-btn"
                onClick={handleDelete}
            >
                ✕
            </button>



        </div>
    );
}

export default Player;
