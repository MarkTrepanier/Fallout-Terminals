import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
//import axios from "axios";
import styled from "styled-components";
//import dummyTerminals from "../DummyData/dummyTerminals";

export default function Terminal(props) {
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
              onClick={() => handleClick(`${option.route}`)}
            >{`> ${option.text}`}
            </h3>
          );
        })}
        <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="newContent"
          placeholder="testing changes"
          value={tA}
          onChange={handleChange}
        ></textarea>
        <button type='submit'>hello</button>
        </form>
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
 textarea{
   background-color:inherit;
   color:inherit;
   border:3px
   border-color: inherit;
 }
`;
