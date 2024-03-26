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
      <h2>{event.title}</h2>
      <h3>{event.subtitle}</h3>
      <p>Date: {event.date}</p>
      <img src={event.image_path} alt={event.title} />
      <p>Description: {event.description}</p>
      <p>Participants: {event.Participants}</p>
      
    </div>
  );
};

export default Description_workshop;
