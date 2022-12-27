import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = collection(db, "posts");
    const q = query(postRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      const tempPosts = [];
      snapshot.forEach((doc) => {
        tempPosts.push([doc.data(), doc.id]);
      });
      setPosts(tempPosts);
      console.log(tempPosts);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post[1]}
            userPicture={post[0].userPicture}
            displayName={post[0].displayName}
            username={post[0].username}
            verified={post[0].verified}
            text={post[0].text}
            image={post[0].image}
            likes={post[0].likes}
            comments={post[0].comments}
            shares={post[0].shares}
            timestamp={post[0].timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
