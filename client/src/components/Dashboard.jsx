import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container p-5" style={{ backgroundColor: "white" }}>
      <h1 className="mb-5 mt-3">Dashboard</h1>
      <div className="row">
        <div className="d-flex align-items-center justify-content-between">
          <div className="" style={{ width: "300px" }}>
            <img
              className="mb-3 border border-primary border-5"
              style={{ width: "100%", borderRadius: "50%" }}
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt=""
            />
            <h2 className="text-center">Name:</h2>
            <div className="form-check form-switch text-center">
              <input
                className="form-check-input"
                style={{ width: "75px" }}
                type="checkbox"
                role="switch"
                id="flexSwitchDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Clock in/Clock Out
              </label>
            </div>
          </div>
          <div className="text-center">
            <h3>Hours</h3>
            <h5>0</h5>
          </div>
          <div className="text-center">
            <h3>Hr/Rate</h3>
            <h5>$50</h5>
          </div>
          <div className="text-center">
            <h3>Sick Hours</h3>
            <h5>41</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-center mt-5">
          <Link to={"/update"} style={{ textDecorationLine: "" }}>
            <h5>Edit profile</h5>
          </Link>
          <Link to={"/update"} style={{ textDecorationLine: "" }}>
            <h5>Settings</h5>
          </Link>
          <Link to={"/Home"} style={{ textDecorationLine: "" }}>
            <h5>Logout</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
