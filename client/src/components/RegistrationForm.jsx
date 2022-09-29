import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/guardActions";

const Registration = () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [pic, setPic] = useState("default photo");
  
  const dispatch = useDispatch();
  const guardRegister = useSelector((state) => state.guardRegister)
  const { loading, error, guardInfo } = guardRegister;
  const navigate = useNavigate();


  useEffect(() => {
    if(guardInfo){
      // history.push("/dashboard")
      navigate("/dashboard")
      // window.location = "/dashboard";
    }
  }, [navigate, guardInfo]);


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }
    else {
      dispatch(register(firstName, lastName ,email, password));
    }

  };

  //onChange to update firstName and lastName
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1>Register</h1>
        </div>
        <div className="card-body d-flex">
          <div className="col">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}
            <form onSubmit={onSubmitHandler}>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">First Name:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={firstName}
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Last Name:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Email:</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  Confirm Password:
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <div className="row mb-3">
                {/* <label className="col-sm-2 col-form-label">
                  Profile Picture
                </label>
                <div className="col-sm-10">
                  <input
                    class="form-control"
                    onChange={(e) => postDetails(e.target.value[0])}
                    id="customFile"
                    type="file"
                    label="Upload Profile Picture"
                    // custom
                  />
                </div> */}
                  {/* <Form.Group controlId="pic">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.file
                      onChange={(e) => postDetails(e.target.value[0])}
                      id="custom-file"
                      type="image/png"
                      label="Upload Profile Picture"
                      custom
                    />
                  </Form.Group> */}
              </div>
              <input
                className="btn btn-primary mb-3"
                type="submit"
                value={"Create Account"}
              />
              <Link to={"/login"}>
                <p>already a member? Sign in</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
