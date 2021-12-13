import React, { useEffect } from "react";
import styled from "styled-components";
import CardPlanet from "../Cards/CardPlanet";
import { Wrapper } from "./Main";
import ButtonsPN from "../ButtonsPN";
import Loader from "../Style/Loader";
import ModalPlanet from "../Modals/ModalPlanet";



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


const ErrorWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 36px;
padding: 50px;
color: #fff;
`;

const Planets = ({ response, error, pagePlanet, setPagePlanet, setUrl, setOpenModal, openModal}) => {


  useEffect(() => {
    setUrl(`https://swapi.dev/api/planets/?page=${pagePlanet}`);
  }, [pagePlanet, setUrl]);


  if (pagePlanet > 6) {
    setPagePlanet(pagePlanet = 1)
  } else if (pagePlanet < 1) {
    setPagePlanet(pagePlanet = 6)
  }


  return (
    <>
      <ModalPlanet openModal={openModal} setOpenModal={setOpenModal}/>
      <Wrapper>
        <Container>
          <ButtonWrapper>
            <ButtonsPN page={pagePlanet} setPage={setPagePlanet} />
          </ButtonWrapper>
          {response === null ? (
            <Loader />
          ) :
            response ? <CardPlanet pers={response} setOpenModal={setOpenModal}/>
              : error ? (
                <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper>
              ) : (
                <Loader />
              )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Planets;
