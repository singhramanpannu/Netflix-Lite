import React from "react";
import Navbar from "../components/navbar";
import Billboard from "../components/billboard";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Top10Carousel from "../components/top10Carouself";

function Home(){
    const trendingItems = [{
        title: "Stranger Things",
        imageUrl: "https://image.tmdb.org/t/p/w200/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
    }, {
        title: "Money Heist",
        imageUrl: "https://image.tmdb.org/t/p/w200/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
    }, {
        title: "The Witcher",
        imageUrl: "https://image.tmdb.org/t/p/w200/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
    }, {
        title: "Wednesday",
        imageUrl: "https://image.tmdb.org/t/p/w200/9PFonqcybcgjrYJm6vt7b7bk2M2.jpg"
    }, ];
    const top10Items = [{
        title: "Squid Game",
        imageUrl: "https://image.tmdb.org/t/p/w200/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"
    }, {
        title: "Breaking Bad",
        imageUrl: "https://image.tmdb.org/t/p/w200/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg"
    }, {
        title: "Narcos",
        imageUrl: "https://image.tmdb.org/t/p/w200/rTmal9fDbwh5F0waol2hq35U4ah.jpg"
    }, {
        title: "Dark",
        imageUrl: "https://image.tmdb.org/t/p/w200/7l3war94JjzFvJ0pV7s3Z2yZp1k.jpg"
    }, {
        title: "The Crown",
        imageUrl: "https://image.tmdb.org/t/p/w200/1N0uJQ4Z1sLxkZ9VHtV6nRvWmvD.jpg"
    }, ];
    return(
        <div>
        <Navbar></Navbar>
        <Billboard></Billboard>
        <Carousel title="Trending Now" items={trendingItems}></Carousel>
        <Top10Carousel title="Top 10 Shows Today" items={top10Items}></Top10Carousel>
        <Carousel title="Trending Now" items={trendingItems}></Carousel>
        <Carousel title="Trending Now" items={trendingItems}></Carousel>
        <Top10Carousel title="Top 10 Shows Today" items={top10Items}></Top10Carousel>
        <Footer></Footer>
        </div>
    );
}

export default Home;