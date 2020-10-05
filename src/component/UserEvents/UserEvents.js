import React, { useEffect, useState } from 'react';
import SelectedEvents from '../SelectedEvents/SelectedEvents';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UserEvents = (props) => {
    const [eventList, setEventList] =  useState([]); 


    useEffect(()=>{
        fetch(`http://localhost:4000/userEvent/${props.user.email}`)
        .then(res => res.json())
        .then(data => setEventList(data))

    },[])

    return (
        <div>
            
           <Container>
                <Row>
                    <Col>
                      <div className="slEventsWrap fwidth">
                            {eventList.map(data =><SelectedEvents id={data._id} image={data.image} event={data.eventname} date={data.date}></SelectedEvents> )}
                         </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default UserEvents;