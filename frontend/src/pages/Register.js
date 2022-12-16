import React, { useState } from "react";
import axios from "axios";
import styles from "../pages/Login.module.css";

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const registerr = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },

      withCredentials: true,
      url: "http://localhost:3000/register",
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
          Register
        </label>
        <div>
          <label htmlFor="username" className={styles.username}>
            Username
          </label>
          <input className={styles.input} type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" className={styles.username}>
            Password
          </label>
          <input className={styles.input} type="password" placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>
        <button className={styles.input} onClick={registerr}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Register;
