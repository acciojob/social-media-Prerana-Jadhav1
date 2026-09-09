import React, { useState, useEffect } from "react";

const REACTIONS = [
  { key: "thumbsUp", emoji: "👍" },
  { key: "party", emoji: "🎉" },
  { key: "heart", emoji: "❤️" },
  { key: "rocket", emoji: "🚀" },
  { key: "eyes", emoji: "👀" },
];

const PostDetail = ({ match, posts, updatePost, reactToPost }) => {
  const postId = Number(match.params.postId);
  const post = posts.find((p) => p.id === postId);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return <div className="post">Post not found.</div>;
  }

  const handleSave = () => {
    updatePost(post.id, title, content);
    setIsEditing(false);
  };

  return (
    <div className="post">
      {isEditing ? (
        <>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <h2 id="postTitle">{post.title}</h2>
          <p className="post-meta">
            by {post.author} <i>{post.timestamp}</i>
          </p>
          <p id="postContent">{post.content}</p>
        </>
      )}

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

      {!isEditing && (
        <button className="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
      {isEditing && (
        <button className="button" onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default PostDetail;
