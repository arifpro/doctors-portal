import React, { useState } from 'react';
import MainDrawer from '../Dashboard/Dashboard';
import DoctorLogin from '../DoctorLogin/DoctorLogin';
import Appointments from '../Appointments/Appointments';


const MaterialUI = () => {
    const [isAuth, setAuth] = useState(false)
    const fakeAuth = () => {
        setAuth(true)
    }
    
    return (
        <>
            {
                isAuth ? <MainDrawer /> : 
                <DoctorLogin fakeAuth={fakeAuth}/>
            }
            {/* <Appointments /> */}

        </>
    );
};

export default MaterialUI;