import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../css/MainNav.module.css";
import logo from "../img/logo.png";
const MainNav = () => {
  return (
    <div className={classes["main-nav"]}>
      <div className={classes.logo}></div>

      <ul className={classes.links}>
        <li>
          <NavLink activeClassName={classes.active} to="/home">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">
            ABOUT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
