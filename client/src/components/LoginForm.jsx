import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";


const Login = ({history}) => {
  //keep track of what is being typed via useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)


  //handler when the form is submitted
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type":"application/json"
        }
      }

      setLoading(true)

      const { data } = await axios.post(
        "http://localhost:8000/api/guards/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem('guardInfo', JSON.stringify(data));
      setLoading(false)
    } catch (error){
      setError(error.response.data.message); 
      setLoading(false);

    }



    // axios
    //   .post("http://localhost:8000/api/guards/login", {
    //     email,
    //     password,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //   });
  };
  //onChange to update firstName and lastName
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1>Login</h1>
        </div>
        <div className="card-body d-flex">
          <div className="col">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <form onSubmit={onSubmitHandler}>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Email:</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      value={email}
                      placeholder="Enter email"
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
                <input className="btn btn-primary mb-3" type="submit" value={"Login"} />
                <Link to={"/register"}>
                  <p>Register</p>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
