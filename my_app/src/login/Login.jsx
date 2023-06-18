import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import "./index.js";
import { login } from "../Redux/Actions/userActions";
import { register } from "../Redux/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

import Toast from "../components/loadingError/Toast";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handlePassword(event) {
    let new_pass = event.target.value;
    setPassword(new_pass);
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 8) {
      setErrorMessage("Password length should be more than 8.");
    } else {
      setErrorMessage(null);
    }
  }
  function handleConfirm(event) {
    let new_pass = event.target.value;
    setconfirmPassword(new_pass);
    if (password != new_pass) {
      setErrorMessage("Password does not match");
    } else {
      setErrorMessage("");
    }
  }
  const dispatch = useDispatch();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { error_reg } = userRegister;

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const submitHandler_Up = (e) => {
    e.preventDefault();
    dispatch(register(username, password, email));
  };

  return (
    <>
      <section className="loginform">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          {/* <Toast></Toast> */}
          <div className="signup">
            <form onSubmit={submitHandler_Up}>
              <label htmlFor="chk" aria-hidden="true">
                Sign Up
              </label>
              <span
                style={{
                  fontSize: "16px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {error_reg && (
                  <Message variant="alert-danger" style={{ color: "red" }}>
                    {errorMessage ? errorMessage : error_reg}
                  </Message>
                )}
                {/* {!error_reg && !errorMessage && (
                  <Message variant="alert-danger" style={{ color: "red" }}>
                    {"Successfully!"}
                  </Message>
                )} */}
              </span>

              {loading && <Loading />}
              <input
                type="text"
                name="username"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                require=""
                value={password}
                onChange={handlePassword}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                require=""
                value={confirmPassword}
                onChange={handleConfirm}
                // onChange={(e) => setPassword(e.target.value)}
              />
              {/* <div style={{ color: "red" }}> {errorMessage} </div> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                require=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={submitHandler}>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                require=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                require=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Message variant="alert-danger">{error}</Message>}
              {/* {loading && <Loading />} */}
              <button type="submit">Login</button>
              <p
                style={{
                  fontStyle: "italic",
                  textDecoration: "underline",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/sendemail">Forgot Password?</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
