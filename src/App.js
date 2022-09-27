import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import APODImage from "./components/APODImage.js"
import styled from 'styled-components'

const Filler = styled.div`
  height:15vw;
  width: 100vw;
  background-color: #282c34;
  background-image: url('./starfall.gif');
`
function App() {

  const [apodState, setApodState] = useState({
    url:'',
    info:'',
    title:'',
    today:'',
    date:'',
    media_type:'',
    load:false
  })

  const apodCache = []
 
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + apodState.date)
    .then(res => {
      console.log(res)
      setApodState({
        media_type:res.data.media_type,
        url:res.data.url,
        info:res.data.explanation,
        title:res.data.title,
        today:res.data.date,
        load:false
      })
    })
    .catch(err => {
      setApodState({
        url:'./space.gif',
        info:'',
        title:'',
        today:'',
        date:'',
        media_type:'image',
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
          <img src='./nasa-logo-web-rgb.png' alt='some logo' className = 'App-logo'/>
        </Filler>
      </div>
      <div>
         <input id = 'calender' type='date' onChange={dateUpdate} />  
      </div>
      {apodState.load ? <p className = 'loadText'>There's no APOD for that date yet or exceeded DEMO keys. Please come back later.</p> : null}
      <APODImage media_type = {apodState.media_type} url = {apodState.url} title = {apodState.title} today={apodState.today} info = {apodState.info}/>
    </div>
  );
}

export default App;
