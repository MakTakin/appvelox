import React, {useState} from "react"
import styled from 'styled-components'
import profile from '../../../images/profile.png'
import doctor from '../../../images/doctor.png'
import message from '../../../images/message.png'
import test from '../../../images/tests.png'
import books from '../../../images/books.png'
import {StyledLinkNav} from "../../UI/links/links"

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Menu = () => {
    const [menuLink, setMenuLink] = useState(
[
            {
            logo: profile,
            label: "Профиль",
            active: true,
            to: '/'
            },
            {
            logo: doctor,
            label: "Врачи и клиники",
            active: false,
            to: '/doctors'
            },
            {
            logo: message,
            label: "Сообщения",
            active: false,
            to: '/message'
            },
            {
            logo: test,
            label: "Тестирование",
            active: false,
            to: '/tests'
            },
            {
            logo: books,
            label: "Полезно знать",
            active: false,
            to: '/books'
            }

        ]
    )

    const ChangeActive = (id) => {
        const buttons = [...menuLink]
        buttons.forEach((button, index) => index == id ? button.active = true : button.active = false)
        setMenuLink(buttons)
    }

    const renderLinks = menuLink.map((item, index) => {
        return (
            <StyledLinkNav
                key={index}
                to='/'
                active={item.active ? 1:0}
                onClick={() => ChangeActive(index)}
            >
                <img src={item.logo} alt=""/>
                {item.label}
            </StyledLinkNav>
        )
    })

    return (
        <DivFlex>
            {renderLinks}
        </DivFlex>
    )
}
export default Menu