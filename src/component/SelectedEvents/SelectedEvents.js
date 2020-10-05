import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

const SelectedEvents = (props) => {

  const deletEvent =(event) => {
    const parent = event.target.parentNode.parentNode;
    console.log(parent);
    fetch(`https://radiant-coast-19512.herokuapp.com/userEventDelete/${props.id}`, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => {
      if(res){
        parent.style.display = "none"; 
        console.log("I'm Parent : "+ parent); 
      }
    })
  }
    return (
            
            <div className="slEvent">
              <img src={props.image} />
    <div className="evtDetail"><h3>{props.event}</h3><p>{props.date}</p><button onClick={deletEvent}>Cancel</button></div>
            </div>
                         
    );
};

export default SelectedEvents;