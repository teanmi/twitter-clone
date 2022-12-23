import React, { useState } from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";

const TweetBox = () => {
  const [shareImage, setShareImage] = useState("");

  const handleChange = (e) => {
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
          <Avatar src="" sx={{ width:50, height: 50 }}/>
          <div className="input__container">
            <input className="tweetBox__inputText" placeholder="What's happening?" type="text" />
            <div className="uploadImage">
              {shareImage && (
                <img className="img" src={URL.createObjectURL(shareImage)} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="tweetBox__imageButton">
            <label htmlFor="file">
              <BrokenImageOutlinedIcon sx={{fill: "var(--twitter-color)"}}  />
            </label>
            <input
              id="file"
              className="tweetBox__imageInput"
              type="file"
              accept="image/gif, image/jpeg, image/png"
              name="image"
              style={{ display: "none" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="tweetBox__tweetButton">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
