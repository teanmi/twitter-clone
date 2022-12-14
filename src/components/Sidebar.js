import React from 'react'
import "./Sidebar.css";
import SidebarIcon from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon />
      <SidebarIcon icon={<HomeIcon />} text="Home" />
      <SidebarIcon icon={<TagIcon />} text="Explore" />
      <SidebarIcon icon={<NotificationsOutlinedIcon />} text="Notifications" />
      <SidebarIcon icon={<EmailOutlinedIcon />} text="Messages" />
      <SidebarIcon icon={<BookmarkBorderOutlinedIcon />} text="Bookmarks" />

      <SidebarIcon icon={<PersonOutlineOutlinedIcon />} text="Profile" />
      <SidebarIcon icon={<MoreHorizOutlinedIcon />} text="More" />

    </div>
  )
}

export default Sidebar
