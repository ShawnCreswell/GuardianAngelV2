import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/guardActions";

const NavBar = () => {
  // const history = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guardLogin = useSelector(state => state.guardLogin);
  const { guardInfo } = guardLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={"/home"} style={{ textDecorationLine: "none" }}>
          <p className="navbar-brand">
            Guardian Angel
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link active" >
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                Roster
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                Schedule
              </p>
            </li>
            <li className="nav-item">
              {/* <Link to={"/login"}> */}
                <p
                  className="nav-link"
                  // style={{}}
                  href="#"
                  onClick={logoutHandler}
                  >

                Logout
                  </p>
                  {/* </Link> */}
            </li>
                  {/*<h1>Welcome {guardInfo.firstName}</h1>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
