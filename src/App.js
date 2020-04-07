import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import DoctorLogin from './components/DoctorLogin/DoctorLogin';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Footer from './components/Footer/Footer';

function App() {
  
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
            <Navbar />
            <DoctorLogin />
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
