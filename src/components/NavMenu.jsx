import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home/topics">Topics</Link>
        </li>
        <li>
          <Link to="/home/users">List of users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
