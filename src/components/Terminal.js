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

  useEffect(()=>{
    if(!activeTerminal)
    nav("/")
    setPage(activeTerminal.page_0)},[]) // eslint-disable-line react-hooks/exhaustive-deps
  const handleClick = (route) => {
    setPage(activeTerminal[route])
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
        {page.ulist?
        <div>
          <h3>{page.ulist.title}</h3>
          <ul>
          {page.ulist.list?.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
        </div>:<></>}
        {page.olist?
        <div>
          <h3>{page.olist.title}</h3>
          <ol>
          {page.olist.list?.map((item,index)=><li key={index}>{item}</li>)}
          </ol>
        </div>
        :<></>}
        {page.prompt_2?<h3 className="page-text">{`${page.prompt}`}</h3>:<></>}
        {page.ulist_2?
        <div>
          <h3>{page.ulist_2.title}</h3>
          <ul>
          {page.ulist_2.list?.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
        </div>:<></>}
        {page.olist_2?
        <div>
          <h3>{page.olist_2.title}</h3>
          <ol>
          {page.olist_2.list?.map((item,index)=><li key={index}>{item}</li>)}
          </ol>
        </div>
        :<></>}
      </div>
      : <></>}
      {page.userOptions?.map((option, index) => {
          return (
            <h3
              key={index}
              onClick={() => handleClick(`${option.route}`)}
            >{`> ${option.text}`}
            </h3>
          );
        })}
    </PageStyle>
  );
}

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    text-align:center;
  }
`;
