import React, { FunctionComponent as FC, useState } from 'react'
import styled, { css } from 'styled-components';

interface FavsButtonProps {
  selectedValue?: Boolean
}

const FavButton = styled.div<FavsButtonProps>`
  width: 6.125rem;
  height: 1.938rem;
  padding: 0.188rem 1rem 0 1.063rem;
  border-radius: 2px;
  cursor: pointer;
  ${ props => props.selectedValue ? css`border: solid 1px #1797ff; color:#1797ff` : css`border: solid 1px #d6d6d6; color: #d6d6d6;`};
`;

const FavesButton: FC<FavsButtonProps> = () => {
   
  const [isAllActive, setIsAllActive] = useState(false)

  const handleClick = () => {
    setIsAllActive(current => !current);
  };

  return (
    <>
        <div className="container">
            <FavButton 
              style={{
                borderColor: isAllActive ? '#1797ff' : '#d6d6d6',
                color: isAllActive ? '#1797ff' : '#d6d6d6',
              }}
              onClick={handleClick}
            >
              All
            </FavButton>
            <FavButton 
              style={{
                borderColor: isAllActive ? '#d6d6d6' : '#1797ff',
                color: isAllActive ? '#d6d6d6' : '#1797ff',
              }}
              onClick={handleClick}
            >
              My Faves
            </FavButton>
        </div>
    </>
  )
}

export default FavesButton