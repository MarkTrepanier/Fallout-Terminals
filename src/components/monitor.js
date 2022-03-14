import React from "react";
import Styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ActionRoller from "./ActionRoller";
//import Terminal from "./Terminal";
//import Login from "./login";
import TerminalsList from "./TerminalsList"

export default function Monitor(props) {
  return (
    <MonitorStyle className="monitor">
      <div className="content">
        {/* <Terminal />
        <Login />
        <ActionRoller /> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<TerminalsList/>}/>
            <Route path="home" element={<TerminalsList />}/>
          </Routes>
        </Router>
      </div>
      <footer></footer>
    </MonitorStyle>
  );
}

// todo:
const MonitorStyle = Styled.div`

  display:flex;
  flex-direction: column;
  justify-content:center
  align-items: center;
  background-color: #000;
  box-shadow: inset 0px 0px 20px 50px rgba(0,0,0,0.6);
  font-family:arial;
  animation:colorPulse 5s infinite ease-in-out;
  background-image:radial-gradient(#444, #111);
  box-shadow:0 0 5vmin 1vmin #000 inset;
  box-sizing:border-box;
  font-family:'Fira Mono', monospace;
  font-size:1rem;
  height:100vh;
  overflow:hidden;
  position:fixed;
  padding:5vmin;
  width:100vw;

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: solid 2px;
    border-radius: 5px;
    width: 100%;
    height: 100vh;
    margin: 0;
    div{width: 90%}
  }
      
  &:before {
    animation:wave 10s infinite ease-in-out;
    content:"";
    height:20vh;
    left:0;
    opacity:.5;
    position:absolute;
    right:0;
    z-index:1;
  }
      
  &:after {
    background-image:linear-gradient(transparent, transparent 3px, #222);
    background-size:4px 4px;
    bottom:0;
    content:"";
    left:0;
    pointer-events:none;
    position:absolute;
    right:0;
    top:0;
    z-index:2;
  }
      
  p:last-child:after {
    animation:blink 1s infinite;
    content:"_";
  }
      
  @keyframes colorPulse {
    0%, 100% {
      
      color:#0c0;
      border-color:#0c0;
    }
    48%, 52% {
          
      color:#090;
      border-color:#090;
    }
    50% {
          
      color:#060;
      border-color:#060
    }
  }
      
  @keyframes wave{
    0% {
      box-shadow:0 -10vh 20vh #0c0;
      top:-100vh;
    }
    48%, 52% {
      box-shadow:0 -10vh 20vh #090;
    }
    50% {
      box-shadow:0 -10vh 20vh #060;
    }
    100% {
      box-shadow:0 -10vh 20vh #0c0;
      top:150vh;
    }
}
      
  @keyframes blink {
    50% {
      opacity:0;
    }
  }
`;
