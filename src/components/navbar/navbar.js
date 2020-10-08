import React from "react"
import Logo from "./logo/logo"
import Menu from "./menu/menu"
import styled from 'styled-components'
import NavFooter from "./navfooter/nav-footer"
import {NavButton} from "../UI/buttons/buttons"

const Nav = styled.nav`
    display:flex;
    flex-direction:column;
    background: #003B72;
    font-size: 14px;
    color: white;
`
const NavBar = () => {
    return(
        <Nav>
            <Logo/>
            <Menu/>
            <NavButton>Подать заявку</NavButton>
            <NavFooter/>
        </Nav>
    )
}
export default NavBar