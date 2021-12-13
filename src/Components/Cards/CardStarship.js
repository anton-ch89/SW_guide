import React from "react";
import styled from "styled-components";
import noImage from '../../Images/starship_none_2.png'
import Loader from "../Style/Loader";

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
height: 420px;
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
const CardText = styled.p`
display: flex;
justify-content: center;
align-items: centr;
font-size: 1rem;
padding: 7px 0;
text-align: center;
`



const CardStarship = ({ pers }) => {
  return (
    <CardWrapper>
      {
        pers.map((e, i) => {
          return (
            <Card key={i}>
              <ImgWrapper>
                <img src={noImage} alt="unknown" />
              </ImgWrapper>
              {!e.model ? <Loader /> :
                <>
                  <CardTitle >{e.name}</CardTitle>
                  <CardText>Model:&nbsp;{e.model}</CardText>
                  <CardText >Cargo capacity:&nbsp;{e.cargo_capacity}</CardText>
                  <CardText >Cost in credits:&nbsp;{e.cost_in_credits}</CardText>
                  <CardText >Max atmosphering speed:&nbsp;{e.max_atmosphering_speed}</CardText>
                  <CardText>Manufacturer:&nbsp;{e.manufacturer}</CardText>
                </>
              }
            </Card>
          );
        })}
    </CardWrapper>
  );
};

export default CardStarship;
