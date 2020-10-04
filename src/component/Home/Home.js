import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import Events from '../Events/Events';


const Home = () => {
    return (
        <div>
           <Container>
                <Row>
                    <Col>
                      <div className="homeWrapper fwidth">
                        <h1 className="hmTitle fwidth">I grow by helping people in need.</h1>
                        <div className="searchWrapper fwidth">
                            <div className="searchBox">
                                <input type="text" placeholder="Search"></input>
                                <button>Search</button>
                            </div>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container> 
            <Events></Events>
        </div>
    );
};

export default Home;