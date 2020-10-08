import React from "react"
import styled from "styled-components"
import {DoctorButton} from "../../../UI/buttons/buttons"

const DivDoctor = styled.div`
    display:flex;
    max-width: 435px;
    flex-wrap:wrap;
    font-size:14px;
    padding:20px;
    box-shadow: 0px 0px 5px #EBE7FF;
    border-radius: 5px;
    margin-right:20px;
`
const DivFlex = styled.div`
    display:flex;
    flex-grow:1;
    margin-top:10px;
    > button {
        margin-left: auto;
        align-self: flex-end;
    }
    
`

const DivFlexColumn = styled.div`
    display:flex;
    flex-direction:column;
    align-self: center;
    margin-left:10px;  
    & > div:nth-child(1) {
        font-weight:bold;
    }
    & > div:nth-child(2) {
        color: #EBE7FF;
    }
`

const DivTime = styled.div`
    font-size:16px;
    font-weight:bold;
    margin-bottom:5px;
`

const DivPoliclinic = styled.div`
    width:70%;
`

const Doctor = (props) => {
    const doctors = props.doctors
    return (
        <>
            {
                doctors.map(doctor => {
                    return (
                        <DivDoctor key={doctor.id}>
                            <DivTime>
                                {doctor.day} {doctor.data.split('-').reverse().join('.')} | {doctor.time}
                            </DivTime>
                            <DivPoliclinic>
                                {doctor.polyclinic}
                            </DivPoliclinic>
                            <DivFlex>
                                <div>
                                    <img src={doctor.avatar} alt=""/>
                                </div>
                                <DivFlexColumn>
                                    <div>
                                        {doctor.name}
                                    </div>
                                    <div>
                                        {doctor.department}
                                    </div>
                                </DivFlexColumn>
                                <DoctorButton
                                    onClick={()=> props.cancelRegister(doctor.id)}
                                >
                                    Отменить
                                </DoctorButton>
                            </DivFlex>
                        </DivDoctor>
                    )
                })
            }
        </>
    )
}
export default Doctor