import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { Container } from "../Tabs/Main";


const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 35%;
  margin: 60px 0 20px 0;
`;

const Figcaption = styled.p`
  color: #000;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 10px;
  -webkit-text-stroke: 2px #ffc107;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Title = styled.li`
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #ffc107;
    transition: 0.5s;
  }
`;

const Logo = styled.img`
  width: 100%;
`;

const Navigation = ({active, setActive}) => {



  return (
    <NavigationWrapper>
      <Container>
          <LogoWrapper>
          <Link to='/'>
            <Logo src={logo} alt="" />
            <Figcaption>Guide</Figcaption>
            </Link>
          </LogoWrapper>
        <Ul>
          <Title >
            <Link  to="/planets" >Planets</Link>
          </Title>
          <Title >
            <Link to="/persons" >Persons</Link>
          </Title>
          <Title>
            <Link to="/starships">Starships</Link>
          </Title>
          <Title>
            <Link to="/films">Films</Link>
          </Title>
        </Ul>
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;
