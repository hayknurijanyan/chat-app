import "./App.css";
import ChatRoom from "./components/chat/chatRoom/ChatRoom";
import ChatInput from "./components/chat/chatInput/ChatInput";
import { useState } from "react";
import UsernameSelection from "./components/auth/UsernameSelection";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [username, setUsername] = useState<string | null>(null);

  const handleLogOut = () => setUsername(null);

  return (
    <div className="App">
      {!username ? (
        <UsernameSelection setUsername={setUsername} />
      ) : (
        <>
          <Navbar username={username} onLogout={handleLogOut} />
          <div className="chat-container">
            <ChatRoom username={username} />
            <ChatInput username={username} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
