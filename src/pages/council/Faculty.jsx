import React, { useEffect } from "react";
import './Council.css';
import facultyData from "./CD";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Faculty = () => {
  useEffect(() => {
    const clc = document.querySelectorAll(".cancel");
    const arr = document.querySelectorAll(".arr_container");
    const left_container = document.querySelectorAll(".left_container");

    const handleClick = (i) => {
      arr[i].classList.toggle("active_arr");
      left_container[i].classList.toggle("off");
      left_container[i].classList.toggle("active");
    };

    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", () => handleClick(i));
      clc[i].addEventListener("click", () => handleClick(i));
    }

    return () => {
      // Clean up event listeners when component unmounts
      for (let i = 0; i < arr.length; i++) {
        arr[i].removeEventListener("click", () => handleClick(i));
        clc[i].removeEventListener("click", () => handleClick(i));
      }
    };
  }, []);
  
  return (
    <div className="faculty">
      <div style={{ marginTop: "30px" }}>
        <h1 className="ieee_title">Faculty Incharge</h1>
      </div>
      <div className="main center" data-aos="zoom-in-up">
        {facultyData.faculty.map((faculty, index) => (
          <div className="box center" key={index}>
            <img src={faculty.image} alt="" />
            <div>
              <div className="user_name">{faculty.name}</div>
              <p className="skill">
                {faculty.position}
                <br />
                {faculty.department} Department
              </p>
            </div>
            <div className="arr_container center">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="left_container off">
              <div className="icons">
                <a href={`mailto:${faculty.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="cancel center" onClick={() => handleClick(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
