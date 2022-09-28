import React, {useState,useEffect, useMemo} from "react";
import "./App.css";
import APODImage from "./components/APODImage.js";
import apodCall from './axios/apodCall';

function App() {
  const currentDate = new Date().toISOString().slice(0, 10)
  const [apodState, setApodState] = useState({
    url:'',
    info:'',
    title:'',
    media_type:'',
    load:false
  })
  const [apodDate, setApodDate] = useState(currentDate)

  //const apodCache = {}
 
  useEffect(()=>{

  },[])

  const dateUpdate= e =>{
    setApodDate(e.target.value)
  }

  const dateSubmit = async e =>{
    try{
      setApodState(await apodCall(apodDate))
    }catch{
      setApodState({...apodState, title:'Either no image available for date or exceeded key amount'})
    }
  }
 
  return(
    <div className="App App-header" >
      <div className = 'container'>
        <div className = 'filler'>
          <img src='./nasa-logo-web-rgb.png' alt='some logo' className = 'App-logo'/>
        </div>
      </div>
      <div className = 'container'>
         <input id = 'calender' type='date' onChange={dateUpdate} value = {apodDate}/>  
         <button className = 'submitButton' onClick = {()=>dateSubmit()}>Submit</button>
      </div>
      {apodState.load ? <p className = 'loadText'>There's no APOD for that date yet or exceeded DEMO keys. Please come back later.</p> : null}
      <APODImage media_type = {apodState.media_type} url = {apodState.url} title = {apodState.title} today={apodState.today} info = {apodState.info}/>
    </div>
  );
}

export default App;
