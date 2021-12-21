import React from "react";
import styled from "styled-components";
import noImage from '../../Images/starship_none_2.png'
import { StarshipPath } from "../Pathes/StarshipsPathes";


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

const StarshipImg = styled.img`
   margin: 20px 0;
  width: 300px;
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

const ModalStarships = ({ openModal, setOpenModal }) => {
    function closeModal(e) {
        if (e.target.id === "overlay" || e.target.id === "escape") {
            setOpenModal(null);
        }
    }

    let num = null
    if (!openModal) return null;
    if (openModal) {
        num = +openModal.url.slice(37, 39).replace(/\D/g, '') ;
    };


    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Escape id="escape" onClick={closeModal}>
                    X
                </Escape>
                <ImgWrapper>
                    <StarshipImg src={StarshipPath[num] ? StarshipPath[num] : noImage} />
                </ImgWrapper>
                <CardTitle>{openModal.name}</CardTitle>
                <CardText>Model:&nbsp;{openModal.model}</CardText>
                <CardText >Cargo capacity:&nbsp;{openModal.cargo_capacity}</CardText>
                <CardText >Cost in credits:&nbsp;{openModal.cost_in_credits}</CardText>
                <CardText >Max atmosphering speed:&nbsp;{openModal.max_atmosphering_speed}</CardText>
                <CardText>Manufacturer:&nbsp;{openModal.manufacturer}</CardText>
            </Modal>
        </Overlay>
    );
};

export default ModalStarships;
