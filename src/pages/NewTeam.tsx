import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

function NewTeam() {
    const [teamName, setTeamName] = useState('');
    const [color1, setColor1] = useState('#ff0000'); // default colors
    const [color2, setColor2] = useState('#0000ff');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('http://localhost:3000/teams', {
                name: teamName,
                primaryColor: color1,
                secondaryColor: color2,
            });

            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Failed to add team');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', width: '100vw' }
        }>
            <Menu teamName="Add New Team" />

            <PageContainer>
                <h2>{teamName ? `${teamName}` : 'Create a New Team'}</h2>

                {/* Team Card Color Preview */}
                <div
                    style={{
                        width: '180px',
                        height: '90px',
                        margin: '20px auto',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        display: 'flex',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                >
                    <div style={{ flex: 1, backgroundColor: color1 }}></div>
                    <div style={{ flex: 1, backgroundColor: color2 }}></div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'center' }}>

                    {/* Team Name */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Team Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                            style={{ padding: '0.5rem', width: '250px' }}
                        />
                    </div>

                    {/* Color 1 */}
                    <div style={{ marginBottom: '1rem', display: 'inline-block', marginRight: '1rem' }}>
                        <label htmlFor="color1">Primary Color:</label><br />
                        <input
                            id="color1"
                            type="color"
                            value={color1}
                            onChange={(e) => setColor1(e.target.value)}
                            style={{ width: '60px', height: '40px', cursor: 'pointer' }}
                        />
                    </div>

                    {/* Color 2 */}
                    <div style={{ marginBottom: '1rem', display: 'inline-block' }}>
                        <label htmlFor="color2">Secondary Color:</label><br />
                        <input
                            id="color2"
                            type="color"
                            value={color2}
                            onChange={(e) => setColor2(e.target.value)}
                            style={{ width: '60px', height: '40px', cursor: 'pointer' }}
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            display: 'inline-block',
                            marginRight: '1rem'
                        }}
                    >
                        {loading ? 'Saving...' : 'Add Team'}
                    </button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Teams</Link>
                </form>


            </PageContainer>

            <Footer />
        </div >
    );
}

export default NewTeam;
