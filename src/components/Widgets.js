import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import Trending from "./Trending";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="container">
        <div className="widgets__input">
          <SearchIcon
            sx={{ fill: "var(--twitter-dark-lightText)" }}
            className="widgets__searchIcon"
          />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
          <Trending title="Election news and updates" tweetAmount="45.4k" />
          <Trending title="#WinterStorm" tweetAmount="32.9k" />
          <Trending title="President" tweetAmount="9,381" />
          <Trending title="Covid-19" tweetAmount="12.6k" />
          <Trending title="Cute cat photos" tweetAmount="6,052" />

          <p className="widgets__more">Show more</p>
        </div>

        <div className="widgets__footer">
          <div className="row">
            <div className="item">
              Terms of Service
            </div>
            <div className="item">
              Privacy Policy
            </div>
          </div>
          <div className="row">
            <div className="item">Cookie Policy</div>
            <div className="item">Accessibility</div>
            <div className="item">Ads info</div>
          </div>
          <div className="row">
            <div className="item">More...</div>
            <div className="item">&copy; 2022 Twitter, Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
