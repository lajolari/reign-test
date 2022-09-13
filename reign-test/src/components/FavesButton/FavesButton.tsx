import React, { FunctionComponent as FC, useState } from 'react'
import styled, { css } from 'styled-components';

interface FavsButtonProps {
  isAllActive: boolean,
  handleToggle: (value: boolean) => void
}

const FavButton = styled.div`
  width: 6.125rem;
  height: 1.938rem;
  padding: 0.188rem 1rem 0 1.063rem;
  border-radius: 2px;
  cursor: pointer;
  border: solid 1px #d6d6d6;
`;

const FavesButton: FC<FavsButtonProps> = ({isAllActive, handleToggle}) => {

  return (
    <>
        <div className="container">
            <FavButton 
              style={{
                borderColor: isAllActive ? '#1797ff' : '#d6d6d6',
                color: isAllActive ? '#1797ff' : '#d6d6d6',
              }}
              onClick={() => handleToggle(true)}
            >
              All
            </FavButton>
            <FavButton 
              style={{
                borderColor: isAllActive ? '#d6d6d6' : '#1797ff',
                color: isAllActive ? '#d6d6d6' : '#1797ff',
              }}
              onClick={() => handleToggle(false)}
            >
              My Faves
            </FavButton>
        </div>
    </>
  )
}

export default FavesButton