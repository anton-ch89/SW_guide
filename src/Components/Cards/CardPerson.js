import React from "react";
import styled from "styled-components";
import noImage from '../../Images/photo_none.png'
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
font-size: 1rem;
padding: 7px 0;
`



const CardPerson = ({ pers }) => {
  return (
    <CardWrapper>
      {
        pers.map((e, i) => {
          return (
            <Card key={i}>
              <ImgWrapper>
                <img src={noImage} alt="unknown" />
              </ImgWrapper>
              {!e.height ? <Loader /> :
                <>
                  <CardTitle >{e.name}</CardTitle>
                  <CardText><strong>Birth year:&nbsp;</strong>{e.birth_year}</CardText>
                  <CardText ><strong>Eye color:&nbsp;</strong>{e.eye_color}</CardText>
                  <CardText ><strong>Hair color:&nbsp;</strong>{e.hair_color}</CardText>
                  <CardText ><strong>Height:&nbsp;</strong>{e.height} cm</CardText>
                  <CardText><strong>Mass:&nbsp;</strong>{e.mass} kg</CardText>
                </>}
            </Card>
          );
        })}
    </CardWrapper>
  );
};

export default CardPerson;
