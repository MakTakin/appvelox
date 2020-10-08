import React from "react"
import {DatePicker} from "@material-ui/pickers"
import {Badge} from "@material-ui/core"
import styled from "styled-components"
import {createMuiTheme} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersCalendarHeader: {
            switchHeader: {
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: "#7761FF",
                color: 'white',
                justifyContent: 'center',
                borderTopLeftRadius:'5px',
                borderTopRightRadius:'5px'
            },
            transitionContainer: {
                width: '116px'
            },
            iconButton: {
                backgroundColor: '#7761FF',
                color: 'white',
            },
            daysHeader: {
                justifyContent: 'space-between',
                margin: '10px 0',
                fontSize: '14px',
                fontFamily: 'Rubik',
                padding:'0 10px'

            },
            dayLabel: {
                color: 'black',
                width: '79px',
                margin: 0

            }
        },
        MuiPickersDay: {
            day: {
                width: '79px',
                height: '63px',
                borderRadius: 0,
                padding:'10px',
                margin: '0',
                backgroundColor:'white'
            },
            daySelected: {
                border: '1.5px solid #50CAFF',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                    backgroundColor: "white",
                },
            },
        },
        MuiPickersBasePicker: {
            pickerView: {
                maxWidth: '575px',
                width: '575px'
            },
            pickerViewLandscape: {
                padding: 0
            },
            container: {
                background:'#EBE7FF',
                borderRadius:'5px'
            }
        },
        MuiPickersCalendar: {
            transitionContainer: {
                minHeight: "400px",
                marginTop: 0
            }
        },
        MuiButtonBase: {
            root: {
                alignItems:'start',
                justifyContent: 'start',
            }
        }
    }
})

const StyledBadge = styled(Badge)`
    > span {
        background:#50CAFF;
        color:white;
        right:20px;
        bottom:20px;
    }
`

const Calendar = (props) => {
    const doctorDay = props.doctors.map(doctor => doctor.data)
    return (
        <ThemeProvider theme={materialTheme}>
            <CssBaseline/>
            <DatePicker
                disableToolbar
                orientation="landscape"
                variant="static"
                openTo="date"
                value={props.selectedDate}
                onChange={(data) => props.dataChange(data)}
                renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                    const dataDay = day.format('YY-MM-DD')
                    const countRegister = doctorDay.filter(data => data == dataDay).length
                    const selected = countRegister && isInCurrentMonth
                    return <StyledBadge badgeContent={selected ? `${countRegister}` : null}
                                 anchorOrigin={{
                                     vertical: 'bottom',
                                     horizontal: 'right',
                                 }}
                    >
                        {dayComponent}
                    </StyledBadge>
                }}
            />
        </ThemeProvider>
    )
}
export default Calendar