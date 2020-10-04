import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'


const Events = () => {
    return (
        <div>
            
           <Container>
                <Row>
                    <Col>
                      <div className="eventWrap fwidth">
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>

                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>

                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                        <div className="event"><img src={require('./img/babySit.png')} /><button>Food Charity</button></div>
                    </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default Events;