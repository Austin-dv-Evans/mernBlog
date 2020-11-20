import React from 'react'
import styled from 'styled-components'



const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color:"white", top:"1.5rem", left:"1rem", position:"relative"}}>
                &copy;{new Date().getFullYear() } All Rights Reserved Dev Edge.
            </span>
        </FooterContainer>
    )
}

export default Footer


// Footer Container

const FooterContainer = styled.footer`
    background: var(--dark-green);
    height: 4rem;
    left: 0;
    bottom: 0;
    width: 100%;
`