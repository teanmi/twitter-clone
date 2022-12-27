import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "posts"), {
      userPicture: "",
      displayName: "teanmi",
      username: "teanm",
      timestamp: "1h",
      text: text,
      image: shareImage,
      likes: Math.floor(Math.random() * 1000) + 750,
      shares: Math.floor(Math.random() * 750) + 500,
      comments: Math.floor(Math.random() * 500),
    });

    console.log(docRef);
    reset();
  };

  const reset = () => {
    setText("");
    setShareImage("");
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault()

    setShareImage(e.target.value);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" sx={{ width: 50, height: 50 }} />
          <div className="input__container">
            <input
              onChange={(e) => handleTextChange(e)}
              value={text}
              className="tweetBox__inputText"
              placeholder="What's happening?"
              type="text"
            />
          </div>
        </div>
        <div className="buttons">
          <div className="tweetBox__imageButton">
            <BrokenImageOutlinedIcon
              className="hover"
              sx={{ fill: "var(--twitter-color)" }}
            />
            <input
              className="tweetBox__imageInput"
              value={shareImage}
              type={text}
              onChange={(e) => handleImageChange(e)}
              placeholder="Optional: Enter Img URL"
            />
          </div>
          {text ? (
            <button
              onClick={(e) => sendTweet(e)}
              className="tweetBox__tweetButton"
            >
              Tweet
            </button>
          ) : (
            <button className="tweetBox__tweetButton buttonDisabled" disabled>
              Tweet
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
