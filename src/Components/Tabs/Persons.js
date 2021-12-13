import React, {useEffect} from "react";
import styled from "styled-components";
import CardPerson from "../Cards/CardPerson";
import { Wrapper } from "./Main";
import ButtonsPN from "../ButtonsPN";
import Loader from "../Style/Loader";

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1% 0;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ErrorWrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 36px;
padding: 50px;
color: #fff;
`;

const Persons = ({response, error, pagePerson, setPagePerson, url, setUrl}) => {
  useEffect(() => {
  setUrl(`https://swapi.dev/api/people/?page=${pagePerson}`)
}, [pagePerson, setUrl]);
if (  pagePerson > 9){
  setPagePerson(pagePerson = 1)
}else if (pagePerson < 1) {
  setPagePerson(pagePerson = 9)
}

console.log(response);

  return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
        <ButtonsPN setPage={setPagePerson} page={pagePerson}/>
        </ButtonWrapper>
        {response === null ? (
          <Loader />
        ) :
        response ? <CardPerson pers={response} />
            : error ? (
              <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper>
            ) : (
              <Loader />
            )}
      </Container>
    </Wrapper>
  );
};

export default Persons;
