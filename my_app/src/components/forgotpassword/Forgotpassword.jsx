import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {
  forgotPassword,
  logout,
  sendEmail,
} from "../../Redux/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
const Forgotpassword = () => {
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

  const forgot_pass = useSelector((state) => state.userForgot);
  const { error, loading, userInfo } = forgot_pass;
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const forgotpasswordlHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email, password));
  };
  return (
    <>
      <div className="profile">
        <div className="container mt-lg-5 mt-3">
          <div className="row align-items-start">
            {/* panels */}
            <div
              className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                  <form className="Login col-md-8 col-lg-4 col-11">
                    <label>
                      New Password
                    </label>
                    <span
                      style={{
                        fontSize: "16px",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {error && (
                        <Message
                          variant="alert-danger"
                          style={{ color: "red" }}
                        >
                          {errorMessage ? errorMessage : error}
                        </Message>
                      )}
                      {/* {!error_reg && !errorMessage && (
                  <Message variant="alert-danger" style={{ color: "red" }}>
                    {"Successfully!"}
                  </Message>
                )} */}
                    </span>
                    <div className="info">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={handlePassword}
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirm}
                      />
                      <button
                        type="submit"
                        onClick={(e) => {
                          forgotpasswordlHandler(e);
                        }}
                        
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
