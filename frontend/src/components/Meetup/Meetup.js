import React from "react";
import styles from "./Meetup.module.css";
import Axios from "axios";

const Meetup = (props) => {
  const deletee = () => {
    Axios({
      method: "DELETE",
      data: {
        id: props.id,
      },
      withCredentials: true,
      url: "http://localhost:3000/delete/",
    }).then((res) => {
      if (res.status === 200) {
        window.location = "/Allmeetups";
      }
    });
  };
  return (
    <li className={styles.meetup}>
      <div className={styles.card}>
        <p className={styles.name}>{props.title}</p>
        <p className={styles.desc}>{props.desc}</p>
        <span className={styles.location}> Location : {props.location}</span>
      </div>
      <br></br>

      <div className={styles.delete}>
        <div>
          <button className={styles.btn}>Join</button>
        </div>
        <div>
          <button className={styles.btn} onClick={deletee}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Meetup;
