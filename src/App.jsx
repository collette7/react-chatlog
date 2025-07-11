import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messagesData);

  const calcTotalLikes = () => {
    return entries.filter(entry => entry.liked).length;
  };

  const toggleLike = (id) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, liked: !entry.liked } : entry
    ));
  };

  const totalLikes = calcTotalLikes();

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={entries} onLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
