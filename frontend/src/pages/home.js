import React from "react";
import Navbar from "../components/navbar";
import Billboard from "../components/billboard";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Top10Carousel from "../components/top10Carouself";

function Home(){
    return(
        <div>
        <Navbar></Navbar>
        <Billboard></Billboard>
        <Carousel></Carousel>
        <Top10Carousel></Top10Carousel>
        <Carousel></Carousel>
        <Carousel></Carousel>
        <Top10Carousel></Top10Carousel>
        <Footer></Footer>
        </div>
    );
}

export default Home;