import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <h1>MeetUp</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allmeetups">All Meetups</Link>
        </li>
        <li>
          <Link to="/mymeetups">New Meetups</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
