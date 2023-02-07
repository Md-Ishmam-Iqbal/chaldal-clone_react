// Tried styling components
// finish styling later

import styled from '@emotion/styled'
import { Home, Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

const Container = styled.div`
    background-color: #fdd670;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    z-index: 98;
`

const LogoContainer = styled.div`
    background-image: url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-187/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=");
    background-repeat: no-repeat;
    height: auto;
    width: 154px;
    color: inherit;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    border-radius: 2%;
    &:hover{
        cursor: pointer;
    }
`

const Input = styled.input`
    padding: 0 0 0 12px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 3px;
    border: #fff;
    background-color: #fff;
    position: relative;
    top: 0;
    box-shadow: none;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Location = styled.button`
    font-size: 16;
    display: flex;
    align-items: center;
    border: #ecc766;
    border-left: 1px solid #eeb529;
    height: 55px;
    width: auto;
    display: flex;
    text-align: center;
    padding: 0 10px;
    cursor: pointer;
    background-color: inherit;
    &:hover {
        background-color: #eeb529
    }
`

const SignIn = styled.button`
    border: 0;
    border-radius: 0;
    width: 100%;
    background: #ff686e;
    border-bottom: 1px solid #ff4e56;
    height: 55px;
    color: #fff;
    font-size: 15px;
    -webkit-transition: all 100ms ease-in-out;
    transition: all 100ms ease-in-out;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: #e04f54;
    }
    &:active {
        background: #af3e42;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <HamburgerMenu />
                <Link to='/'>
                    <LogoContainer>
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-187/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=" alt="chaldal logo" />
                    </LogoContainer>
                </Link>
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder='Search for products (e.g. eggs, milk, potato)'/>
                    <Search />
                </SearchContainer>    
            </Center>
            <Right>
                <Location>
                    <Home/>
                    Dhaka
                </Location>
                <SignIn>Sign in</SignIn>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
