import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import APOD from "./components/APOD.js"
import styled from 'styled-components'

const Filler = styled.div`
  height:15vw;
  width: 100vw;
  background-color: #282c34;
  background-image: url('./starfall.gif');
`
const LoadText = styled.p`
  width:80vw;
  font-size:2vw;
  top:30vw;
  margin-left:10vw;
`


function App() {

  const [apodState, setApodState] = useState({
    pic:'',
    info:'',
    title:'',
    today:'',
    date:'',
    load:false
  })
 
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + apodState.date)
    .then(res => {
      setApodState({
        pic:res.data.url,
        info:res.data.explanation,
        title:res.data.title,
        today:res.data.date,
        date:'',
        load:false
      })
    })
    .catch(err => {
      setApodState({
        pic:'./space.gif',
        info:'',
        title:'',
        today:'',
        date:'',
        load:true
      })
    })
    .catch(err => {
      setApodState({...apodState, title:'Either no image available for date or exceeded key amount'})
    })
  },[apodState.date])

  const dateUpdate= e=>{
    setApodState({...apodState, date: `&date=${e.target.value}`})
  }
 
  return(
    <div className="App App-header" >
      <div className = 'container'>
        <Filler>
          <img src='./logo512.png' alt='some logo' className = 'App-logo'/>
        </Filler>
      </div>
      <div>
         <input id = 'calender' type='date' onChange={dateUpdate} />  
      </div>
      {apodState.load ? <LoadText>There's no APOD for that date yet or exceeded DEMO keys. Please come back later.</LoadText> : null}
      <APOD imgText = {apodState.pic} title = {apodState.title} today={apodState.today} info = {apodState.info}/>
    </div>
  );
}

export default App;
