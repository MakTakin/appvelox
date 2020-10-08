import React from "react"
import styled from "styled-components"
import {HeaderAvatarButton, HeaderButton} from "../../UI/buttons/buttons"
import search from '../../../images/search.png'
import avatar from '../../../images/avatar.png'
import notice from '../../../images/notion.png'
import eye from '../../../images/eye.png'
import show from '../../../images/showProfile.png'

const DivFlex = styled.div`
    display: flex;
    align-items: center; 
    
`

const Info = () => {
    return (
        <DivFlex>
            <HeaderButton>
                <img src={search} alt=""/>
            </HeaderButton>
            <HeaderButton>
                <img src={notice} alt=""/>
            </HeaderButton>
            <HeaderButton>
                <img src={eye} alt=""/>
            </HeaderButton>
            <HeaderAvatarButton>
                <img src={avatar} alt=""/>
            </HeaderAvatarButton>
            <HeaderButton left>
                <img src={show} alt=""/>
            </HeaderButton>
        </DivFlex>
    )
}
export default Info