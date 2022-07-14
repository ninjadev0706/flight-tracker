import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
    nav{
        background: #2d74c4;
        padding: 20px 50px;
        border-radius: 5px;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <nav>
                <span>Flight</span> Tracker
            </nav>
        </Nav>
    );
}

export default Navbar;
