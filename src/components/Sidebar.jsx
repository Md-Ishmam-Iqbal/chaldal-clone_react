import React from 'react'
import { useState } from 'react';
import styled from '@emotion/styled'

const SideBarContainer = styled.div`
  width: 220px;
  height: 100%;
  background: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  overflow: hidden;
  left: 0;
  transform: translateX(-20em);
  transition: 0.5s;
  user-select: none;
  padding: 1em 0 0 2.5em;
`

const SideBar = () => {
  return (
    <SideBarContainer id='sideBar'>
        Menu
    </SideBarContainer>
  )
}

export default SideBar