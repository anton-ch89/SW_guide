import React from "react";
import styled from "styled-components";
import noImage from "../../Images/photo_none.png";
import Loader from "../Style/Loader";
import { PersonPath } from "../Pathes/PersonPathes";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PersonImg = styled.img`
  height: 300px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid #6f6f6f;
  background: rgba(255,255,255, 0.15);
  padding: 15px;
  margin: 15px;
  min-width: 250px;
  width: 300px;
  min-height: 300px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.03);
  }
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

const CardPerson = ({ pers, setOpenModal }) => {



  return (
    <CardWrapper>
      {
        (pers.map((e, i) => {
          const item = +e.url.slice(29, 31).replace(/\D/g, '');
          return (
            <Card key={i} onClick={() => setOpenModal(e)}>
              <ImgWrapper>
              {item <= 10 ? <PersonImg src={PersonPath.filter((path) => {
                  return path === PersonPath[i]
                })} />
                : <img src={noImage} alt="unknown" />
              }
              </ImgWrapper>
              {!e.height ? (
                <Loader />
              ) : (
                <>
                  <CardTitle>{e.name}</CardTitle>
                </>
              )}
            </Card>
          );
        }))
      }
    </CardWrapper>
  );
};

export default CardPerson;
