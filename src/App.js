import React, {useState,useEffect} from "react";
import "./App.css";
import Top from "./Top.js"
import axios from 'axios'
import APOD from "./APOD.js"
import Bottom from "./Bottom.js"



function App() {

  const [pic,setPic] = useState()
  const [info,setInfo] = useState()
  const [title,setTitle] = useState()
  const [today,setToday] = useState()
  const [date, setDate] = useState('')

  function newDate(newDate){
    setDate('&date='+newDate)
  }
  

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + date)
    .then(res => {
      console.log(res)
      setPic(res.data.url)
      setInfo(res.data.explanation)
      setTitle(res.data.title)
      setToday(res.data.date)
    })
    .catch(err => {
      setTitle('Either no image available for date or exceeded key amount')
      console.log('no',err.data)
    })
  },[date])


  return(

    <div className="App App-header" >
      <div className = 'container'>
        <img className='star' src='./starfall-gif-51.gif' alt= 'starry night'/>
        <img src='./logo512.png' alt='some logo' className = 'App-logo'/>
      </div>
      <Top newDate = {newDate}/>
      <APOD imgText = {pic} title = {title} today={today}/>
      <Bottom info = {info}/>
    </div>
  );
}

export default App;
