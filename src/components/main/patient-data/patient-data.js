import React from "react"
import styled from "styled-components"
import {DataButton} from "../../UI/buttons/buttons"
import patient from "../../../images/patient.png"
import analysis from "../../../images/analysis.png"
import addinfo from "../../../images/addinfo.png"
import history from "../../../images/history.png"

const DivImg = styled.div`
   padding:66px 42px;
`
const DivInfo = styled.div`
    padding:0 36px;
    font-size:16px;
    text-align:start;
    margin-top:36px;
    > div {
       font-size: 28px;
       &:after {
            content: " ";
            display:block;
            height:2px;
            background: #EBE7FF;
            margin: 10px 0 15px 0;     
       }
    }
    > ul {
       margin-left:13px;
    }  
`

const DivFlex = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const PatientData = () => {
    return (
        <DivFlex>
            <DataButton>
                <DivImg>
                    <img src={patient} alt=""/>
                </DivImg>
                <DivInfo>
                    <div>Информация о пациенте</div>
                    <ul>
                        <li>
                            <span>Ваши личные данные</span>
                        </li>
                        <li>
                            <span>Рекомендации врачей</span>
                        </li>
                        <li>
                            <span>История болезней</span>
                        </li>
                    </ul>
                </DivInfo>
            </DataButton>
            <DataButton>
                <DivImg>
                    <img src={analysis} alt=""/>
                </DivImg>
                <DivInfo>
                    <div>Результаты анализов</div>
                    <span>
                        Вы можете узнать здесь результаты своих анализов
                    </span>
                </DivInfo>
            </DataButton>
            <DataButton>
                <DivImg>
                    <img src={addinfo} alt=""/>
                </DivImg>
                <DivInfo>
                    <div>Добавить  информацию</div>
                    <span>
                        Добавляйте в свою электронную медицинскую карту новые данные
                    </span>
                </DivInfo>
            </DataButton>
            <DataButton>
                <DivImg>
                    <img src={history} alt=""/>
                </DivImg>
                <DivInfo>
                    <div>История приемов</div>
                    <span>
                        Вся информация о полученных услугах за все время хранится здесь
                    </span>
                </DivInfo>
            </DataButton>
        </DivFlex>
    )
}
export default PatientData