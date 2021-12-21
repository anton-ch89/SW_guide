import React from "react";
import styled from "styled-components";
import noImage from '../../Images/starship_none_2.png'
import Loader from "../Style/Loader";
import { StarshipPath } from "../Pathes/StarshipsPathes";

const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
cursor: pointer;
`

const ImgWrapper = styled.div`
display: flex;
justify-content: center;
margin: 30px 0;
`

const StarshipImg = styled.img`
   margin: 20px 0;
  width: 200px;
`;

const Card = styled.div`
display: flex;
flex-direction: column;
border: 4px solid #6f6f6f;
padding: 15px;
margin: 15px;
min-width: 250px;
width: 300px;
height: 400px;
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
padding: 10px 0;
font-weight: bold;
font-weight: bold;
text-align: center;
`




const CardStarship = ({ ships, setOpenModal }) => {
  return (
    <CardWrapper>
      {
        ships.map((e, i) => {
          const item = +e.url.slice(37, 39).replace(/\D/g, '');
          return (
            <Card key={i} onClick={() => setOpenModal(e)}>
              <ImgWrapper>
                <StarshipImg src={item <= 15  ? StarshipPath.filter((path) => {
                return path === StarshipPath[item]
              })
            : noImage} alt="unknown" />
              </ImgWrapper>
              {!e.model ? <Loader /> :
                <>
                  <CardTitle >{e.name}</CardTitle>
                </>
              }
            </Card>
          );
        })}
    </CardWrapper>
  );
};

export default CardStarship;
