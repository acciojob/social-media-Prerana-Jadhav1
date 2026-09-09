import React, { useState } from "react";
import PostCard from "./PostCard";

const Home = ({ posts, users, addPost, reactToPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (title.trim() === "" || author.trim() === "" || content.trim() === "") {
      return;
    }
    addPost(title, author, content);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div className="home">
      <h2>Add a New Post</h2>
      <div className="post-form">
        <label>
          Post Title:
          <input
            type="text"
            id="postTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <select
            id="postAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="">Select Author</option>
            {users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Content:
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button className="button" onClick={handleSave}>
          Save Post
        </button>
      </div>

      <h2>Posts</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} reactToPost={reactToPost} />
        ))}
      </div>
    </div>
  );
};

export default Home;
