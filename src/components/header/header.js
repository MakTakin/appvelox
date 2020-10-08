import React from "react"
import Profile from "./profile/profile"
import Info from "./info/info"
import styled from "styled-components"


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    background: #50CAFF;
    color: white;
    padding:5px 40px 6px 40px;
`

const Header = () => {
    return(
        <StyledHeader>
            <Profile/>
            <Info/>
        </StyledHeader>
    )
}
export default Header