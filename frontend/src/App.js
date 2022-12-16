import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Mymeetups from "./pages/Mymeetups";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/Layout/home";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmeetups" element={<AllMeetups />} />
        <Route path="/mymeetups" element={<Mymeetups />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/join" element={<join />} />
      </Routes>
    </Layout>
  );
}
export default App;
