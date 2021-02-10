import React from "react";
import Navbar from "../Navigation/Navbar";
import Sidebar from "../SideBar/Sidebar";
import Widgets from "../Widget/Widget";
import  "./Quora.css";
import Feed from "../Feed/Feed";

function Quora() {
  return (
    <div className="quora">
      <Navbar />
      <div className="quora__content">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    </div>
  );
}

export default Quora;
