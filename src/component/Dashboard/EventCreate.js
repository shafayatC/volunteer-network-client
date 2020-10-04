import React, { useEffect, useState } from 'react';

const EventCreate = () => {

    const [vlEvent, setVlEvent] = useState();

    const onchangeEventName =(event)=> {
        setVlEvent(event.target.value);
    }
    const submitEvent = (e) =>{
        e.preventDefault();

        const data = { username: 'example' };

        fetch('http://localhost:4000/addEvent', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
    }
    return (
        <div>
        <div className="eventForm">
            <p>Event Name : {vlEvent}</p>
            <input onChange={onchangeEventName} type="text"></input>
            <button onClick={submitEvent}>Submit</button>
        </div>
        </div>
    );
};

export default EventCreate;