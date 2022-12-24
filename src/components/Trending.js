import React from "react";
import "./Trending.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Trending = ({ title, tweetAmount }) => {
  return <div className="trending">
    <h4 className="trending__subtitle">Trending in United States</h4>
    <h3 className="trending__title">{title }</h3>
    <h5 className="trending__tweetAmount">{tweetAmount} Tweets</h5>
    <MoreHorizIcon fontSize="small" sx={{fill: "var(--twitter-dark-lightText)", }}className="trending__more" />
  </div>;
};

export default Trending;
