import React from "react"
import Button from "./Button";

const ButtonList = ()=>{
    return(
        <div className="flex">
                
            <Button name= "All" />
            <Button name="Music" />
            <Button name="Art" />
            <Button name="Anime" />
            <Button name="Gaming" />
            <Button name="Cars" />
            <Button name="Bikes" />
        </div>
    )
}

export default ButtonList;