import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SocialStyled } from './style/SocialIcon.styled'

function SocialMedia() {
    return (
        <SocialStyled>
            <li>
                <a href='https://twitter.com'> <FaTwitter /> </a>
                
            </li>
            <li>
                <a href='https://facebook.com'> <FaFacebook /> </a>
                
            </li>
            <li>
                <a href='https://linkedin.com' > <FaLinkedin /> </a>
                
            </li>

        </SocialStyled>
    )
}

export default SocialMedia