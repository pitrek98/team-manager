import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function NewPlayer() {
    const { id } = useParams(); // team ID from URL
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
        <div>
            <Menu teamName="Add New Player" />
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2>Add Player to Team #{id}</h2>
                <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Player Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: '0.5rem', width: '250px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="position">Position:</label><br />
                        <input
                            id="position"
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                            style={{ padding: '0.5rem', width: '250px' }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        {loading ? 'Saving...' : 'Add Player'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                <div style={{ marginTop: '1rem' }}>
                    <Link to={`/team/${id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                        ← Back to Team
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewPlayer;
