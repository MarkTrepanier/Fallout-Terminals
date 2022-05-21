import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import useSound from "use-sound"
import click0 from '../assets/sounds/typing_keystroke_single_hard_03.wav'
import click1 from '../assets/sounds/typing_keystroke_single_hard_04.wav'
import click2 from '../assets/sounds/typing_keystroke_single_hard_07.wav'

const clicks=[click0,click1,click2]
function randomCLick(){
  return clicks[Math.floor(Math.random() * 3)]
}

export default function Terminal(props) {
  const [play]= useSound(randomCLick(),{volume:1, interrupt:true})
  const {activeTerminal} = props;
  const initialState = {
    prompt: "loading",
  };
  const nav = useNavigate();
  const [page, setPage] = useState(initialState);
  const [tA, setTA] = useState('');
  useEffect(()=>{
    if(!activeTerminal)
    nav("/")
    setPage(activeTerminal.page_0)},[]) // eslint-disable-line react-hooks/exhaustive-deps
  const handleClick = (route) => {
    setPage(activeTerminal[route])
  }
  const handleChange = (e) => {
    setTA(e.target.value );
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    setPage({...page, prompt:tA})
  }

  return (
    <PageStyle className="page">
      {activeTerminal.header ? (
        <h2 className="page-header">{`${activeTerminal.header}`}</h2>
      ) : (
        <></>
      )}
      {page ? 
      <div>
        <h3 className="page-text">{`${page.prompt}`}</h3>
      </div>
      : <></>}
      {page.userOptions?.map((option, index) => {
          return (
            <h3 className="option"
              key={index}
              onClick={() =>{
                play();
                console.log(Math.floor(Math.random() * 3))
                handleClick(`${option.route}`)
              }}
            >{`> ${option.text}`}
            </h3>
          );
        })}
        {/* INPUT FIELD */}
        {false?<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newContent"
          placeholder="testing changes"
          value={tA}
          onChange={handleChange}
        ></input>
        <button type='submit'>{'[submit]'}</button>
        </form>:<></>}
    </PageStyle>
  );
}

const PageStyle = styled.div`
  display: flex;
  white-space: pre-wrap;
  flex-direction: column;
  h2{
    text-align:center;
  }
  @media(max-width:800px){
    font-size: 0.65rem;
    h2{
       font-size:0.7rem;
    }
 }
 .option{
  cursor: pointer;
 }
 input{
   background-color:inherit;
   color:inherit;
   border-top: solid 2px;
   border-left: none;
   border-right:none;
   border-radius: 5px;
   border-color:inherit;
   border-bottom:none;
   ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: inherit;
   opacity: .5;
}
 }
 input:focus {
  border: solid 2px;
  outline: none !important;
}
 button{
  background-color:inherit;
  color:inherit;
  border:none;
 }
 button:focus{
  outline: none !important;
 }
`;
