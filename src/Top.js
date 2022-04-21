import React from "react";
import "./App.css";


function TOP(props){

    function check(){
       props.newDate(document.querySelector('#calender').value)
       
    }

    return(
        <div>
            <nav> 
                <input id = 'calender' className = 'date' type='date'/>
                <div>
                    <button className = 'dateButton' onClick = {() => check()}>Update the date</button>
                </div>
                
            </nav>
        </div>
    )
}

export default TOP;