// EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import details from '../../assets/workshops/details'; // Assuming 'details' is in the correct path

const Description_workshop = () => {
  const { title } = useParams();
  const event = details.find(event => event.title === title);
  console.log(event)

  if (!event) return <div>Event not found</div>;

  return (
    <div>
    <div className="m">
    <div className="title">
    <h2>{event.title}</h2>
    {/* </div>
    <div className="st"> */}
    <h3>{event.subtitle}</h3>
    {/* </div>
    <div className="date"> */}
    <p>Date: {event.date}</p>
    </div>
    <div className="image">
    <img src={event.image_path} alt={event.title} />
    </div><div className="desc">
    <p>Description: {event.description}</p>
    </div><div className="partcipants">
    <p>Participants: {event.Participants}</p>
    
    </div>
  </div>
  </div>
  );
};

export default Description_workshop;
