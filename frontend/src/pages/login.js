import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Billboard from "../components/billboard";
function login(){
    return(
        <div>
        <Navbar></Navbar>
        <Billboard></Billboard>
        <Footer></Footer>
        </div>
    );
}

export default login;