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

    const [vlEvent, setVlEvent] = useState({
      name: '',
      description: '',
      date: '', 
      image: '' 
    });
    const classes = useStyles();

    const onchangeEventName =(event)=> {
        setVlEvent({
          ...vlEvent,
          name: event.target.value,
        })
    }
    const onchangeDes =(event)=>{
      setVlEvent({
        ...vlEvent,
        description: event.target.value,
      })
    }
    const onchangeDate =(event)=>{
      setVlEvent({
        ...vlEvent,
        date: event.target.value,
      })
    }
    
    const onchangeImage =(event)=>{
      setVlEvent({
        ...vlEvent,
        image: event.target.value,
      })
    }
    const submitEvent = (e) =>{
        e.preventDefault();
        
      const ValidityMsg= []; 
      const imgValid = /\.(jpeg|jpg|gif|png)$/.test(vlEvent.image); 

      !vlEvent.name  && ValidityMsg.push("Event Title Empty");
      !vlEvent.description  && ValidityMsg.push("Description Empty");
      !vlEvent.date  && ValidityMsg.push("Date Empty");
      !imgValid && ValidityMsg.push("Add valide image")

        
      if(vlEvent.name && vlEvent.date && vlEvent.description && imgValid){

          fetch('https://radiant-coast-19512.herokuapp.com/addEvent', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(vlEvent),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data.insertedCount);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          alert("New Event Created Successfully");
          ValidityMsg=''; 
        }else {
               const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
               document.getElementById("warningMsg").innerHTML = mapping;  
          }
    }
    //upload btn function 
    const uploadImbBtn = () => {
      document.getElementById("uploadBtn").style.display= "none"; 
      document.getElementById("inputimg").style.display= "block"; 
    }
    
    const handleClick =(e) => {
      e.preventDefault();
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
                          <form onSubmit={handleClick} className="creatForm">
                          <div className="formWrap">

                           <div className="formLeft">
                             <p className="p_1">Event Title</p>
                           <input onBlur={onchangeEventName} type="text"></input>

                           <p className="p_2">Description</p>
                           <textarea onBlur={onchangeDes}> </textarea>

                           </div>
                           <div className="formRight">
                           <p className="p_6">Event Date</p>
                           <TextField
                              onBlur={onchangeDate}
                              id="dateEvent"
                              type="date"
                              className={classes.textField, "date_5"}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <p className="p_7">Banner</p>
                            <button onClick={uploadImbBtn} id="uploadBtn" className="upload" ><img  src={require('./img/cloud-upload.png')} />Upload Image</button>
                            <input onBlur={onchangeImage} id="inputimg" placeholder="Input image url" type="text"></input>
                            </div>
                            <ul id='warningMsg' style={{float:"left", width:"100%"}}></ul>

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