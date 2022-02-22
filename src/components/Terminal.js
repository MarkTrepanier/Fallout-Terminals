import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Terminal(props) {
  const initialState = {
    text: "hey",
    page_id: 1,
    options: [{ option: "uno" }, { option: "dos" }],
  };

  const [page, setPage] = useState(initialState);
  useEffect(() => {
    axios
      .get(
        `https://f2d20terminal.herokuapp.com/api/users/1/pages/${page.page_id}`
      )
      .then((resp) => {
        setPage(resp.data);
      })
      .catch((err) => {
        console.log();
      });
    //eslint-disable-next-line
  }, []);

  const handleClick = (link) => {
    console.log(link);
    axios
      .get(`https://f2d20terminal.herokuapp.com/api/users/1/pages/${link}`)
      .then((resp) => {
        setPage(resp.data);
      })
      .catch((err) => {
        console.log();
      });
  };

  return (
    <PageStyle className="page">
      {page.header ? (
        <h2 className="page-header">{`${page.header}`}</h2>
      ) : (
        <></>
      )}
      {page ? <h2 className="page-text">{`${page.text}`}</h2> : <></>}
      {page.options ? (
        page.options.map((option, index) => {
          return (
            <h3
              key={index}
              onClick={() => handleClick(option.link)}
            >{`> ${option.option}`}</h3>
          );
        })
      ) : (
        <></>
      )}
    </PageStyle>
  );
}

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  .page-header {
    align-self: center;
  }
`;
