
import React, { useState, useEffect } from "react";

const Styles = {countdownDigit:{
    fontSize:16,
    fontWeight:"bold",
    margin:6
    
  },
  countdownInput:{
    borderRadius:8,
    padding:8
  }
};


const CountdownTimer = (props) => {
  const[days,setDays] = useState(0)
  const[hours,setHours] = useState(0)
  const[minutes,setMinutes] = useState(0)
  const[seconds,setSeconds] = useState(0)

  const {date} = props
useEffect(()=>{
  let clearDate = setInterval(()=>{

    getCountdown(date)
  },100)

 return ()=>clearInterval(clearDate)

},[date])

  const getCountdown = (date)=>{

      let time = Date.parse(date) - Date.parse(new Date())
      console.log(time)
      setSeconds(Math.floor((time/1000) %60))
      setMinutes(Math.floor((time/1000/60) %60))
      setHours(Math.floor(time/(1000*60*60) %24))
      setDays(Math.floor(time/(1000*60*60*24) ))
      // setHours(timestamp.getHours())
      // let timestamp= new Date(time*1000)  
      // setMinutes(timestamp.getMinutes())
      // setDays(timestamp.getDay())
  }
  return (
    <>
      <div style={{display:"flex",justifyContent:"center"}}>
          <div style={Styles.countdownDigit}>{days<10?("0"+days):days} Days</div>
          <div style={Styles.countdownDigit}>{hours<10?("0"+hours):hours} Hours</div>
          <div style={Styles.countdownDigit}>{minutes<10?("0"+minutes):minutes} Minutes</div>
          <div style={Styles.countdownDigit}>{seconds<10?("0"+seconds):seconds} Second</div>
      </div>
    </>
  );
};

export default CountdownTimer;
