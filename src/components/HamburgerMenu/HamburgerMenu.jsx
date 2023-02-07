import React from 'react'
import { useState } from 'react';
import styled from '@emotion/styled'
import SideBar from '../SideBar';

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const HamburgerButton = styled.button`
  border: 0;
  background: 0 0;
  float: left;
  padding: 10px;
  margin-left: 10px;
  height: auto;
  outline: 0;
  border-radius: 2px;
  background-color: #fdd670;
  /* background-color: #eeb529; */
  cursor: pointer;
  z-index: 99;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #eeb529;
  }
  &:active {
    box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%);
  }
`

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  
  const toggleOpen = () => {
    document.getElementById("sideBar").style.transform = `translateX(0em)`
  }
  
  const toggleClose = () => {
    document.getElementById("sideBar").style.transform = `translateX(-20em)`
  }
  
  const toggleMenu = () => {
    setOpen(!isOpen)
    if (!isOpen) {
      toggleOpen()
    } else{
      toggleClose()
    }
  }

  return (
      <HamburgerMenuContainer>
        <HamburgerButton onClick={toggleMenu}>
          <svg width="25px" height="25px" viewBox='0 0 100 100'>
            <rect y="15" width="100" height="7"></rect>
            <rect y="45" width="100" height="7"></rect>
            <rect y="75" width="100" height="7"></rect>
          </svg>
        </HamburgerButton>
        <SideBar />
      </HamburgerMenuContainer>
  )
}

export default HamburgerMenu