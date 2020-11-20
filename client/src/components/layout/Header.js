import React from 'react'
import styled from 'styled-components'


const Header = () => {
    return (
        <MainContainer>
           <h1>Dev Edge<br/>Weekly</h1>
        </MainContainer>
    )
}

export default Header

// MAIN CONTAINER
const MainContainer = styled.header`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../images/negative.jpg)no-repeat center/cover;
    height: 20rem; 

    h1 {
        textAlign: justify;
        transform: translate(-50%, -50%);
        color: #ffff;
        
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    }
`
