import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
    // <div>
    // <main>
    //   <Routes>

    //   <Route path="/" component={Home}/>
    //   <Route path="/dashboard" component={() => <Dashboard />} />

    //   </Routes>
      
    // </main>
    
    // </div>


    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Navigate to={"/home"} /> } />
        {/* <Route exact path="/" component={() => <Home />}/> */}
        <Route element={<Home />} path="/home" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        {/* <Route path="/login" component={() => <Login />} /> */}

        <Route element={<Dashboard />} path="/dashboard" />
        {/* <Route path="/dashboard" component={() => <Dashboard />} /> */}

        <Route element={<Detail />} path="/guards/:id" />
        <Route element={<Update />} path="/update" />
        {/* <Route element={<Update />} path="/guards/:id/edit" /> */}
      </Routes>
    </div>
  );
};

export default App;
