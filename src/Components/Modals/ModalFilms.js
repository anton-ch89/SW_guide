import React from "react";
import styled from "styled-components";
import { FilmPathes } from "../Pathes/FilmPathes";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  z-index: 3;
`;

const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(18px);
  border: 5px solid #fff;
  width: 500px;
  height: 650px;
  margin: 30px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  color: #ffc107;
  padding: 10px 0;
  font-weight: bold;
  font-weight: bold;
  text-align: center;
`;

const PlanetImg = styled.img`
  width: 250px;
`;

const CardText = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding: 7px 0;
  text-align: center;
`;



const Escape = styled.p`
  position: fixed;
  font-size: 24px;
  left: 93%;
  top: 2%;
  cursor: pointer;
`;

const ModalFilms = ({ openModal, setOpenModal }) => {
  function closeModal(e) {
    if (e.target.id === "overlay" || e.target.id === "escape") {
      setOpenModal(null);
    }
  }

  let num = null;

  if (!openModal) return null;
  if (openModal) {
    num = +openModal.url.slice(33, 35).replace(/\D/g, "") - 1;
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Escape id="escape" onClick={closeModal}>
          X
        </Escape>
        <ImgWrapper>
          <PlanetImg src={FilmPathes[num]} />
        </ImgWrapper>
        <CardTitle>{openModal.title}</CardTitle>
        <CardText>Producer:&nbsp;{openModal.producer}</CardText>
        <CardText>Director:&nbsp;{openModal.director}</CardText>
        <CardText>Release date:&nbsp;{openModal.release_date}</CardText>
      </Modal>
    </Overlay>
  );
};

export default ModalFilms;
