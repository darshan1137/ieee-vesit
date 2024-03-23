import React from "react";
import "./Council.css";
import teamData from "./councilData";

function Be() {
  return (
    <div className="faculty">
      <div style={{ marginTop: "30px" }}>
        <h1 className="ieee_title">Senior Council</h1>
      </div>
      <div className="main center" data-aos="zoom-in-up">
        {teamData.be.map((member, index) => (
          <div className="box center" key={index}>
            <div className="img-container">
              {member.path && (
                <img className="img-tag" src={member.path} alt="" />
              )}
            </div>

            <div>
              <div className="user_name">{member.name}</div>
              <p className="skill">{member.position}</p>
            </div>
            <div className="arr_container center">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="left_container off">
              {member.socialLinks && member.socialLinks.email && (
                <div className="icons">
                  <a href={`mailto:${member.socialLinks.email}`}>
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              )}
              <div className="cancel center">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        ))}
        {teamData.se.length === 0 && <div>No SE Coordinators Found</div>}
      </div>
    </div>
  );
}

export default Be;
