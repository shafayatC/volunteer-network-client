import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import EventCreate from './component/Dashboard/EventCreate';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import UserEvents from './component/UserEvents/UserEvents';
import Login from './component/Login/Login';
import RegVolunteer from './component/RegVolunteer/RegVolunteer';
import Dashboard from './component/Dashboard/Dashboard';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const ManageContext = createContext(); 

function App() {
  const location = useLocation();
  const [eventSelect, setEventSelect] =  useState({
    eventname:'', 
    eventimg: ''
  }); 
  const [user, setUser] = useState([]); 

  return (
    <ManageContext.Provider value={[setEventSelect, user, setUser]}> 
    <div className={`${location.pathname === "/" && "hmbg"} ${location.pathname !== "/dash-event" && "App"}  `}>
      
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/dash-event">
            <EventCreate></EventCreate>
          </Route>
          <Route path="/user-event">
            <Header></Header>
            <UserEvents user={user}></UserEvents>
          </Route>
          <PrivateRoute path="/reg-event">
            <RegVolunteer selectedEvent={eventSelect.eventname} eventImg={eventSelect.eventimg} user={user}></RegVolunteer>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/user-list">
            <Dashboard></Dashboard>
          </Route>
        </Switch>

    </div>
    </ManageContext.Provider>
  );
}

export default App;
