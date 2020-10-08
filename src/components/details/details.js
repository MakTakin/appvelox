import React from "react"
import styled from "styled-components"
import back from '../../images/back.png'
import {DivMain, DivRegister} from "../UI/div/divs"
import {DoctorLink} from "../UI/links/links"
import {RegisterButton} from "../UI/buttons/buttons"
import Doctor from "../main/list-doctors/doctor/doctor"
import Calendar from "./calendar/calendar"


const DivTitle = styled.div`
    display:flex;
    margin-bottom: 15px;
    > div {
        margin-left:15px;
    }
`

const DivDoctor = styled.div`
    height: calc(100vh - 111px);
    display:flex;
    justify-content: space-between;
    > div:nth-child(1) {
        overflow-y: auto;
        display:flex;
        margin-bottom:15px;
        flex-direction:column;
        ::-webkit-scrollbar {
            width: 8px;
            border-radius:5px;
            background: #EBE7FF;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #003B72;
            border-radius: 5px;
        }
    }
`


const Details = (props) => {
    const filterDoctors = props.filterDoctors
    return (
        <DivMain>
            <DivTitle>
                <DoctorLink to='/'><img src={back} alt=""/></DoctorLink>
                <div>Мои записи</div>
            </DivTitle>
            <DivDoctor>
                <div>
                    { props.currentDay ?
                        <RegisterButton
                            onClick={()=>props.showAllDoctors()}
                        >
                            Показать все записи
                        </RegisterButton> :
                        null
                    }
                    { filterDoctors.length > 0 ?
                        <Doctor doctors={filterDoctors}
                                cancelRegister={props.cancelRegister}
                        /> :
                        <DivRegister>Записей на прием нет</DivRegister>
                    }
                </div>
                <Calendar
                    doctors={props.doctors}
                    selectedDate={props.selectedDate}
                    dataChange={props.dataChange}
                />
            </DivDoctor>
        </DivMain>
    )
}
export default Details