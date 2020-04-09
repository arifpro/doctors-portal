import React, {useState} from 'react';
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';

const Popup = (props) => {
    const [appointmentId, setAppointmentId] = useState(null)



    const handleSubmit = (data) => {
        const formData = new FormData(data.target)
        const patientDetails = {}
        data.preventDefault()

        for (let entry of formData.entries()) {
            patientDetails[entry[0]] = entry[1]
        }

        
        fetch('https://backend-doctors-portal.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientDetails)
        })
            .then(res => res.json())
            .then(order => {
                setAppointmentId(order._id)
                console.log(order._id);
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


                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="time"
                                id="time"
                                placeholder="Select Time"
                                // value={props.time}
                                defaultValue={props.time}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name"
                            />
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
                                name="date" 
                                id="date" 
                                placeholder="mm/dd/yy"
                                // value={props.date}
                                defaultValue={props.date}
                            />
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