import React, { useState } from "react";
import Axios from "axios";
import styles from "../pages/Login.module.css";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginn = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => {
      if (res.status === 200) {
        window.location = "/Allmeetups";
      }
    });
  };
  return (
    <div className={styles.login}>
      <div>
        <label htmlFor="username" className={styles.heading}>
          Login
        </label>
        <div>
          <label htmlFor="username" className={styles.username}>
            Username
          </label>
          <input className={styles.input} type="text" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" className={styles.username}>
            Password
          </label>
          <input className={styles.input} type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <button className={styles.input} onClick={loginn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
