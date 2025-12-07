import Player from './Player';
import Warning from './Warning';
import Info from './Info';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './Body.css';

interface PlayerData {
    id: number;
    name: string;
    position: string;
}

interface BodyProps {
    players: PlayerData[];
    teamId: string;
}



function Body({ players: initialPlayers, teamId }: BodyProps) {
    const [players, setPlayers] = useState<PlayerData[]>(initialPlayers);

    const handleDeletePlayer = async (playerId: number) => {
        try {
            await axios.delete(`http://localhost:3000/players/${playerId}`);

            setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== playerId));
        } catch (err) {
            console.error("Failed to delete player:", err);
        }
    };

    return (

        <main className="body">
            {players.length < 11 ? <Warning /> : <Info />}
            <div className="body-grid">
                {players.map(player => (
                    <Player key={player.id} name={player.name} position={player.position} id={player.id} onDelete={handleDeletePlayer} />
                ))}

                <Link
                    to={`/team/${teamId}/new-player`}
                    className="body-button"
                >
                    + Add New Player
                </Link>
            </div>
        </main >
    );
}

export default Body;
