import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useHistory } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/guardActions";

const Login = () => {
  //keep track of what is being typed via useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guardLogin = useSelector((state) => state.guardLogin);
  const { loading, error, guardInfo } = guardLogin;


  useEffect(() => {
    if(guardInfo){
      navigate("/dashboard")
      // history.push("/dashboard")
      // window.location = "/dashboard";
    }
  }, [navigate, guardInfo]);

  //handler when the form is submitted
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
              <input
                className="btn btn-primary mb-3"
                type="submit"
                value={"Login"}
              />
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
