import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { YOUTUBE_SEARCH_API } from "../utils/constants";


const Head = ()=>{
    const [searchQuery, setSearchQuery] = useState(""); 
        const dispatch = useDispatch()

        const [suggestions,setSuggestions]= useState([]);
        const [showSuggestions, setShowSuggestions] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                if (searchQuery) {
                    getSearchSuggestions();
                }
            }, 200);
    
            // Cleanup the timeout if the user is still typing
            return () => {
                clearTimeout(timer);
            };
        }, [searchQuery]); 

        const getSearchSuggestions = async ()=>{
            console.log("API Query")
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
            const json = await data.json();
            setSuggestions(json[1])
            console.log(json)
        }

    const toggleMenuHandler = ()=>{
       dispatch(toggleMenu());

        

    }

    return (
    <div className="grid grid-flow-col shadow-xl">
        <div className="m-2 p-2 flex" >
             <img 
             onClick={toggleMenuHandler}
             className="h-10 w-10 ml-2 mt-3 cursor-pointer rounded-lg"  src="https://cpwebassets.codepen.io/assets/packs/menuicon-c2b6b74a595ea5032ab0a2cfe69a4b11.svg" alt="hamburger-logo"></img>
            <a href="http://localhost:3000/"><img className="h-[70px] w-[150px] ml-2 "  src="https://static.vecteezy.com/system/resources/previews/016/629/896/non_2x/youtube-logo-on-black-background-free-vector.jpg" alt="youtube-logo"></img></a> 
        </div>
        <div >
           <div className="mt-6 p-2">
            <input 
            className="bg-gray-100 w-[400px] h-10 rounded-l-full py-1 px-2 border-gray-200 border-2" 
            placeholder="Search..." 
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            ></input>
            <button className="bg-gray-200 font-bold pl-2 pr-3 py-1 rounded-r-full border-gray-200 border-2 text-lg" > 🔍 </button>
            </div>
            {showSuggestions && suggestions.length > 0 && (
                 <div className="fixed bg-white px-2 w-[410px] rounded-lg shadow-lg border border-gray-100 absolute">
                   <ul className="ml-2">
                   {suggestions.map(s=> <li key={s} className="py-1 px-1 rounded-md  hover:bg-gray-200 ">{s}</li> )}                  
                  </ul>
                 </div>
                 )}
            </div>
            

        <div className=" m-2 p-2"> 
            <img className="h-[40px] w-[40px] rounded-md mt-3 ml-[500px]" src="https://as2.ftcdn.net/v2/jpg/07/95/95/13/1000_F_795951374_QR1tADRPLjbh0NqrJqLPbzOTHJW5HjmY.jpg" alt="user-logo"></img>
        </div>

    </div>
    )
}

export default Head;