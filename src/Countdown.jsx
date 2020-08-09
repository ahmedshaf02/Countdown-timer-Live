import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

const Styles = {
  timerContainer: {
    width: 460,
    height: 280,
    backgroundColor: "#1d1e22",
    color: "#feda6a",
    // color:"black",
    borderRadius: 48,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    border: "0px solid #B4B1B4",
    fontFamily: "'Roboto', sans-serif",
    boxSizing: "border-box",
    boxShadow: "29px 29px 45px #0c0c0e, -29px -29px 45px #2e3036"
  },
  timerHeader: {
    display: "flex",
    justifyContent: "space-evenly",
    color: "#717171",
    padding: 10,
    alignItems: "center",
    height: 50,
    borderBottom: "0.8px solid #feda6a",
    hieght: 50,
    fontSize: 24,
    fontWeight: "bold",
    color: "#feda6a"
  },
  timerName: {
    borderBottom: "2px solid #4175FF",
    cursor: "pointer",
    fontSize: 12
  },
  timerBottom: {
    borderTop: "0.8px solid #feda6a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  timerBtn: {
    borderRadius: 4,
    // padding:,
    margin: 6,
    backgroundColor: "#1d1e22",
    // color:"white",
    color: "#feda6a",
    border: "none",
    padding: "6px 20px"
  },
  timerBody: {
    height: 150,
    lineHeight: "140px"
  },
  countdownInput: {
    borderRadius: 4,
    height: 24,
    border: "none",
    border: "2px solid black",
    backgroundColor:"#feda6a",
    opacity:0.9,
    fontSize:18
  }
};

const Countdown = () => {
  const [date, setDate] = useState("September 20, 2020");
  const [time, setTime] = useState("");

  return (
    <>
      <div style={Styles.timerContainer}>
        <div style={Styles.timerHeader}>
          <div>Countdown to {date}</div>
        </div>
        <div style={Styles.timerBody}>
          <CountdownTimer date={date} />
        </div>

        <div style={Styles.timerBottom}>
          <input
            style={Styles.countdownInput}
            placeholder="enter a date"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button
            onClick={() => {
              if (time === "") {
                alert("incorrect value format: June 20, 2020");
              } else {
                setDate(time);
              }
            }}
            style={Styles.timerBtn}
          >
            <small>Set Countdown</small>
          </button>
        </div>
      </div>
    </>
  );
};

export default Countdown;
