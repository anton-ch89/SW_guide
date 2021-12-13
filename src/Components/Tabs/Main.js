import React from "react";
import styled from "styled-components";
import yoda from "../../Images/yoda.png";
import { yodaPhrases } from "../Yoda";



export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Yoda = styled.img`
  width: 200px;
  cursor: pointer;
  margin: 50px 0 20px 0;
  // opacity: 0.6;
  &:hover{
    // opacity: 1;
    transition: 0.5s;
    -webkit-filter: drop-shadow(0 0 50px rgba(255,215,0,0.8));
    filter: drop-shadow(0 0 50px rgba(255,215,0,0.8));

  }
`;
const P = styled.p`
  text-align: center;
  font-size: 20px;
`;

function Main({ phrase, setPhrase }) {
  const phrases = [...yodaPhrases];
  const randomPhrase = () => {
    return phrases[Math.floor(Math.random() * 30)];
  };



  return (
    <Wrapper>
      <Container>
        <Yoda src={yoda} alt="" onClick={() => setPhrase(randomPhrase())} />
        <P>"{phrase}"</P>
      </Container>
    </Wrapper>
  );
}

export default Main;
