import React, { useState } from "react";
import useSocket from "../../../hooks/useSocket";
import "./styles.css";

const ChatInput: React.FC<{ username: string }> = ({ username }) => {
  const { socket } = useSocket();
  const [text, setText] = useState("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSendMessage = () => {
    socket?.emit("message", {
      username,
      text,
      id: new Date().valueOf(),
      timestamp: new Date(),
    });
    setText("");
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={handleMessageChange}
        onKeyDown={handleKeyPress}
      />
      <button disabled={!text.length} onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
