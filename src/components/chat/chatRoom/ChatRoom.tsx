import React, { useEffect, useState } from "react";
import useSocket from "../../../hooks/useSocket";
import ChatMessage from "../chatTypes";
import "./styles.css";

const ChatRoom: React.FC<{ username: string }> = ({ username }) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    socket?.on("chatHistory", (chatHistory) => {
      setMessages(chatHistory);
    });

    socket?.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [socket]);

  const getMessageType = (m: { username: string }) =>
    m.username === username ? "sent" : "received";

  return (
    <div className="chat-room">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            className={`chat-message-container ${getMessageType(message)}`}
            key={message.id}
          >
            <div className={`chat-message ${getMessageType(message)}`}>
              <div className="message-text">{message.text}</div>
              <div className="message-info">
                <div className="message-username">{message.username}</div>
                <div className="message-timestamp">
                  {message.timestamp
                    ? new Date(message.timestamp).toLocaleTimeString()
                    : "Timestamp not available"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
