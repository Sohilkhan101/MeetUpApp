import axios from "axios";

const BACKEND_URL = "http://localhost:3000";

export async function getAllMeetups() {
  const res = await axios.get(`${BACKEND_URL}/allmeetups`);
  if (res.status !== 200) {
    throw new Error("something went wrong");
  }
  return res.data;
}
