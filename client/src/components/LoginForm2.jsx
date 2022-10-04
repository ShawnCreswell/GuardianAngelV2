import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useHistory } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/guardActions";
import "./login.css";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login2 = () => {

    //keep track of what is being typed via useState hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const guardLogin = useSelector((state) => state.guardLogin);
    const { loading, error, guardInfo } = guardLogin;
  
  
    useEffect(() => {
      if(guardInfo){
        navigate("/profile")
        // history.push("/dashboard")
        // window.location = "/dashboard";
      }
    }, [navigate, guardInfo]);
  
    //handler when the form is submitted
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <form onSubmit={onSubmitHandler}>


              <MDBInput
                wrapperClass="mb-4 w-100"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                placeholder={"Email Address"}
                onChange={(e) => setEmail(e.target.value)}
                />
              <MDBInput
                wrapperClass="mb-4 w-100"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                />

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
                />

              <MDBBtn className="mt-5" style={{width: "100%"}} size="lg">Login</MDBBtn>

              <hr className="my-4" />

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
                >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
                >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with facebook
              </MDBBtn>
                </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login2;
