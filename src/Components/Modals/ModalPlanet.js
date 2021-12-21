import React from 'react';
import styled from 'styled-components';
import noImage from '../../Images/planet_none_1.png'
import { PlanetPath } from '../Pathes/PlanetPath';



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
  background-color: rgba(255, 255, 255, 0.230);
  backdrop-filter: blur(18px);
  border: 5px solid #fff;
  width: 500px;
  height: 600px;
  margin: 30px;

`;


const ImgWrapper = styled.div`
display: flex;
justify-content: center;
margin: 30px;
`

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
`
const PlanetImg = styled.img`
width: 300px;
`;

const Escape = styled.p`
  position: fixed;
  font-size: 24px;
  left: 93%;
  top: 2%;
  cursor: pointer;
`;

const CardText = styled.p`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: 1rem;
padding: 7px 0;
text-align: center;
`



const ModalPlanet = ({ openModal, setOpenModal }) => {
    function closeModal(e) {
        if (e.target.id === "overlay" || e.target.id === "escape") {
          setOpenModal(null);
        }
      }
    let num = null
    if (!openModal) return null;
    if (openModal) {
        num = +openModal.url.slice(30, 32).replace(/\D/g, '') - 1;
    };
    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Escape id="escape" onClick={closeModal}>
                    X
                </Escape>
                <ImgWrapper>
                    <PlanetImg src={PlanetPath[num] ? PlanetPath[num] : noImage} />
                </ImgWrapper>
                <CardTitle>{openModal.name}</CardTitle>
                <CardText>Diameter:&nbsp;{openModal.diameter === '0' ? 'unknown' : openModal.diameter}</CardText>
                <CardText >Population:&nbsp;{openModal.population}</CardText>
                <CardText >Climate:&nbsp;{openModal.climate}</CardText>
                <CardText >Terrain:&nbsp;<br />{openModal.terrain}</CardText>
            </Modal>
        </Overlay>
    )
}

export default ModalPlanet
