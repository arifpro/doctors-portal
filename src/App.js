import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import DoctorLogin from './components/DoctorLogin/DoctorLogin';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import MaterialUI from './components/MaterialUI/MaterialUI';
import Patients from './components/Patients/Patients';
import Prescriptions from './components/Prescriptions/Prescriptions';


// import Contact from './components/MaterialUI/pages/Contact';
// import Customers from './components/MaterialUI/pages/Customers';
// import HomePage from './components/MaterialUI/pages/HomePage';
// import { Drawer } from '@material-ui/core';

function App(props) {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar navColor="white" />
            <Home />
            <Footer />
          </Route>

          

          <Route path='/doctorLogin'>
            <MaterialUI />
            {/* <DoctorLogin/> */}
          </Route>
          <Route path='/doctor/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/doctor/appointments'>
            <Appointments/>
          </Route>
          <Route path='/doctor/patients'>
            <Patients/>
          </Route>
          <Route path='/doctor/prescriptions'>
            <Prescriptions/>
          </Route>


          <Route path='/addAppointment'>
            <Navbar />
            <AddAppointment />
            <Footer />
          </Route>

          

          {/* <Route path='/doctor/:pageName'></Route> */}
          <Route path='*'>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>
      {/* <Appointments /> */}
    </div>
  );
}

export default App;
