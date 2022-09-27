import React from 'react'
import './B.css';
import Popup from './Popups'
import { useState, useEffect} from "react";


function B() {
  const[buttonPopup,setButtonPopup]=useState(false);
const [timedPopup,setTimedpopup] = useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setTimedpopup(true);
  },3000);
}, []);


  return (
    <div className='d1'>
    <main>
    <h1>React Popups</h1>
    <br/> <br/>
    <button onClick={()=>{setButtonPopup(true)}}>Open Popup</button>
    </main>

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    <h3>My popup</h3>
    <p>This is my button triggered popup</p>
    </Popup>
  

    <Popup trigger={timedPopup} setTrigger={setTimedpopup}>
    <h3>My Timed popup</h3>
    <p>This is my timed triggered popup</p>
    </Popup>
    </div>
  )
}

export default B