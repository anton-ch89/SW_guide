import React from "react";
import styled from "styled-components";
import CardPerson from "../Cards/CardPerson";
import { Wrapper } from "./Main";
import Loader from "../Style/Loader";
import ModalPerson from "../Modals/ModalPerson";
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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

const Persons = ({ response, error, openModal, setOpenModal }) => {
  const { array, setArray } = useArray();

  if (!response) return null;
  const resp = response.people;

  return (
    <>
      <ModalPerson openModal={openModal} setOpenModal={setOpenModal} />
      <Wrapper>
        <Container>
          {response === null ? (
            <Loader />
          ) : response ? (
            <CardPerson
              pers={array.length === 0 ? resp.slice(0, 10) : array}
              setOpenModal={setOpenModal}
            />
          ) : error ? (
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
                      return index < 20;
                    }
                    if (array.length === 20) {
                      return index < 40;
                    }
                    if (array.length === 40) {
                      return index < 60;
                    }
                    if (array.length === 60) {
                      return index <= 82;
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
};

export default Persons;
