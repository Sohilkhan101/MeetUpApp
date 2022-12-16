import React, { useState } from "react";
import Axios from "axios";
import styles from "../pages/join.module.css";

const Mymeetup = () => {
  const [meetupName, setmeetupName] = useState("");
  const [meetupLocation, setmeetupLocation] = useState("");

  const joinn = () => {
    Axios({
      method: "POST",
      data: {
        title: meetupName,
        location: meetupLocation,
      },
      withCredentials: true,
      url: "http://localhost:3000/join",
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
          MeetUp
        </label>
        <div>
          <label htmlFor="username" className={styles.username}>
            Title
          </label>
          <input className={styles.input} type="text" placeholder="Title" onChange={(e) => setmeetupName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username" className={styles.username}>
            Location :
          </label>
          <input className={styles.input} type="text" placeholder="Location" onChange={(e) => setmeetupLocation(e.target.value)} />
        </div>
        <button className={styles.input}>Join</button>
      </div>
    </div>
  );
};

export default Mymeetup;
