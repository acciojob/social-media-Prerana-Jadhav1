import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import UsersList from "./UsersList";
import UserPosts from "./UserPosts";
import PostDetail from "./PostDetail";
import Notifications from "./Notifications";
import "./../styles/App.css";

export const makeReactions = () => ({
  thumbsUp: 0,
  party: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
});

const initialUsers = [
  { id: 1, name: "Uriah Pagac" },
  { id: 2, name: "Lauren Bednar" },
  { id: 3, name: "Magnus Gislason" },
];

const initialPosts = [
  {
    id: 1,
    title: "Ideas",
    author: "Uriah Pagac",
    content: "Some brainstorming ideas for the next big thing.",
    timestamp: "about 9 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 2,
    title:
      "Waking to the buzz of the alarm clock, their chimpanzee was, in this moment, a witty snail?",
    author: "Uriah Pagac",
    content:
      "They were lost without the harmonious rabbit that composed their kangaroo.",
    timestamp: "about 13 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 3,
    title: "A calm hippopotamus is a bee of the mind.",
    author: "Uriah Pagac",
    content: "Shouting with happiness, the mind wandered onward.",
    timestamp: "about 15 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 4,
    title: "A cranberry of the seal is assumed to be a honest strawberry!",
    author: "Uriah Pagac",
    content: "A journey of a thousand miles begins with a single cranberry.",
    timestamp: "about 18 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 5,
    title:
      "Draped neatly on a hanger, the cranberries could be said to resemble reserved hippopotamus;",
    author: "Magnus Gislason",
    content:
      "They were lost without the harmonious rabbit that composed their kangaroo. Shouting with happiness,",
    timestamp: "about 9 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 6,
    title: "A witty rabbit never composes a lonely kangaroo.",
    author: "Magnus Gislason",
    content: "Reserved hippopotamus wandered near the harmonious rabbit.",
    timestamp: "about 11 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 7,
    title: "Hello from Lauren",
    author: "Lauren Bednar",
    content: "Excited to share my thoughts with everyone here.",
    timestamp: "about 5 hours ago",
    reactions: makeReactions(),
  },
  {
    id: 8,
    title: "A second thought from Lauren",
    author: "Lauren Bednar",
    content: "Another day, another idea worth sharing.",
    timestamp: "about 2 hours ago",
    reactions: makeReactions(),
  },
];

let nextPostId = initialPosts.length + 1;

const App = () => {
  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);

  const addPost = (title, author, content) => {
    const newPost = {
      id: nextPostId++,
      title,
      author,
      content,
      timestamp: "just now",
      reactions: makeReactions(),
    };
    setPosts((prev) => [...prev, newPost]);
  };

  const updatePost = (id, title, content) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, title, content } : post
      )
    );
  };

  const reactToPost = (id, key) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              reactions: { ...post.reactions, [key]: post.reactions[key] + 1 },
            }
          : post
      )
    );
  };

  const refreshNotifications = () => {
    setNotifications([
      { id: 1, message: "Uriah Pagac reacted to your post" },
      { id: 2, message: "Lauren Bednar commented on your post" },
      { id: 3, message: "Magnus Gislason created a new post" },
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Header refreshNotifications={refreshNotifications} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                posts={posts}
                users={users}
                addPost={addPost}
                reactToPost={reactToPost}
              />
            )}
          />
          <Route
            exact
            path="/users"
            render={() => <UsersList users={users} />}
          />
          <Route
            exact
            path="/users/:userId"
            render={(props) => (
              <UserPosts {...props} users={users} posts={posts} />
            )}
          />
          <Route
            exact
            path="/posts/:postId"
            render={(props) => (
              <PostDetail
                {...props}
                posts={posts}
                updatePost={updatePost}
                reactToPost={reactToPost}
              />
            )}
          />
          <Route
            exact
            path="/notifications"
            render={() => <Notifications notifications={notifications} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
