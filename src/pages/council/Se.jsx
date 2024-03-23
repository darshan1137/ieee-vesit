import React from "react";
import "./Council.css";
import teamData from "./councilData";

function Se() {
  return (
    <div className="faculty">
      <div style={{ marginTop: "30px" }}>
        <h1 className="ieee_title">SE Coordinators</h1>
      </div>
      <div className="main center" data-aos="zoom-in-up">
        {teamData.se.map((member, index) => (
          <div className="box center" key={index}>
            <img src="" alt="" />
            <div>
              <div className="user_name">{member.name}</div>
              <p className="skill">{member.position}</p>
            </div>
            <div className="arr_container center">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="left_container off">
              <div className="icons">
                <a href={`mailto:${member.socialLinks.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
              <div className="cancel center">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Se;
