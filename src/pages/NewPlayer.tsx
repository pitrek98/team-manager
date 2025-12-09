import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import './NewPlayer.css';


function NewPlayer() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('http://localhost:3000/players', {
                name,
                position,
                teamId: String(id)
            });
            navigate(`/team/${id}`);
        } catch (err) {
            console.error(err);
            setError('Failed to add player');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="new-player-container">
            <Menu teamName="Add New Player" />
            <PageContainer>
                <h2>Input new player data</h2>
                <form onSubmit={handleSubmit} className="new-player-form">
                    <div className="new-player-input-box">
                        <label htmlFor="name">Player Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="new-player-input"
                        />
                    </div>
                    <div className="new-player-input-box">
                        <label htmlFor="position">Position:</label><br />
                        <input
                            id="position"
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                            className="new-player-input"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="new-player-button"
                    >
                        {loading ? 'Saving...' : 'Add Player'}
                    </button>
                    {error && <p className="new-player-error">{error}</p>}
                </form>
                <br /><br />
                <Link to={`/team/${id}`} className="new-player-back-link">
                    ← Back to Team
                </Link>


            </PageContainer>
            <Footer />
        </div >
    );
}

export default NewPlayer;
