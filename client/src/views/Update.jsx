import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [pic, setPic] = useState("");
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
          <form onSubmit={updateGuard}>
            <div className="d-flex">
              <div className="col">
                <p>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Last Name:</label>
                  <input
                    type="number"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </p>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Update"}
                />
                <Link to={"/dashboard"}>
                  <button className="btn btn-primary ms-1">Cancel</button>
                </Link>
              </div>
              <div className="col">
                <div className="" style={{ width: "300px" }}>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
