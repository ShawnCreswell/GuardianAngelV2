import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [pic, setPic] = useState("default photo");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/Guards/" + id).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmail(res.data.email);
      setPassword(res.data.password);
      // setPic(res.data.pic);
    });
  }, [id]);

  const updateGuard = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/guards/" + id, {
        firstName,
        lastName,
        email,
        password,
        // pic,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .finally(() => navigate("/guards"));
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1>Edit Profile</h1>
        </div>
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            <div className="mb-5" style={{ width: "300px" }}>
              <img
                className="mb-3 border border-primary border-5"
                style={{ width: "100%", borderRadius: "50%" }}
                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                alt=""
              />
              <label class="form-label" for="customFile">
                Default file input example
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </div>
          <form onSubmit={updateGuard}>
            <div className="d-flex justify-content-center">
              <div className=".col-md-6">
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    First Name:
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="text"
                      value={firstName}
                      placeholder="Enter First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Last Name:
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="text"
                      value={lastName}
                      placeholder="Enter Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Email:
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="email"
                      value={email}
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Password:
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="password"
                      value={password}
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Confirm Password:
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="password"
                      value={confirmPassword}
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Update"}
                />
                <Link to={"/profile"}>
                  <button className="btn btn-primary ms-1">Cancel</button>
                </Link>
              </div>
              <div className=".col-md-6">
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Website
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="text"
                      value={firstName}
                      placeholder="Enter First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    style={{ width: "28%" }}
                  >
                    Facebook
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      type="text"
                      value={lastName}
                      placeholder="Enter Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" style={{ width: "28%" }}>Instagram</label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                    className="form-control"
                    style={{ width: "100%" }}
                      type="email"
                      value={email}
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" style={{ width: "28%" }}>
                    Phone Number
                  </label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                    className="form-control"
                    style={{ width: "100%" }}
                      type="password"
                      value={password}
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" style={{ width: "28%" }}>Location</label>
                  <div className="col-sm-10" style={{ width: "40%" }}>
                    <input
                    className="form-control"
                    style={{ width: "100%" }}
                      type="password"
                      value={confirmPassword}
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
