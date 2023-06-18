import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { logout } from "../../Redux/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  // window.addEventListener("scroll", function () {
  //   const search = this.document.querySelector(".search");
  //   search.classList.toggle("active", window.screenY > 100);
  // });
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history("/auth/signin");
    }
  }, [userInfo, history]);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  // const submitHandler = (e) => {
  //   // history("/auth/signin");
  //   logoutHandler();
  // };

  return (
    <>
      <div className="profile">
        <div className="container mt-lg-5 mt-3">
          <div className="row align-items-start">
            <div className="col-lg-4 p-0 shadow ">
              <div className="author-card pb-0 pb-md-3">
                <div className="author-card-cover"></div>
                <div className="author-card-profile row">
                  <div className="author-card-avatar col-md-5">
                    <img src="./images/user.png" alt="userprofileimage" />
                  </div>
                  <div className="author-card-details col-md-7">
                    <h5 className="author-card-name mb-2">
                      {/* {userInfo ? (
                        <strong>{userInfo.username}</strong>
                      ) : (
                        <p></p>
                      )} */}
                    </h5>
                    <span className="author-card-position">
                      {/* <>Joined {moment(userInfo.createdAt).format("LL")}</> */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="wizard pt-3 ">
                <div className="d-flex align-items-start">
                  <div
                    className="nav align-items-start flex-column col-12 nav-pills me-3 "
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Profile Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                    {userInfo ? (
                      <div className="info">
                        <table className="tblone">
                          <tr>
                            <td>Username</td>
                            <td>:</td>
                            <td>{userInfo.username}</td>
                          </tr>
                          <tr>
                            <td>Role</td>
                            <td>:</td>
                            <td>{userInfo.role}</td>
                          </tr>
                        </table>

                        <button
                          type="submit"
                          onClick={(e) => {
                            logoutHandler(e);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <p>Please login to view your information!</p>
                    )}
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

export default Profile;
