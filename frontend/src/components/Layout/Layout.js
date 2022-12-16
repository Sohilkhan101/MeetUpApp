import React, { Fragment } from "react";
import MainNavigayion from "./MainNavigation";
import styles from "../Layout/Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={styles.main}>
        <header>
          <MainNavigayion />
        </header>
        <main style={{ marginTop: "15.5rem" }}>{props.children}</main>
        <footer></footer>
      </div>
    </Fragment>
  );
};

export default Layout;
