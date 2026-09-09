import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
