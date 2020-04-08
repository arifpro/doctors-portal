import React from 'react';
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Popup = (props) => {
    return (
        <div className='addAppPopup'>
            <div className='addAppPopup_inner '>
                <div className="container customPopupDiv">
                    
                    <p className="text-right customCrossBtn" onClick={props.closePopup}>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </p>
                    
                    
                    <h5 className="text-center projectMainColor projectBoldText">{props.title}</h5>
                    <br/>


                    <form className="text-center">
                        <div className="form-group">
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                id="time"
                                placeholder="Select Time"
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
                                defaultValue={props.date}
                            />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="popupSendBtn">Send</button>
                        </div>
                    </form>


                    {/* <br/>
                    <br/>
                    <br/> */}
                </div>
            </div>
        </div>
    );
};

export default Popup;