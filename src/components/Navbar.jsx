// Tried styling components
// finish styling later

import styled from '@emotion/styled'
import { Home, Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

const Container = styled.div`
    background-color: #fdd670;
    z-index: 99;
    position: fixed;
    width: 100%;
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
    width: 25%;
`

const LogoContainer = styled.div`
    background-repeat: no-repeat;
    padding: 0 18px 0 12px;
    height: 55px;
    width: 125px;
    float: left;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    color: inherit;
    cursor: pointer;
`

const Logo = styled.img`
    height: 40px;
    background-size: 125px;
    background-image: url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-195/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1);
    background-repeat: no-repeat;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
`

const SearchWrapper = styled.div`
    min-width: 700px;
    position: relative;
    padding-right: 0 10px;
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
    width: 25%;
`
const Location = styled.button`
    font-size: 16;
    display: flex;
    align-items: center;
    border: #ecc766;
    border-left: 1px solid #eeb529;
    border-right: 1px solid #eeb529;
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

const Language = styled.div`
    background-color: inherit;
    align-items: center;
    display: flex;
    text-align: center;
    padding: 5px;
    text-align: center;
`

const English = styled.p`
    font-size: 16;
    font-weight: 1000;
    color: #ff686e;
    cursor: pointer;
`

const Bangla = styled.p`
    font-size: 16;
    cursor: pointer;
`

const LoginArea = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    height: 55px;
    border-left: 0;
`

const SignIn = styled.button`
    border: 0;
    border-radius: 0;
    font-size: 15px;
    width: 100%;
    background: #ff686e;
    border-bottom: 1px solid #ff4e56;
    height: 100%;
    color: #fff;
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
            <HamburgerMenu />
            <Link to='/'>
                <LogoContainer>
                    <Logo src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-187/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=" alt="chaldal logo" />
                </LogoContainer>
            </Link>
            <SearchWrapper>
                <Input placeholder='Search for products (e.g. eggs, milk, potato)'/>
                <Search />
            </SearchWrapper>    
            <Location>
                <Home/>
                Dhaka
            </Location>
            <Language>
                <English>EN</English>
                <div>|</div>
                <Bangla>Ben</Bangla>
            </Language>
            <LoginArea>
                <SignIn>Sign in</SignIn>
            </LoginArea>
        </Wrapper>
    </Container>
  )
}

export default Navbar
