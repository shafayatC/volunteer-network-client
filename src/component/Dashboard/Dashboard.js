import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './style.css'; 

const Dashboard = () => {
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
                        <tr>
                            <td>Pro Resel</td>
                            <td>sufi@gmail.com</td>
                            <td>22-10-2020</td>
                            <td>Organize books at the library</td>
                            <td><button className="trash"><img src={require('./img/trash.png')} /></button></td>
                        </tr>
                        <tr>
                            <td>Pro Resel</td>
                            <td>sufi@gmail.com</td>
                            <td>22-10-2020</td>
                            <td>Organize books at the library</td>
                            <td><button className="trash"><img src={require('./img/trash.png')} /></button></td>
                        </tr>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;