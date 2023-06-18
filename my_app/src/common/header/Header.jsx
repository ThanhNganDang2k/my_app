import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import "./Header.css";
const Header = ({cartItem}) => {
    return(
        <>
        <Head></Head>
        <Search cartItem={cartItem}></Search>
        <Navbar></Navbar>
        </>
    )
}

export default Header;