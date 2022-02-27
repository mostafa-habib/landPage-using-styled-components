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
                    <p>Bulid the comunity your fans will love 
                    Bulid the comunity your fans will love
                    Bulid the comunity your fans will love
                    Bulid the comunity your fans will love
                    Bulid the comunity your fans will love
                    Bulid the comunity your fans will love
                    Bulid the comunity your fans will love
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