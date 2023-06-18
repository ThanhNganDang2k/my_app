import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";
const Search = ({ cartItem, location, history }) => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", window.screenY > 100);
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //   }
  // }, [userInfo, history]);

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };
  return (
    <section className="search">
      <div className="container c_flex">
        {/* <div className="logo width">
        <img src={logo} alt=''></img>
        </div> */}

        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search and hit enter..."></input>
          <span>All Category</span>
        </div>

        <div className="icon f_flex width">
          <div className="login">
            {/* {userInfo ? (
              <Link to="/profile">
                <i className="fa-solid fa-address-card"></i>
              </Link>
            ) : ( */}
            <Link to="/auth/signin">
              <i className="fa fa-user icon-circle"></i>
            </Link>
            {/* )} */}
          </div>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              {/* <span>{cartItem.length === 0 ? "" : cartItem.length}</span> */}
              <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
