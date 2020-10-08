import React from "react"
import styled from "styled-components"
import help from "../../../images/help.png"
import logo from "../../../images/logo.png"
import {StyledLinkNav} from "../../UI/links/links"
const DivFooter = styled.div`
    margin-top: auto;
    margin-bottom: 16px;
    > a {
    margin-bottom:4px;
    }
    > img {
    margin-left:20px;
    }
`

const NavFooter = () => {
    return (
        <DivFooter>
            <StyledLinkNav to='help'><img src={help} alt=""/>Помощь</StyledLinkNav>
             <img src={logo} alt=""/>
        </DivFooter>
    )
}
export default NavFooter