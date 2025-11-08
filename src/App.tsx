import { useState } from 'react';
import Menu from './components/Menu';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Alice', position: 'Forward' },
    { id: 2, name: 'Bob', position: 'Goalkeeper' },
  ]);

  return (
    <div>
      <Menu teamName="Team A" />
      <div style={{ marginTop: '80px', marginBottom: '60px' }}>
        <Body players={players} />
      </div>
      <Footer />
    </div>
  );
}

export default App;