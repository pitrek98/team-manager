import { Link } from 'react-router-dom';
import './TopBar.css'

interface Props {
    title: string;
    buttonText: string;
    buttonLink: string;
}

function TopBar({ title, buttonText, buttonLink }: Props) {
    return (
        <div className='top-bar'        >
            <h2 className="top-bar-title">{title}</h2>

            <Link
                to={buttonLink}
                style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}
            >
                {buttonText}
            </Link>
        </div>
    );
}

export default TopBar;
