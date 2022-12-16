import React, { useState, useEffect } from "react";
import MeetupList from "../components/MeetupList/MeetupList";
import { getAllMeetups } from "../lib/api";
import useHttp from "../hooks/use-http";

const AllMeetup = () => {
  const { data, status, error, sendRequest } = useHttp(getAllMeetups, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return <h1>Loading......</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return <div>{data && <MeetupList Meetup={data} />}</div>;
};

export default AllMeetup;
