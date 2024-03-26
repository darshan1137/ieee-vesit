// EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import details from '../../assets/Events/eventdetails'; // Assuming 'details' is in the correct path

const EventDetails = () => {
  const { title } = useParams();
  const event = details.find(event => event.title === title);

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <h3>{event.subtitle}</h3>
      <p>Date: {event.date}</p>
      <img src={event.image_path} alt={event.title} />
      <p>Description: {event.description}</p>
      <p>Participants: {event.Participants}</p>
      <h4>Winners:</h4>
      <ul>
        {event.Winners.map((winner, index) => (
          <li key={index}>{winner}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
