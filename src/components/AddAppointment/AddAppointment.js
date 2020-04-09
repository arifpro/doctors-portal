import React, { useState } from 'react';
import './AddAppointment.css'
import topImg from '../../images/Mask Group 1.png'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Popup from '../Popup/Popup'


const AddAppointment = () => {
    const [title, setTitle] = useState(null)
    const [time, setTime] = useState(null)
    // const [date, setDate] = useState(null)
    // const useStyles = makeStyles((theme) => ({
    //     container: {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //     },
    //     textField: {
    //         marginLeft: theme.spacing(1),
    //         marginRight: theme.spacing(1),
    //         width: 200,
    //     },
    // }));
    // const classes = useStyles();



    //Date Picker
    const [selectedDate, setSelectedDate] = useState(null)

    // let dateFromId = document.getElementById('setAppDate1').innerText
    // console.log(dateFromId);

    // console.log(selectedDate);
    if (selectedDate !== null){
        const splitSelectedDate = String(selectedDate).split(' ')
        
        const finalDate = `${splitSelectedDate[1]} ${splitSelectedDate[2]}, ${splitSelectedDate[3]}   (${splitSelectedDate[5]})`
        document.getElementById('setAppDate1').innerText = finalDate
        console.log(finalDate);
        // setDate(finalDate)
    }
    
    
    const dateFromId0 = String(new Date()).split(' ')
    const dateFromId = `${dateFromId0[1]} ${dateFromId0[2]}, ${dateFromId0[3]}   (${dateFromId0[5]})`
    // console.log(dateFromId);
    
    



    //prompt
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        console.log('popup clicked')
        setShowPopup(!showPopup)
    }


    // const getFinalSelectedDate = () => {
    //     let dateFromId = document.getElementById('setAppDate1').innerText
    //     console.log(dateFromId);
    //     return dateFromId
    // }
    
    
    // console.log(getFinalSelectedDate);

    

    return (
        <div>
            <div className="customContainer1">
                <div className="">
                    <div className="row">
                        <div className="col-md-4 customDiv1 d-flex align-items-center">
                            <div>
                                <h1>Appointment</h1>
                                {/* <form className={classes.container}  noValidate>
                                    <TextField
                                        id="date"
                                        label="Select an appointment date"
                                        type="date"
                                        // defaultValue="2020-04-08"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form> */}

                                <br/><br/>
                                <h6>Select an appointment date</h6>

                                <DatePicker
                                    placeholderText='Pick a Date'
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    // dateFormat='Pp'
                                    minDate={new Date()}
                                    // maxDate={new Date()}
                                    // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} 
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                />
                            </div>
                        </div>
                        <div className="col-md-4 customDiv2 ">

                        </div>
                        <div className="col-md-4 customAppDiv3 d-flex align-items-center">
                            <img src={topImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>




            
            
            


            <div className="container">
                <br/><br/>
                <h3 className="text-center projectMainColor projectBoldText">Available Appointments on <span id="setAppDate1">{dateFromId}</span> </h3>
                <br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Teeth Orthodontics')
                                            setTime("8:00 AM - 9:00 AM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Cosmetic Dentistry</h4>
                                <h6>10:05 AM - 11:30 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Cosmetic Dentistry')
                                            setTime("10:05 AM - 11:30 AM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Teeth Cleaning</h4>
                                <h6>5:00 PM - 6:30 PM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Teeth Cleaning')
                                            setTime("5:00 PM - 6:30 PM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Cavity Protection</h4>
                                <h6>7:00 AM - 8:30 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Cavity Protection')
                                            setTime("7:00 AM - 8:30 AM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Teeth Orthodontics')
                                            setTime("8:00 AM - 9:00 AM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customAppointDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customAppointCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button 
                                        className="getAppointmentBtn bookAppointmentBtn"
                                        onClick={() => {
                                            setTitle('Teeth Orthodontics')
                                            setTime("8:00 AM - 9:00 AM")
                                            togglePopup()
                                        }}
                                    >BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* prompt */}
            {
                showPopup ?
                <Popup
                    title= {title}
                    time = {time}
                    date={ dateFromId}
                    closePopup={togglePopup.bind()}
                />
                : null
            }
            {/* end prompt */}


            
        </div>
    );
};

export default AddAppointment;