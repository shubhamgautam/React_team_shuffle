import React from "react";
import "./NavItem.css";

const NavItem = (props) => {
  const onNavClick = () => {
    alert(props.title);
  };

  return (
    <div onClick={onNavClick} className="nav-item">
      {props.title}
    </div>
  );
};

export default NavItem;
