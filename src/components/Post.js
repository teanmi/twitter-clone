import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Post({
  userPicture,
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  likes,
  shares,
  comments,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          className="post__avatarImg"
          sx={{ width: 50, height: 50, color: "red" }}
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              <span className="post__headerDisplayName">Joe Swatson</span>
              <span>
                <VerifiedIcon
                  color="secondary"
                  sx={{ width: 18, height: 18, fill: "var(--twitter-color)" }}
                  className="post__badge"
                />
                <span className="post__headerUsername">@teanmi</span>
              </span>
            </h3>
            <span className="post__headerSeperation">.</span>
            <h4 className="post__headerTimestamp">12h</h4>
            <div className="post__btn post__BtnHover post__headerMore post__btnHoverCircle">
              <MoreHorizIcon
                sx={{ fill: "var(--twitter-dark-lightText)" }}
                fontSize="small"
              />
            </div>
          </div>

          <div className="post__headerDescription">
            <p>
              I am the bestI am the bestI am the bestI am the bestI am the bestI
              am the bestI am the bestI am the bestI am the bestI am the bestI
              am the bestI am the bestI am the bestI am the bestI am the bestI
              am the best
            </p>
            {/* <img
                className="post__headerImg"
                src="https://www.w3schools.com/images/w3schools_green.jpg"
                alt=""
              /> */}
          </div>
        </div>
        <div className="post__footer">
          <div className="post__Btn post__BtnHover post__footerComments">
            <ChatBubbleOutlineRoundedIcon
              sx={{ fill: "var(--twitter-dark-lightText)" }}
              fontSize="small"
            />
            <div className="footer__shareCount">2000</div>
          </div>
          <div className="post__Btn post__BtnHover post__footerShares">
            <RepeatRoundedIcon
              sx={{ fill: "var(--twitter-dark-lightText)" }}
              fontSize="small"
            />
            <div className="footer__shareCount">1000</div>
          </div>
          <div className="post__Btn post__BtnHover post__footerLikes">
            <FavoriteBorderOutlinedIcon
              sx={{ fill: "var(--twitter-dark-lightText)" }}
              fontSize="small"
            />
            <div className="footer__shareCount">9999</div>
          </div>
          <div className="post__Btn post__BtnHover post__footerExport post__BtnHoverCircle">
            <FileUploadOutlinedIcon
              sx={{ fill: "var(--twitter-dark-lightText)" }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
