import React, { useState } from 'react'
import time from '../../iconmonstr-time-2.svg';
import likeFull from '../../iconmonstr-favorite-3.svg';
import likeEmpty from '../../iconmonstr-favorite-2.svg';
import styled from 'styled-components';

const Card = styled.div`
  width: 34.375rem;
  height: 5.625rem;
  margin: 2.375rem 2.5rem 1.875rem 9.375rem;
  padding: 0 0 0 1.625rem;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;
`;

const CardInfo = styled.div`
  width: 30rem;
  height: 5.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardLike = styled.div`
  width: 4.75rem;
  height: 5.625rem;
  background-color: #d1d1d1;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SmallText = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
  width: 13rem;
  justify-content: flex-start;
  align-items: center;

  img {
    padding: 0.5rem;
  }
`;

const BigText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
`;

const SearchBody = () => {

  const [isFave, setIsFave] = useState(false);

  const handleClick = () => {
    setIsFave(current => !current);
  };

  return (
    <>
      <CardContainer>
        <Card>
          <CardInfo>
            <SmallText>
              <img src={time} alt="time" />
              <span>2 hours ago</span>
            </SmallText>
            <BigText>
              <h3>Event-driven state management in React using Storeon</h3>
            </BigText>
          </CardInfo>
          <CardLike onClick={handleClick}>
            <img src={isFave ? likeFull : likeEmpty} alt="like Full" />
          </CardLike>
        </Card>
        <Card>
          <CardInfo>
            <SmallText>
              <img src={time} alt="time" />
              <span>2 hours ago</span>
            </SmallText>
            <BigText>
              Progressive Web Apps with React.js: Part I - Introduction
            </BigText>
          </CardInfo>
          <CardLike onClick={handleClick}>
            <img src={isFave ? likeFull : likeEmpty} alt="like Empty" />
          </CardLike>
        </Card>
      </CardContainer>
    </>
  )
}

export default SearchBody