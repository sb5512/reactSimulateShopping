import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Items: <b>{props.items}</b>
      </a>
    </nav>
  );
};
export default Navbar;
