import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function NewTeam() {
    const [teamName, setTeamName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // POST new team to the API
            await axios.post('http://localhost:3000/teams', { name: teamName });
            navigate('/'); // redirect to team list page after adding
        } catch (err) {
            console.error(err);
            setError('Failed to add team');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Menu teamName="Add New Team" />
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2>Create a New Team</h2>
                <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Team Name: </label><br />
                        <input
                            id="name"
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
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
                        {loading ? 'Saving...' : 'Add Team'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default NewTeam;
