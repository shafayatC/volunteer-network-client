import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const EventCreate = () => {

    const [vlEvent, setVlEvent] = useState();
    const classes = useStyles();

    const onchangeEventName =(event)=> {
        setVlEvent(event.target.value);
    }
    const submitEvent = (e) =>{
        e.preventDefault();

        const data = { username: 'example' };

        fetch('http://localhost:4000/addEvent', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
    }
    return (
        <div>
                  <div className="addEventWrap fwidth">
                      <div className="leftWidget left">
                          <Link  to="/" className="logo_3 fwidth"><img className="fwidth" src={require('../Header/img/logo.png')} /></Link>
                        <div className="dashMenu fwidth">
                          <Link to="/user-list" className="fwidth  lnk_1"><img className="icon_2" src={require('./img/users-alt.png')} />Vlunteer register list</Link>
                          <Link to="/dash-event" className="fwidth active lnk_1"><img className="icon_2" src={require('./img/plusg.png')} /> Add event</Link>
                        </div>
                      </div>
                      <div className="rightWidget right">
                        <h2 class="dashHeading">Add event</h2>
                        <div className="eventForm">
                          <form className="creatForm">
                          <div className="formWrap">

                           <div className="formLeft">
                             <p className="p_1">Event Title</p>
                           <input onChange={onchangeEventName} type="text"></input>

                           <p className="p_2">Description</p>
                           <textarea></textarea>

                           </div>
                           <div className="formRight">
                           <p className="p_6">Event Date</p>
                           <TextField
                              id="dateEvent"
                              type="date"
                              defaultValue="2020-05-24"
                              className={classes.textField, "date_5"}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <p className="p_7">Banner</p>
                            <button className="upload" ><img  src={require('./img/cloud-upload.png')} />Upload Image</button>
                            </div>
                            </div>
                            <button className="eventSubmitBtn" onClick={submitEvent}>Submit</button>
                          </form>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default EventCreate;