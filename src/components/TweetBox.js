import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../firebase";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    if (shareImage !== "") {
      uploadPostImage(e);
    } else {
      uploadPostNoImage(e);
    }

    reset();
  };

  const uploadPostImage = (e) => {
    const storageRef = ref(storage, `images/${shareImage?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, shareImage);

    uploadTask.on(
      "state_changed", 
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`progress: ${progress}% `);
        if (snapshot.state === "RUNNING") {
          console.log(`progress: ${progress}%`);
        }
      },
      (error) => console.log(error.code),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "posts"), {
            userPicture: "../images/profile.jpg",
            username: "teanmi",
            displayName: "teanmi",
            verified: true,
            image: downloadURL,
            comments: Math.floor(Math.random() * 500) + 1,
            likes: Math.floor(Math.random() * 1000) + 750,
            shares: Math.floor(Math.random() * 750) + 500,
            text: text,
            timestamp: Date.now(),
          });
        });
      }
    );
  };

  const uploadPostNoImage = (e) => {
    addDoc(collection(db, "posts"), {
      userPicture: "../images/profile.jpg",
      username: "teanmi",
      displayName: "teanmi",
      verified: true,
      comments: Math.floor(Math.random() * 500) + 1,
      likes: Math.floor(Math.random() * 1000) + 750,
      shares: Math.floor(Math.random() * 750) + 500,
      text: text,
      timestamp: Date.now(),
      
    });
  };

  const reset = () => {
    setText("");
    setShareImage("");
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  }, [text]);

  const handleImageChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="../images/profile.jpg" sx={{ width: 50, height: 50 }} />
          <div className="input__container">
            <input
              onChange={(e) => handleTextChange(e)}
              value={text}
              className="tweetBox__inputText"
              placeholder="What's happening?"
              type="text"
            />
            <div className="uploadImage">
              {shareImage && (
                <img
                  className="img"
                  src={URL.createObjectURL(shareImage)}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="tweetBox__imageButton">
            <label htmlFor="file">
              <BrokenImageOutlinedIcon
                className="hover"
                sx={{ fill: "var(--twitter-color)" }}
              />
            </label>
            <input
              id="file"
              className="tweetBox__imageInput"
              type="file"
              accept="image/gif, image/jpeg, image/png"
              name="image"
              style={{ display: "none" }}
              onChange={(e) => handleImageChange(e)}
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
