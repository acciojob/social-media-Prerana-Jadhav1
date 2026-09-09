import React from "react";
import { Link } from "react-router-dom";

const REACTIONS = [
  { key: "thumbsUp", emoji: "👍" },
  { key: "party", emoji: "🎉" },
  { key: "heart", emoji: "❤️" },
  { key: "rocket", emoji: "🚀" },
  { key: "eyes", emoji: "👀" },
];

const PostCard = ({ post, reactToPost }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className="post-meta">
        by {post.author} <i>{post.timestamp}</i>
      </p>
      <p>{post.content}</p>
      <div className="reactions">
        {REACTIONS.map((reaction) => (
          <button
            key={reaction.key}
            className="reaction-btn"
            onClick={() =>
              reaction.key !== "eyes" && reactToPost(post.id, reaction.key)
            }
          >
            {reaction.emoji} {post.reactions[reaction.key]}
          </button>
        ))}
      </div>
      <Link className="button" to={`/posts/${post.id}`}>
        View Post
      </Link>
    </div>
  );
};

export default PostCard;
