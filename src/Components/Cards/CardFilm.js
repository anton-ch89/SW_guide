import React from "react";
import styled from "styled-components";
import Loader from "../Style/Loader";
import { FilmPathes } from "../Pathes/FilmPathes";


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
height: 440px;
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
width: 150px;
`

const CardText = styled.p`
display: flex;
justify-content: center;
align-items: centr;
font-size: 1rem;
padding: 7px 0;
text-align: center;
`



const CardFilm = ({ pers }) => {
  console.log(pers);
  return (
    <CardWrapper>
      {pers.map((e, i) => {
        return (
          <Card key={i}>
            <ImgWrapper>
              <PlanetImg src={FilmPathes.filter((path) => {
                return path === FilmPathes[i]
              })} alt="film poster" />
            </ImgWrapper>
            {!e.producer ? <Loader /> :
              <>
                <CardTitle >{e.title}</CardTitle>
                <CardText>Producer:&nbsp;{e.producer}</CardText>
                <CardText >Release date:&nbsp;{e.release_date}</CardText>
              </>}
          </Card>
        );
      })}
    </CardWrapper>
  );
};

export default CardFilm;
