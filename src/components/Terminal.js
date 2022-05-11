import React, { useEffect, useState } from "react";
//import axios from "axios";
import styled from "styled-components";
//import dummyTerminals from "../DummyData/dummyTerminals";

export default function Terminal(props) {
  const {activeTerminal, } = props;
  const initialState = {
    prompt: "loading",
  };

  const [page, setPage] = useState(initialState);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://f2d20terminal.herokuapp.com/api/users/1/pages/${page.page_id}`
  //     )
  //     .then((resp) => {
  //       setPage(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log();
  //     });
  //   //eslint-disable-next-line
  // }, []);
  useEffect(()=>{setPage(activeTerminal.page_0)},[]) // eslint-disable-line react-hooks/exhaustive-deps

  // const handleClick = (link) => {
  //   console.log(link);
  //   axios
  //     .get(`https://f2d20terminal.herokuapp.com/api/users/1/pages/${link}`)
  //     .then((resp) => {
  //       setPage(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log();
  //     });
  // };
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
      {page ? <h3 className="page-text">{`${page.prompt}`}</h3> : <></>}
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
  h3{
  }
`;
