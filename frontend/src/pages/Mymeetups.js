import React, { useState } from "react";
import Axios from "axios";
import styles from "../pages/Mymeetup.module.css";

const Mymeetup = () => {
  const [meetupName, setmeetupName] = useState("");
  const [meetupDesc, setmeetupDesc] = useState("");
  const [meetupLocation, setmeetupLocation] = useState("");

  const loginn = () => {
    Axios({
      method: "POST",
      data: {
        title: meetupName,
        desc: meetupDesc,
        location: meetupLocation,
      },
      withCredentials: true,
      url: "http://localhost:3000/newmeetup",
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
          <label htmlFor="password" className={styles.username}>
            Description
          </label>
          <input className={styles.input} type="text" placeholder="Description" onChange={(e) => setmeetupDesc(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username" className={styles.username}>
            Location :
          </label>
          <input className={styles.input} type="text" placeholder="Location" onChange={(e) => setmeetupLocation(e.target.value)} />
        </div>
        <button className={styles.input} onClick={loginn}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Mymeetup;
