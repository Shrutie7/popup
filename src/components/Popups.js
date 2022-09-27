import React from 'react'
import "./Popups.css";

// props.children so we can pass thru elements in this popup component we dont have to create multiple popup components !!!

//  props.trigger is trigger to popup pass boolean true/false value for trigger if trigger is true popup will show 

function Popups(props) {
  return (props.trigger) ?(
    <div className='popup'>
    <div className='popup-inner'>
    <button  className='close-btn' onClick={()=>{props.setTrigger(false)}} >close</button>
    {props.children} 
    </div>
    </div>
  ) : "";
}

export default Popups