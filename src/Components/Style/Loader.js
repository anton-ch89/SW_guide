import React from 'react'
import styled from 'styled-components';
import "./Loader.css";


const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  padding: 50px;
  color: #fff;
`;




const Loader = () => {
    return (
        <Loading>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loading>
)
}

export default Loader
