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

          {/* <Route path='/doctor'>
            <Dashboard>
              
            </Dashboard>
          </Route> */}

          {/* <Route path="/doctor" component={HomePage} />;
          <Route path="/doctor/contact" component={Contact} />;
          <Route path="/doctor/customers" component={Customers} />; */}

          <Route path='/doctorLogin'>
            <MaterialUI />
          </Route>
          <Route path='/addAppointment'>
            <Navbar />
            <AddAppointment />
            <Footer />
          </Route>

          

          <Route path='/doctor/:pageName'></Route>
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
