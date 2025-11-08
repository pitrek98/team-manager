import './Menu.css';

interface MenuProps {
    teamName: string;
}

function Menu({ teamName }: MenuProps) {
    return (
        <header className="menu">
            <h1>{teamName}</h1>
        </header>
    );
}

export default Menu;
