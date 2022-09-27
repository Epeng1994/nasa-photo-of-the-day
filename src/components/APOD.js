import React from "react";
import "../App.css";
import styled, {keyframes} from 'styled-components'

const DivWrapper = styled.div`
        width:80vw;
        font-size: 30px;
        margin-left:10vw;
    `;
    const kf=keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity:1;
        }
    `;
    const Apod = styled.img`
        width: 60vw;
        height:30vw;
    `;
    const ApodWrapper = styled.div`
        opacity: 1;
        animation: ${kf} 1.5s ease-in-out;
    `;
    const InfoText = styled.p`
        font-size:1.5vw;
    `

function APOD(props){
    return(
        <ApodWrapper>
            <p>{props.title} {props.today}</p>
            <Apod src={props.imgText} alt='some space pic'/>
            <DivWrapper>
                <InfoText>{props.info}</InfoText>
            </DivWrapper>
        </ApodWrapper>
    )
}

export default APOD;