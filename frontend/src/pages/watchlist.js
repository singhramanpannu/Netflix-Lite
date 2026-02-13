import React from "react";
import Navbar from "../components/navbar";
import Billboard from "../components/billboard";
import Footer from "../components/footer";

function watchlist(){
    return(
        <div>
        <Navbar></Navbar>
       <Billboard></Billboard>
       <Footer></Footer>
        </div>
    );
}

export default watchlist;