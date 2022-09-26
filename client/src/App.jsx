import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./lux.css";
import Register from "./views/Register";
import Detail from "./views/Detail";
import Update from "./views/Update";
import Home from "./views/Home";
import Login from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import NavBar from "./views/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} /> } />
        <Route element={<Home />} path="/home" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Detail />} path="/guards/:id" />
        <Route element={<Update />} path="/update" />
        {/* <Route element={<Update />} path="/guards/:id/edit" /> */}
      </Routes>
    </div>
  );
};

export default App;
