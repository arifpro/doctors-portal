import React from 'react';
import './DoctorLogin.css'
import bgImg from '../../images/Group 140.png'
import Navbar from '../Navbar/Navbar';

const DoctorLogin = ({ fakeAuth }) => {

    // const onSubmitHandle = () => {
        
    //     const username = document.getElementById('username').value
    //     const password = document.getElementById('password').value

    //     console.log(username, "  ", password);
    //     if(username==="admin" && password==="admin"){
    //         window.location.replace("/doctor/dashboard");
    //     }else{
    //         alert('Wrong username and password. Please try again with username: "admin" and password: "admin"')
    //         window.location.reload(true);
    //     }
    // }
    
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        

                        <div className="card customLoginDiv">
                            <div className="card-body customLoginCard">
                                

                                <form  className="py-5 doctorLoginForm">
                                    <h5 className="card-title text-center">Login</h5>
                                    <br/><br/>
                                    <div className="form-group">
                                        <h6 className="card-subtitle mb-2 text-muted">Username</h6>
                                        <input type="text" size="30" id="username" name="username" className="form-control" required />
                                    </div><br/>
                                    <div className="form-group">
                                        <h6 className="card-subtitle mb-2 text-muted">Password</h6>
                                        <input type="password" id="password" name="password" className="form-control" required />
                                    </div>
                                    <a href="#" style={{color: 'red'}}>Forgot your password?</a>
                                    <br/>
                                    <br/>
                                    <br/>

                                    <div className="form-group">
                                        <button className="btn btn-custom btn-block" type="submit" onClick={fakeAuth}>Sign In</button>
                                    </div>
                                </form>

                                
                            </div>
                        </div>

                        
                


                    </div>
                    <div className="col-md-6 loginCustomDiv2">
                        <img src={bgImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorLogin;