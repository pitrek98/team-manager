import { Link } from 'react-router-dom';

interface Props {
    title: string;
    buttonText: string;
    buttonLink: string;
}

function TopBar({ title, buttonText, buttonLink }: Props) {
    return (
        <div
            style={{
                width: '90%',
                maxWidth: '2000px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto',
                marginBottom: '1rem',
                marginTop: '1rem',
            }}
        >
            <h2 style={{ margin: 0 }}>{title}</h2>

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
