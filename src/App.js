import React, {useState,useEffect} from "react";
import "./App.css";
import Top from "./Top.js"
import axios from 'axios'
import APOD from "./APOD.js"
import Bottom from "./Bottom.js"
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

  const [pic,setPic] = useState()
  const [info,setInfo] = useState()
  const [title,setTitle] = useState()
  const [today,setToday] = useState()
  const [date, setDate] = useState('')
  const [load,setLoad] = useState(false)

  function newDate(newDate){
    setDate('&date='+newDate)
  }
  

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + date)
    .then(res => {
      setPic(res.data.url)
      setInfo(res.data.explanation)
      setTitle(res.data.title)
      setToday(res.data.date)
      setLoad(false)
    })
    .catch(err => {
      setLoad(true)
      setPic('./space.gif')
      setInfo('')
      setTitle('')
      setToday('')
      setLoad(true)
    })
    .catch(err => {
      setTitle('Either no image available for date or exceeded key amount')
      console.log('no',err.data)
    })
  },[date])


  return(

    <div className="App App-header" >
      <div className = 'container'>
        <Filler>
          <img src='./logo512.png' alt='some logo' className = 'App-logo'/>
        </Filler>
      </div>
      <Top newDate = {newDate}/>
      {load ? <LoadText>There's no APOD for that date yet or exceeded DEMO keys. Please come back later.</LoadText> : null}
      <APOD imgText = {pic} title = {title} today={today} info = {info}/>
      <Bottom />
    </div>
  );
}

export default App;
