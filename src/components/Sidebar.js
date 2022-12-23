import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {


const [isDesktop, setIsDesktop] = useState(false)
  const handleResize = () => {
    if (window.innerWidth > 1300) {
        setIsDesktop(true)
    } else {
        setIsDesktop(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className="sidebar">
      <SidebarOption icon={<TwitterIcon />} logo />
      <SidebarOption active icon={<HomeIcon />} text="Home" />
      <SidebarOption icon={<TagIcon />} text="Explore" />
      <SidebarOption
        icon={<NotificationsOutlinedIcon />}
        text="Notifications"
      />
      <SidebarOption icon={<EmailOutlinedIcon />} text="Messages" />
      <SidebarOption icon={<BookmarkBorderOutlinedIcon />} text="Bookmarks" />

      <SidebarOption icon={<PersonOutlineOutlinedIcon />} text="Profile" />
      <SidebarOption icon={<MoreHorizOutlinedIcon />} text="More" />

      <button className="sidebar__btn">{isDesktop ? "Tweet" : <CreateIcon />}</button>
      
    </div>
  );
}

export default Sidebar;
