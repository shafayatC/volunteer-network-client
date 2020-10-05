import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import fire,{provider} from '../../Fire'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { ManageContext } from '../../App';



const Login = () => {

    let history = useHistory();
    let location = useLocation();
  
    const [setEventSelect, user, setUser] = useContext(ManageContext);
    let { from } = location.state || { from: { pathname: "/" } };

    const googleLogin =() => {
        fire.auth().signInWithPopup(provider).then(result => {
            var token = result.credential.accessToken;
            var user = result.user;
            const {displayName, email} = user; 
            setUser({
                name : displayName,
                email: email,
            });
            history.replace(from);
            console.log(user); 
    
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log('error \n'+ error)
          });
          
    }
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