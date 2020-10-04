import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

const SelectedEvents = () => {
    return (
        <div>
            
           <Container>
                <Row>
                    <Col>
                      <div className="slEventsWrap fwidth">
                          <div className="slEvent">
                            <img src={require('./img/extraVolunteer.png')} />
                            <div className="evtDetail"><h3>Humanity More</h3><p>29 sep, 2020</p><button>Cancel</button></div>
                          </div>
                          
                          <div className="slEvent">
                            <img src={require('./img/extraVolunteer.png')} />
                            <div className="evtDetail"><h3>Humanity More</h3><p>29 sep, 2020</p><button>Cancel</button></div>
                          </div>
                          
                          <div className="slEvent">
                            <img src={require('./img/extraVolunteer.png')} />
                            <div className="evtDetail"><h3>Humanity More</h3><p>29 sep, 2020</p><button>Cancel</button></div>
                          </div>
                          
                          <div className="slEvent">
                            <img src={require('./img/extraVolunteer.png')} />
                            <div className="evtDetail"><h3>Humanity More</h3><p>29 sep, 2020</p><button>Cancel</button></div>
                          </div>
                      </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default SelectedEvents;