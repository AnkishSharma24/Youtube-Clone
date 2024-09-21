import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";




const WatchPage = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch])

    return(
        <div className="flex-col w-full">
          <div className="m-1 flex w-full">
            <div>
                  <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" +searchParams.get("v")}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen></iframe>
            </div>

         
                <div className="w-full mr-2 ">                 
                  <LiveChat/>
                </div>
              

          </div>
          <h3 className="font-bold text-xl">Comments</h3>
          <CommentContainer/>
        </div>  
    )
}

export default WatchPage;