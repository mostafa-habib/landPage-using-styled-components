import React from 'react'
import { Container } from './style/Container.styled'
import { StyledHeader , Nav , Logo , Image } from './style/Header.styled'
import { Button } from './style/Button.styled'
import {Flex} from './style/Flex.styled'

function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt=''></Logo>
                <Button>Try It For Free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Bulid the comunity your fans will love</h1>
                    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Button bg="#ff0099" color='#fff'>
                        Get Started For Free
                    </Button>
                </div>
                <Image src="./images/illustration-mockups.svg" alt="" />
            </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header
