import React from "react";
import { Link } from "react-router-dom";

const UserPosts = ({ match, users, posts }) => {
  const userId = Number(match.params.userId);
  const user = users.find((u) => u.id === userId);
  const userPosts = posts.filter((post) => post.author === (user && user.name));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="user-posts">
      <h2>{user.name}</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
