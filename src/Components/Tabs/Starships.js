import React from "react";
import styled from "styled-components";
import CardStarship from "../Cards/CardStarship";
import { Wrapper } from "./Main";
import Loader from "../Style/Loader";
import ModalStarships from "../Modals/ModalStarships";
import { useArray } from "../hooks/useArray";

import { Button } from "../PageButton";


const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1% 0;
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;


const Starships = ({ response, error, openModal, setOpenModal }) => {

  const { array, setArray } = useArray();

  if (!response) return null;
  let resp = response.starships;

  return (
    <>
      <ModalStarships setOpenModal={setOpenModal} openModal={openModal}/>
      <Wrapper>
        <Container>
          {response === null ? (
            <Loader />
          ) :
            response ? <CardStarship ships={array.length === 0 ? resp.slice(0, 6) : array} setOpenModal={setOpenModal}/>
              : error ? (
                <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper>
              ) : (
                <Loader />
              )}

        </Container>
        <ButtonsWrapper>
          {array.length === resp.length ? (
            <Button onClick={() => setArray([])}>Hide</Button>
          ) : (
            <Button
              onClick={() =>
                setArray(
                  resp.filter((_, index) => {
                    if (array.length < 1) {
                      return index < 9;
                    }
                    if (array.length === 9) {
                      return index < 12;
                    }
                    if (array.length === 12) {
                      return index < 15;
                    }
                    if (array.length === 15) {
                      return index <= 18;
                    }
                    return index
                  })
                )
              }
            >
              More
            </Button>
          )}
        </ButtonsWrapper>

      </Wrapper>
    </>
  );
}

export default Starships
