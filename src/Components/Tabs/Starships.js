import React, {useEffect} from "react";
import styled from "styled-components";
import CardStarship from "../Cards/CardStarship";
import { Wrapper } from "./Main";
import ButtonsPN from "../ButtonsPN";
import Loader from "../Style/Loader";


const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1% 0;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ErrorWrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 36px;
padding: 50px;
color: #fff;
`;


const Starships = ({response, error, pageStarship, setPageStarship, setUrl, url}) => {
    useEffect(() => {
    setUrl(`https://swapi.dev/api/starships/?page=${pageStarship}`);
 }, [pageStarship, setUrl]);


 if (  pageStarship > 4){
    setPageStarship(pageStarship = 1)
  }else if (pageStarship < 1) {
    setPageStarship(pageStarship = 4)
  }
  console.log(response);


return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
         <ButtonsPN page={pageStarship} setPage={setPageStarship}/>
        </ButtonWrapper>
        {response === null ? (
          <Loader />
        ) :
        response ? <CardStarship pers={response} />
            : error ? (
              <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper>
            ) : (
              <Loader />
            )}

      </Container>
    </Wrapper>
  );
}

export default Starships
