import './App.css';
import ChatEntry from './components/ChatEntry';
import messagesData from './data/messages.json';

const App = () => {
  const firstMessage = messagesData[0];

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry 
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
