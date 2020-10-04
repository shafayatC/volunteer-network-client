import React, { useEffect } from 'react';
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

function App() {
  let location = useLocation();


  return (
    <div className={`${location.pathname === "/" && "App hmbg"} ${location.pathname === "/user-event" && "App"}`}>
      
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
            <UserEvents></UserEvents>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
