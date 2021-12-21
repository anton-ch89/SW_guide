import React from "react";
import styled from "styled-components";
import noImage from '../../Images/planet_none_1.png'
import Loader from "../Style/Loader";
import { PlanetPath } from "../Pathes/PlanetPath";


const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`

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
height: 300px;
cursor: pointer;
transition: 0.5s;
&:hover{
  transform: scale(1.03);
}
`
const CardTitle = styled.h2`
display: flex;
justify-content: center;
flex-wrap: wrap;
font-size: 1.5rem;
color: #ffc107;
padding: 20px 0 10px;
font-weight: bold;
font-weight: bold;
text-align: center;
`
const PlanetImg = styled.img`
width: 200px;
`


const CardPlanet = ({ pers, setOpenModal }) => {
  return (
    <CardWrapper>
      {
        pers.map((e, i) => {
          const item = +e.url.slice(30, 32).replace(/\D/g, '');
          return (
            <Card key={i}  onClick={() => setOpenModal(e)}>
              <ImgWrapper>
                <PlanetImg src={item <= 10  ? PlanetPath.filter((path) => {
                return path === PlanetPath[i]
              })
            : noImage} alt="unknown" />
              </ImgWrapper>
              {!e.diameter ? <Loader /> :
                <>
                  <CardTitle >{e.name}</CardTitle>
                  {/* <CardText>Diameter:&nbsp;{e.diameter === '0' ? 'unknown' : e.diameter}</CardText>
                  <CardText >Population:&nbsp;{e.population}</CardText>
                  <CardText >Climate:&nbsp;{e.climate}</CardText>
                  <CardText >Terrain:&nbsp;<br />{e.terrain}</CardText> */}
                </>
              }
            </Card>
          );
        })}
    </CardWrapper>
  );
};

export default CardPlanet;
