import React from "react";

const Sidebar = ()=> {
    return (

        <div className="shadow-lg p-3 w-[200px]">

           <h1 className="font-bold ">Home</h1>
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