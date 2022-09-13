import React, { FC, useState } from 'react'
import './SearchBar.css';
import styled from 'styled-components';
import angular from '../../assets/image-138.png';
import react from '../../assets/image-140.png';
import vuejs from '../../assets/image-141.png';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  height: 2rem;
  margin: 3.938rem 7.125rem 0.063rem 9.375rem;
  padding: 0.313rem 0.75rem 0.313rem 0.75rem;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBarOptions = styled.div`
  width: 5.5%;
  z-index: 2;
  position: absolute;
  left: 9.5rem;
  margin: 0 0 0 0.063rem;
  padding: 0.938rem 9rem 0.75rem 0.625rem;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .hiddenField {
    display: none;
    opacity: 0;
    pointer-events: none;
    visibility: none;
    z-index: -1;
  }
`;

const SearchOption = styled.div`
  width: 13rem;
  display: flex;
  padding: 0.5rem 1rem;

  img {
    padding-right: 1rem;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #343434;
  }

  &:hover {
    opacity: 0.2;
    background-color: #eaeaea;
    cursor: pointer;
  }
`;

interface SearchBarProps {
  toggleOptions: (value: boolean) => void,
  isHidden: boolean,
  manageSearchFilter: (value: string) => void
  searchFilter: string
}

const SearchBar:FC<SearchBarProps> = ({ toggleOptions, isHidden, manageSearchFilter, searchFilter}) => {
  
  return (
    <>
        <SearchBarContainer onClick={() => toggleOptions(false)}>
            {
              ( searchFilter.length === 0 ) ?
              ( 'Select your news' ) :
              ( searchFilter )              
            }
        </SearchBarContainer>
        {
          !isHidden && (
            <SearchBarOptions>
              <SearchOption key={"1"} onClick={() => manageSearchFilter('angular')} >
                <img src={angular} alt="Angular" />
                <span>Angular</span>
              </SearchOption>
              <SearchOption key={"2"} onClick={() => manageSearchFilter('react')}>
                <img src={react} alt="React" />
                <span>React</span>
              </SearchOption>
              <SearchOption key={"3"} onClick={() => manageSearchFilter('vuejs')}>
                <img src={vuejs} alt="VueJS" />
                <span>Vuejs</span>
              </SearchOption>
            </SearchBarOptions>
          )
        }
    </>
  )
}

export default SearchBar