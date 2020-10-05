import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import {
    Link
  } from "react-router-dom";
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

const RegVolunteer = () => {
    const classes = useStyles();

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
                        <input type="text" placeholder="Full Name"></input>
                        <input type="text" placeholder="Username or Email"></input>
                        <TextField
                            id="date"
                            type="date"
                            className="dateEvent"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <input type="text" placeholder="Description"></input>
                        <input className="disable" type="text" placeholder="Organize books at the library" disabled></input>
                        <button>Registration</button>
                    </form>
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