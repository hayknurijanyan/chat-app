import React from "react";
import "./styles.css";

const Navbar: React.FC<{ username: string; onLogout: () => void }> = ({
  username,
  onLogout,
}) => {
  return (
    <header className="header">
      <h1>Chat Room</h1>
      <div className="menu-container">
        <div className="avatar-container">
          <img alt="avatar" src="assets/avatars/avatar.png" height={36} />
          <span>{username}</span>
        </div>
        <button onClick={onLogout}>Log Out</button>
      </div>
    </header>
  );
};

export default Navbar;
