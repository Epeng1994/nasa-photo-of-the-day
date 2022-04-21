import React from "react";
import "./App.css";


function APOD(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img className = 'apod' src={props.imgText} alt='some space pic'/>
        </div>
    )
}

export default APOD;