import React from "react";
import { Link } from "react-router-dom";

const Header = ({ refreshNotifications }) => {
  return (
    <header className="header">
      <h1>GenZ</h1>
      <div className="nav-bar">
        <nav className="nav-links">
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>
        <button className="button refresh-btn" onClick={refreshNotifications}>
          Refresh Notifications
        </button>
      </div>
    </header>
  );
};

export default Header;
