import React from "react";
import NavItem from "../NavItem";
import "./index.css";

const Navbar = (props) => {
  const getAllNavItems = () => {
    return props.navArray.map((item) => {
      return <NavItem key={item.key} title={item.title} />;
    });
  };

  return <div className="nav-cont">{getAllNavItems()}</div>;
};

export default Navbar;
