import React, { useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const Registration = () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("default photo");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords Do not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:8000/api/guards",
          { firstName, lastName, email, password },
          config
        );
        
        console.log(data)
        setLoading(false);
        localStorage.setItem("guardInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Imgae");
    }

    setPicMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "GuardianAngel");
      data.append("cloud_name", "zhawnv2");
      fetch("https://api.cloudinary.com/v1_1/zhawnv2/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
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
