import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = ()=> {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // Early return, if below is true then the code will not go down
    if(!isMenuOpen) return null;

    return (

        <div className="shadow-lg p-3 w-[200px]">

           <h1 className="font-bold ">
          <Link to="/">
            🌎Home
            </Link>
           </h1>
            <ul>
                <li>Shorts</li>
                <li>Live</li>
                <li>YouTube Premium</li>
                <li>YouTube Music</li>
            </ul>
            <hr></hr>

            <h1 className="font-bold ">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <hr></hr>

            <h1 className="font-bold ">You</h1>
            <ul>
                <li>Watch Later</li>
                <li>Favourite</li>
                <li>Liked Videos</li>
                <li>Your Clips</li>
            </ul>

        </div>

    )
}

export default Sidebar;