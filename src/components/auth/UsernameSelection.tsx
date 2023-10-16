import React, { useState } from "react";

const UsernameSelection: React.FC<{
  setUsername: (username: string) => void;
}> = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
  };

  const handleUsernameSubmit = () => {
    setUsername(usernameInput);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && usernameInput.trim() !== "") {
      handleUsernameSubmit();
    }
  };

  return (
    <div className="username-selection">
      <h2>Choose Username</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={usernameInput}
        onChange={handleUsernameChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleUsernameSubmit}>Enter</button>
    </div>
  );
};

export default UsernameSelection;
