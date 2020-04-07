import React from 'react';
import './AddAppointment.css'
import topImg from '../../images/Mask Group 1.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const AddAppointment = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));

    const classes = useStyles();
    // console.log(classes)

        const selectedDate = document.getElementById('date')
        console.log(selectedDate);

    const addAppDate = () => {
    //     const selectedDate = document.getElementById('date').innerText
    //     console.log(selectedDate);
    }

    return (
        <div>
            <div className="customContainer1">
                <div className="">
                    <div className="row">
                        <div className="col-md-4 customDiv1 d-flex align-items-center">
                            <div>
                                <h1>Appointment</h1>
                                <form className={classes.container} onSubmit={addAppDate} noValidate>
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
                                    
                                    {/* <button className="getAppointmentBtn" type="submit">Check Date</button> */}
                                </form>
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
                <h3 className="text-center projectMainColor projectBoldText">Available Appointments on April 10, 2020</h3>
                <br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Cosmetic Dentistry</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Teeth Cleaning</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Cavity Protection</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card customLoginDiv d-flex justify-content-center align-items-center">
                            <div className="card-body customLoginCard text-center">
                                <h4 className="projectMainColor">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p>10 SPACES AVAILABLE</p>
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">BOOK APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            
        </div>
    );
};

export default AddAppointment;