import React from "react";
import "./App.css";
import styled from 'styled-components'

const Date = styled.input`
    top:23vw;
    left:38vw;
    height: 4vw;;
    font-size: larger;
  `
  


function TOP(props){

    function check(){
       props.newDate(document.querySelector('#calender').value)
       
    }


    return(
        <div>
            <Date id = 'calender' type='date' onChange={() => check()}/>  
        </div>
    )
}

export default TOP;