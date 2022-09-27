import React from "react";
import "../App.css";

function APOD(props){
    return(
        <div className = 'apodWrapper'>
            <p>{props.title} {props.today}</p>
            {props.media_type === 'image' ? <img className = 'apod' src={props.url} alt='some space pic'/> : <iframe title ='video' width="1024" height="800" src={props.url}></iframe>}
            <div className = 'divWrapper'>
                <div className = 'infoText'>{props.info}</div>
            </div>
        </div>
    )
}

export default APOD;