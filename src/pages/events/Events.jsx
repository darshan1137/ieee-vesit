import React, { useState, useEffect } from 'react';
import eventsData from "../../assets/Events/events.json";
import "../events/events.css"
//  <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/events.css')}}"></link> 
const Workshops = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsData);
    }, []);

    return (
        // <div>
        //     <h2>Events</h2>
        //     {events.map(event => (
        //         <div key={event.title}>
        //             <h3>{event.title}</h3>
        //             <img src={event.image_path} alt={event.title} />
        //             <p>{event.description}</p>
        //         </div>
        //     ))}
        // </div>

        <div class="row">
  <div class="main-container">
    <p class="ieee_title">Events</p>
    
     <div class="container1">
     {events.map(event =>(
      <div key={event.title}>
      <div class="card">
        <div class="imgBx">
        <img src={event.image_path} alt={event.title} />
        </div>
        <div class="contentBx">
            <h3>{event.title}</h3>
            <h4>{event.date}</h4>
          <div class="size">
          <h2>{event.subtitle}</h2>
          </div>
          <div class="color description-txt">
          <p>{event.description}</p>
          </div>
        </div>
      </div>
      </div>))}
    </div>
    </div>
    </div>

    );
};

export default Workshops;
