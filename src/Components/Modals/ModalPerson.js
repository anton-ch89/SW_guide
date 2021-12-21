import React from "react";
import styled from "styled-components";
import noImage from '../../Images/photo_none.png';
import { PersonPath } from "../Pathes/PersonPathes";


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
  min-height: 550px;
  margin: 30px;

`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 10px;
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

const PersonImg = styled.img`
height: 350px;

`;

const CardText = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding: 7px 0;
  text-align: center;
  margin: 0 30px;
`;


const Escape = styled.p`
  position: fixed;
  font-size: 24px;
  left: 93%;
  top: 2%;
  cursor: pointer;
`;

const ModalPerson = ({ openModal, setOpenModal }) => {
  function closeModal(e) {
    if (e.target.id === "overlay" || e.target.id === "escape") {
      setOpenModal(null);
    }
  }

  let num = null
  if (!openModal) return null;
  if (openModal) {
    num = +openModal.url.slice(29, 31).replace(/\D/g, '') - 1;
  };
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Escape id="escape" onClick={closeModal}>
          X
        </Escape>
        <ImgWrapper>
          <PersonImg src={PersonPath[num] ? PersonPath[num] : noImage} />
        </ImgWrapper>
        <CardTitle>{openModal.name}</CardTitle>
        <CardText>Birth year:&nbsp;{openModal.birth_year}</CardText>
        <CardText >Eye color:&nbsp;{openModal.eye_color}</CardText>
        <CardText >Hair color:&nbsp;{openModal.hair_color}</CardText>
        <CardText >Height:&nbsp;{openModal.height} cm</CardText>
        <CardText>Mass:&nbsp;{openModal.mass} kg</CardText>
      </Modal>
    </Overlay>
  );
};

export default ModalPerson;
