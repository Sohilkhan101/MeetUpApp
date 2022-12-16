import React, { Fragment } from "react";
import style from "./home.module.css";
const Home = () => {
  return (
    <Fragment>
      <div className={style.bg}>
        <div className={style.welcome}></div>
      </div>
    </Fragment>
  );
};
export default Home;
