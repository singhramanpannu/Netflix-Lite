import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar(){
    const[scrolled,setScrolled] = useState(false);//declaring states
    useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 50); }; 
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
 }, []);
 
    return(
        <div className="fixed w-full flex items-center justify-between h-[50px] z-50 px-8 py-4 transitions-color duration-300 ">
        <div className="text-red-600 font-bold text-3xl tracking-wide ">
        Netflix
        </div>


        <div className="flex items-center justify-between  w-[50%] text-sm">
        <Link to="/">Home</Link>
        <Link to="/watchlist">watchlist</Link>
        <Link to="/login">Shows</Link>
        <Link to="/login">Movies</Link>
        <Link to="/login">My List</Link></div>


        <div className=" flex justify-between items-center gap-5 text-sm text-[0.8rem]">
        <h3>Icons</h3>
        <Link to="/login">Login</Link>
        </div>
        </div>
        
    );
}

export default Navbar;