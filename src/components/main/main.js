import React from "react"
import ListOfDoctors from "./list-doctors/list-doctors"
import styled from "styled-components"
import PatientData from "./patient-data/patient-data"
import {DivMain} from "../UI/div/divs"

const DivRegister = styled.div`
    font-size: 16px;
    margin-left: 20px;
    margin-bottom:15px;
`

const Main = (props) => {
    return(
        <DivMain>
            <DivRegister>Записи на прием</DivRegister>
            <ListOfDoctors doctors={props.doctors} cancelRegister={props.cancelRegister}/>
            <DivRegister>Электронная карта</DivRegister>
            <PatientData/>
        </DivMain>
    )
}
export default Main