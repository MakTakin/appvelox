import React, {useState} from 'react'
import './App.css'
import {Redirect, Route, Switch} from "react-router-dom"
import NavBar from "../navbar/navbar"
import Header from "../header/header"
import Main from "../main/main"
import Details from "../details/details"
import malyshko from "../../images/malyshko.png"
import kharkov from "../../images/kharkov.png"


function App() {
    const [doctors, setDoctors] = useState([
        {
            avatar: malyshko,
            name: 'Малушко Т. Н.',
            day: 'Понедельник',
            data: '20-06-15',
            time: '15:30',
            polyclinic: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            department: 'Хирургия',
            id: 1
        },
        {
            avatar: kharkov,
            name: 'Харьков В. С.',
            day: 'Понедельник',
            data: '20-06-15',
            time: '18:30',
            polyclinic: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            department: 'Терапевтическое отделение',
            id: 2
        },
        {
            avatar: malyshko,
            name: 'Малушко Т. Н.',
            day: 'Вторник',
            data: '20-06-30',
            time: '12:30',
            polyclinic: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            department: 'Хирургия',
            id: 3
        },
        {
            avatar: kharkov,
            name: 'Харьков В. С.',
            day: 'Четверг',
            data: '20-07-02',
            time: '18:30',
            polyclinic: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            department: 'Терапевтическое отделение',
            id: 4
        },
        {
            avatar: malyshko,
            name: 'Малушко Т. Н.',
            day: 'Вторник',
            data: '20-07-07',
            time: '15:30',
            polyclinic: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            department: 'Хирургия',
            id: 5
        }
    ])

    const [selectedDate, handleDateChange] = useState(new Date(2020,5,1));
    const [filterDoctors, setFilterDoctors] = useState(doctors)
    const [currentDay, setCurrentDay] = useState()

    // имитация загрузки данных с сервера
    // useEffect(() => {
    //     fetch(`${SERVER_URL}`,)
    //         .then(require => require.json())
    //         .then(doctors => {
    //             setDoctors(doctors)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const removeDoctors = (day, id) => {
        const dayRegister = doctors.filter(doctor => day == doctor.data && doctor.id != id)
        setFilterDoctors(dayRegister)
    }

    const cancelRegister = (id) => {
        const deletedDoctor = doctors.filter(doctor=> doctor.id != id)
        setDoctors(deletedDoctor)
        currentDay ? removeDoctors(currentDay,id) : setFilterDoctors(deletedDoctor)
    }

    const dataChange = (data) => {
        const day = data.format('YY-MM-DD')
        handleDateChange(data)
        setCurrentDay(day)
        removeDoctors(day)
    }
    const showAllDoctors = () => {
        setFilterDoctors(doctors)
        setCurrentDay('')
    }


    return (
        <div className="container grid">
            <NavBar/>
            <div>
                <Header/>
                <Switch>
                    <Route path='/'
                           render={() => <Main doctors={doctors}
                                         cancelRegister={cancelRegister}/>}
                           exact
                    />
                    <Route path='/details'
                           render={() => <Details
                                         filterDoctors={filterDoctors}
                                         doctors={doctors}
                                         cancelRegister={cancelRegister}
                                         selectedDate={selectedDate}
                                         dataChange={dataChange}
                                         currentDay={currentDay}
                                         showAllDoctors={showAllDoctors}/>}
                    />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </div>
    )
}

export default App;
