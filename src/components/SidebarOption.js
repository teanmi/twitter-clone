import React from "react";
import "./SidebarOption.css";

function SidebarIcon({ icon, text }) {
  return (
    <div className="sidebarOption">
      <figure className="icon__wrapper"> {icon}</figure>

      <p>{text}</p>
    </div>
  );
}

export default SidebarIcon;
