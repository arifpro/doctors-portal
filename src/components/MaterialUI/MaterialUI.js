import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DoctorLogin from '../DoctorLogin/DoctorLogin';

const MaterialUI = () => {
    const [isAuth, setAuth] = useState(false)
    const fakeAuth = () => {
        setAuth(true)
    }
    
    return (
        <>
            {
                isAuth ? <Dashboard /> : 
                <DoctorLogin fakeAuth={fakeAuth}/>
            }
        </>
    );
};

export default MaterialUI;