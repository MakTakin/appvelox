import styled from 'styled-components'
import {Link} from "react-router-dom"

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  box-sizing:border-box;
  width: 100%;
  padding-left:20px;
  margin-bottom:10px;
  align-items: center;
  font-size: 14px;
  height:45px;
  color:white;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

export const DoctorLink = styled(Link)`
   color:#50CAFF;
`

export const StyledLinkNav = styled(StyledLink)`
  & > img {
    margin-right:14px;
  }
  ${
    props => {
        if (props.active) {
            return `
            padding-left:0;
            color: #7761FF;
            background: white;
            &:before{ 
                content: " ";
                background: #2E71F3;
                height:45px;
                width: 2.5px;
                float: left;
                margin-right:17px;  
             }
            `
        }
    }
}
`
