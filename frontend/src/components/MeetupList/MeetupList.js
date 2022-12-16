import React from "react";
import Meetup from "../Meetup/Meetup";
import styles from "./MeetupList.module.css";

const Meetuplist = function (props) {
  return (
    <ul className={styles["meetuplist"]}>
      {props.Meetup.map((meetup) => {
        return <Meetup key={meetup._id} id={meetup._id} title={meetup.title} desc={meetup.desc} location={meetup.location} />;
      })}
    </ul>
  );
};

export default Meetuplist;
