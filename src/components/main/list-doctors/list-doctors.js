import React from "react"
import styled from "styled-components"
import Doctor from "./doctor/doctor"
import {DoctorLink} from "../../UI/links/links"
import {DivRegister} from "../../UI/div/divs"

const DivFlex = styled.div`
      display:flex;
      margin-bottom:35px;
      align-items:center;
`
const DivLink = styled.div`
    text-align:center;
`

const ListOfDoctors = (props) => {
    const doctorsFilter = props.doctors.filter((doctor, index) => index < 2)
    const doctorsList = [...props.doctors]
    return (
        <DivFlex>
            {
                (doctorsList.length > 0) ?
                    <Doctor
                        doctors={doctorsFilter}
                        cancelRegister={props.cancelRegister} /> :
                    <DivRegister>Записей на прием нет</DivRegister>
            }
            {
                (doctorsList.length - 2 > 0) ?
                    <DivLink>
                        <div>Еще {doctorsList.length - 2} записи</div>
                        <DoctorLink to='/details'>Подробнее</DoctorLink>
                    </DivLink> :
                    null
            }
        </DivFlex>
    )
}
export default ListOfDoctors