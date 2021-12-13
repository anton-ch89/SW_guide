import React from 'react';
import styled from 'styled-components';
import Loader from '../Style/Loader';
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const Modal = styled.div`
  background-color: #000;
  border: 5px solid #fff;
  width: 500px;
  height: 600px;
`;


const ImgWrapper = styled.div`
display: flex;
justify-content: center;
`
const Card = styled.div`
display: flex;
flex-direction: column;
border: 4px solid #6f6f6f;
padding: 15px;
margin: 15px;
min-width: 250px;
width: 300px;
height: 450px;
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
width: 200px;
`

const CardText = styled.p`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: 1rem;
padding: 7px 0;
text-align: center;
`



const ModalPlanet = ({ openModal, setOpenModal}) => {

function closeModal(e) {
    if (e.target.id === 'overlay') {
        setOpenModal(null)
    }
}
console.log(openModal);
    if(!openModal) return null;
    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
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
