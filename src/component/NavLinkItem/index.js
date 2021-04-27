import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
const NavLinkItem = (props) => {
  return (
    <Link  className="text-base font-medium text-gray-500 hover:text-gray-900" to={props.to}>{props.name}</Link>
  );
};

export default NavLinkItem;
