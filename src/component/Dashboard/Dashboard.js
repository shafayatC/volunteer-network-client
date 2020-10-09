import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
  import './style.css'; 
  import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = () => {
    const [eventList, setEventList] =  useState([]); 

    const deletEvent = val => {
        console.log(val);
        fetch(`https://radiant-coast-19512.herokuapp.com/userEventDelete/${val}`, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => {
          if(res){
            fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
            .then(res => res.json())
            .then(data =>setEventList(data))
          }
        })
      }

    useEffect(()=>{
        fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
        .then(res => res.json())
        .then(data =>setEventList(data))
    },[])

    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img className="fwidth" src={require('../Header/img/logo.png')} /></Link>
                <div className="dashMenu fwidth">
                    <Link to="/user-list" className="fwidth  active lnk_1"><img className="icon_2" src={require('./img/users-alt-blue.png')} />Vlunteer register list</Link>
                    <Link to="/dash-event" className="fwidth  lnk_1"><img className="icon_2" src={require('./img/plusb.png')} /> Add event</Link>
                </div>
                </div>
                <div className="rightWidget right">
                <h2 class="dashHeading">Volunteer register list</h2>
                <div className="eventForm">
                    <div className="userListWrap">

                    <table className="table_1">
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Registrating Date</th>
                            <th>Volunteer list</th>
                            <th>Action</th>
                        </tr>
                        {eventList.map(data=>
                                <tr>
                                <td>{data.eventname}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                                <td>{data.description}</td>
                                <td><button onClick={()=>deletEvent(data._id)} className="trash"><img src={require('./img/trash.png')} /></button></td>
                            </tr>
                            )}
                    
                        </table>
                        {eventList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;