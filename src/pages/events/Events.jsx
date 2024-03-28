// Workshops.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../../assets/Events/eventsData';
import '../events/events.css';

const Workshops = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div class="row">
      <div class="main-container">
        <p class="ieee_title">Events</p>

        <div class="container1">
        
          {events.map(event => (
            <div key={event.title}>
              <Link to={`/event/${encodeURIComponent(event.title)}`}>
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
              </Link>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Workshops;
