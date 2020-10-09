import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import Events from '../Events/Events';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [eventList, setEventList] = useState([]);

    useEffect(()=>{

        fetch("https://radiant-coast-19512.herokuapp.com/eventList")
        .then(res => res.json())
        .then(data => setEventList(data))

    },[])

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
            
           <Container>
                <Row>
                    <Col>
                    {eventList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "150px"}}><CircularProgress /></div>}
                      <div className="eventWrap fwidth">
                          {eventList.map(data =><Events name={data.name} image={data.image}></Events>)}     
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default Home;