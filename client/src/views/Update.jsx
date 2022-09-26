import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/Guards/" + id).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, [id]);

  const updateGuard = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/guards/" + id, {
        title,
        price,
        description,
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
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Last Name:</label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Email</label>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </p>
                <p>
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
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
