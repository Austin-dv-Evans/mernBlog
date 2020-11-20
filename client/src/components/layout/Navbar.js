import React from 'react'
import styled from 'styled-components'
import logo from './DevEdgeCopy.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
                <Link className="navbar-brand" to="/">
                    <img style={{width: '180px'}} src={logo} alt="Company Log"/>
                </Link>
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/add-article">Add Article</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </NavbarContainer>
    )
}

export default Navbar


// Main Navbar Container

const NavbarContainer = styled.div`
    z-index: 10;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--dark-green);
    .nav-link{
        color: #fff !important;
        &:hover {
            background: var(--light-green)
        }
    },
    .sticky-top {
        marginBottom: 3rem;
        top: 0;
        width: 100%;
    }

    .navbar-toggler-icon {
        color: #ffff !important
    }
`;