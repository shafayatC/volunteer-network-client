import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import {
    Link
  } from "react-router-dom";


  const googleLogin = ()=> {}
const Login = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <div className="loginWrap">
                        <Link className="logo_2" to="/"><img  src={require('../Header/img/logo.png')}></img></Link>
                        <div className="loginForm fwidth">
                            <h2>Login With</h2>
                            <button onClick={googleLogin} className="socialBtn">
                                <img src={require('./img/google.png')}></img>
                                <span>Continue with Google</span>
                            </button>
                            <p>Don't have account ? <span>Create and account</span></p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;