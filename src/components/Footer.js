import React from 'react'
import SocialMedia from './SocialMedia'
import { Container } from './style/Container.styled'
import { Flex } from './style/Flex.styled'
import {FooterStyled} from './style/Footer.styled'
function Footer
() {
  return (
    <FooterStyled>
        <Container>
            <img src='./images/logo_white.svg' alt='' />
            <Flex>
                  <ul>
                      <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </li>
                      <li>+1-543-123-4567</li>
                      <li>mostafahabib@gmail.com</li>
                  </ul>
                  <ul>
                      <li>About Us</li>
                      <li>What We Do</li>
                      <li>FAQ</li>
                  </ul>

                  <ul>
                      <li>Career</li>
                      <li>Blog</li>
                      <li>Contact Us</li>
                  </ul>

                  <SocialMedia />
        </Flex>

        <p>&copy; mostafahabib. All rights reserved</p>
        </Container>

    </FooterStyled>
  )
}

export default Footer
