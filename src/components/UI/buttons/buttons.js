import styled from 'styled-components'

export const Button = styled.button`
    font-family:'Rubik', sans-serif;
    border: none;
    outline: none;
    &:hover {
    cursor: pointer;
    }
`
export const NavButton = styled(Button)`
    background: #7761FF;
    border-radius:5px;
    color:white;
    padding:12px 24px;
    margin-left:20px;
    align-self: flex-start;
`
export const HeaderButton = styled(Button)`
    background: #50CAFF;
    margin:0;
    padding:0;
    margin-left: ${props => props.left ? '7px' : '21px'}
`
export const HeaderAvatarButton = styled(HeaderButton)`
    border: 1px solid white;
    border-radius: 50%;
    width: 48px;
    height: 48px;
`
export const DoctorButton = styled(Button)`
    background: #7761FF;
    border-radius:5px;
    color:white;
    padding:12px 15px;
`
export const RegisterButton = styled(Button)`
    background: white;
    border-radius:5px;
    color:#50CAFF;
    text-decoration: underline;
    padding:0px;
    margin-bottom:15px;
    margin-right: 40px;
    align-self: flex-end;
`
export const DataButton = styled(Button)`
    background:white;
    border-radius:5px;
    padding:0;
    box-shadow: 0px 0px 5px #EBE7FF;
    display:flex;
    flex:1;
    margin:0 15px 15px 0;
    &:hover {
        >div:nth-child(1) {
            background:#50CAFF;
        }
        >div:nth-child(2) {
            margin-top:20px;
            li {
              color:#50CAFF;
            }
            span {
              color:#000;
            }
            div:after {
             background:#50CAFF;
            }
        }
        >div:nth-child(2) {
            margin-top:20px;
        }        
    }
`
