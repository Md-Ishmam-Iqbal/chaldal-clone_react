// Finish styling properly later

import styled from '@emotion/styled'
import { Home, Search } from '@mui/icons-material'
import React from 'react'

const Container = styled.div`
    height: 60px;
    background-color: #fdd670;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const HamburgerMenu = styled.span`
    border: 0;
    background: 0 0;
    float: left;
    padding: 10px;
    margin-left: 10px;
    height: auto;
    outline: 0;
    border-radius: 2px
    `

const LogoContainer = styled.div`
    background-image: url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-187/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=");
    background-repeat: no-repeat;
    height: 40px;
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
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
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
    height: 40px;
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
                <HamburgerMenu>
                    <button>
                        <svg width="25px" height="25px"></svg>
                    </button>
                </HamburgerMenu>
                <LogoContainer>
                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-187/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=" alt="chaldal logo" />
                </LogoContainer>
            </Left>
            <Center>
                <SearchContainer>
                    <Input />
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
