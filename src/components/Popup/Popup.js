import React, {useState} from 'react';
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        border: '1px solid gray',
    },
}));

const Popup = (props) => {
    const [appointmentId, setAppointmentId] = useState(null)

    const classes = useStyles();
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };



    const handleSubmit = (data) => {
        const formData = new FormData(data.target)
        const patientDetails = {}
        data.preventDefault()

        for (let entry of formData.entries()) {
            patientDetails[entry[0]] = entry[1]
        }
        patientDetails['gender'] = gender
        patientDetails['action'] = 'Pending'
        patientDetails['action2'] = 'Not Visited'

        // console.log(patientDetails);
        fetch('https://backend-doctors-portal.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientDetails)
        })
        .then(res => res.json())
        .then(data => {
            setAppointmentId(data._id)
            console.log(data._id);
        })
    }


   

    return (
        <div className='addAppPopup'>
            <div className='addAppPopup_inner '>
                <div className="container customPopupDiv">
                    
                    <div className="text-right">
                        <button className="customCrossBtn" onClick={props.closePopup}>
                            {/* <FontAwesomeIcon icon={faWindowClose} /> */}
                            X
                        </button>
                    </div>
                    
                    
                    <h5 className="text-center projectMainColor projectBoldText">{props.title}</h5>
                    <br/>

                    
                    <form className="text-center" onSubmit={handleSubmit} id="input-wrapper">
                        
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name"
                            />
                        </div>

                        <div class="d-flex justify-content-around">
                            <div class="dropdown">
                                <Select
                                    value={gender}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Gender
                                        </MenuItem>
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                </Select>

                                    
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="age"
                                    id="age"
                                    placeholder="Your Age"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="weight"
                                    id="weight"
                                    placeholder="Your Weight"
                                />
                            </div>
                        </div>




                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="phone" 
                                id="phone" 
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email"
                                className="form-control" 
                                name="email"
                                id="email" 
                                placeholder="Email" 
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                id="address"
                                placeholder="Address"
                            />
                        </div>
                        <div class="d-flex justify-content-between" >
                            <div className="form-group" style={{ width: '45%' }}>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="date" 
                                    id="date" 
                                    placeholder="mm/dd/yy"
                                    defaultValue={props.date}
                                    readonly="readonly"
                                />
                            </div>
                            <div className="form-group" style={{ width: '45%' }}>
                                <input
                                    type="text"
                                    className="form-control center"
                                    name="time"
                                    id="time"
                                    placeholder="Select Time"
                                    defaultValue={props.time}
                                    readonly="readonly"
                                />
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="popupSendBtn">Send</button>
                        </div>
                    </form>
                    
                    <br/>
                    {
                        appointmentId && alert(`Thank you for submit your appointment. Your appointment id is: ${appointmentId}`)
                    }
                    {/* {
                        appointmentId && <div>
                            <h3>Thank you for submit your appointment</h3>
                            <p>Your appointment id is: {appointmentId}</p>
                        </div>
                    } */}


                    {/* <br/>
                    <br/>
                    <br/> */}
                </div>
            </div>
        </div>
    );
};

export default Popup;