import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import './NewTeam.css';

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
        <div className="new-team-container">
            <Menu teamName="Add New Team" />

            <PageContainer>
                <h2>{teamName ? `${teamName}` : 'Create a New Team'}</h2>
                <div className="new-team-color-box">
                    <div style={{ flex: 1, backgroundColor: color1 }}></div>
                    <div style={{ flex: 1, backgroundColor: color2 }}></div>
                </div>

                <form onSubmit={handleSubmit} className="new-team-form">

                    <div className="new-team-input-box">
                        <label htmlFor="name">Team Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                            className="new-team-input-name"
                        />
                    </div>

                    <div className="new-team-input-box-left">
                        <label htmlFor="color1">Primary Color:</label><br />
                        <input
                            id="color1"
                            type="color"
                            value={color1}
                            onChange={(e) => setColor1(e.target.value)}
                            className="new-team-input-color"
                        />
                    </div>

                    <div className="new-team-input-box-right">
                        <label htmlFor="color2">Secondary Color:</label><br />
                        <input
                            id="color2"
                            type="color"
                            value={color2}
                            onChange={(e) => setColor2(e.target.value)}
                            className="new-team-input-color"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        disabled={loading}
                        className="new-team-button"
                    >
                        {loading ? 'Saving...' : 'Add Team'}
                    </button>

                    {error && <p className="new-team-error">{error}</p>}
                    <Link to="/" className="new-team-back-link">← Back to Teams</Link>
                </form>


            </PageContainer>

            <Footer />
        </div >
    );
}

export default NewTeam;
