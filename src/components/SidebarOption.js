import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, icon, text, logo }) {
  return (
    <div
      className={`sidebarOption ${active && "sideBarOption--active"} ${
        logo && "sidebarOption--logo"
      }`}
    >
      <figure className="icon__wrapper"> {icon}</figure>

      {!logo ? <h2 className="sidebarOption__text">{text}</h2> : <></>}
    </div>
  );
}

export default SidebarOption;
