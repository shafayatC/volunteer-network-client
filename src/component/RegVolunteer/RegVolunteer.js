import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ManageContext } from '../../App';
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

const RegVolunteer = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [eventInfo, setEventInfo] = useState({
      username: '', 
      email: '', 
      date: '', 
      description: '', 
      eventname: '',
      image: ''
    }); 
    const [setEventSelect, user] = useContext(ManageContext);

    
    const onchangeUserName =(event)=> {
      setEventInfo({
        ...eventInfo,
        username: event.target.value,
      })
    }

    const onchangeEmail =(event)=> {
      setEventInfo({
        ...eventInfo,
        email: event.target.value,
      })
    }

    const onchangeDate =(event)=> {
      setEventInfo({
        ...eventInfo,
        date: event.target.value,
      })
    }

    const onchangeDes =(event)=> {
      setEventInfo({
        ...eventInfo,
        description: event.target.value,
      })
    }
    const RegSubmitValidity =(e) => {
      e.preventDefault();


      const ValidityMsg= []; 
      
      !eventInfo.username  && ValidityMsg.push("First Name Empty");
      !eventInfo.eventname  && ValidityMsg.push("Event Name Empty");
      !eventInfo.description  && ValidityMsg.push("Description Empty");
      !eventInfo.date  && ValidityMsg.push("Date Empty");

    //creatUser.lname ?  Lname.classList.remove("warning") : Lname.classList.add("warning");
      
      if(eventInfo.username && eventInfo.date && eventInfo.description && eventInfo.eventname){
          submitEvent();
          history.push("/user-event");
          console.log(true)
      }else {
          const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
          document.getElementById("warningMsg").innerHTML = mapping; 
          console.log(false);
      }

     }

    const submitEvent = () =>{

      fetch('http://localhost:4000/regEvent', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventInfo),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success' );
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
  }
    useEffect (()=> {
      setEventInfo({
        username: props.user.name,
        email: props.user.email, 
        eventname: props.selectedEvent,
        image: props.eventImg
      })
    },[])
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
            <div className="regWrap">
                <Link className="logo_2" to="/"><img  src={require('../Header/img/logo.png')}></img></Link>
                <div className="regForm fwidth">
                    <h2>Register as a Volunteer</h2>
                    <form className="formevent fwidth">
                        <input onBlur={onchangeUserName} type="text" placeholder="Full Name" value={eventInfo.username}></input>
                        <input type="text" className="disable" placeholder="Username or Email" value={eventInfo.email} disabled></input>
                        <TextField
                            onBlur={onchangeDate}
                            id="date"
                            type="date"
                            className="dateEvent"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <input onBlur={onchangeDes} type="text" placeholder="Description"></input>
                        <input value={eventInfo.eventname} className="disable" type="text" disabled></input>
                        <button onClick={RegSubmitValidity}>Registration</button>
                    </form>
                    <ul id='warningMsg'></ul>

              </div>
            </div>
            <div className="space fwidth"></div>
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegVolunteer;