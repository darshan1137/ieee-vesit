import React, { useState, useEffect } from 'react';
import eventsData from "../../assets/workshops/workshops.js";
import "../workshops/workshops.css"
import { Link } from 'react-router-dom';

const Workshops = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsData);
    }, []);

    return (
        <div class="row">
            <div class="main-container">
                <p class="ieee_title">Workshops</p>
                <div class="container1">
                    {events.map(event => (
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
                                    <Link to={`/workshop/${encodeURIComponent(event.title)}`}>Know more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workshops;
