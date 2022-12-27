import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function data() {
      const todoRef = collection(db, "posts");
      onSnapshot(todoRef, (snapshot) => {
        const tempPosts = [];
        snapshot.forEach((doc) => {
          tempPosts.push(doc.data());
        });
        setPosts(tempPosts);
      });
    }
    data();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {console.log(posts[0])}

      {posts.map((post, index) => (
        <Post
          key={index}
          userPicture={post.userPicture}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
