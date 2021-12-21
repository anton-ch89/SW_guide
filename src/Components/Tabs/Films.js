import React from "react";
import styled from "styled-components";
import CardFilm from "../Cards/CardFilm";
import { Wrapper } from "./Main";
import Loader from "../Style/Loader";
import ModalFilms from "../Modals/ModalFilms";

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1% 0;
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


const Films = ({ response, error, openModal, setOpenModal }) => {


return (
  <>
    <ModalFilms openModal={openModal} setOpenModal={setOpenModal}/>
    <Wrapper>
      <Container>
      {response === null ? (
          <Loader />
        ) :
        response ? <CardFilm pers={response.films} setOpenModal={setOpenModal}/>
            : error ? (
              <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper>
            ) : (
              <Loader />
            )}
      </Container>
    </Wrapper>
    </>
  );
}

export default Films;
