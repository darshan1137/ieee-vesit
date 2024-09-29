import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          IEEE - <span>VESIT</span>
        </h3>
        <p className="footer-links">
          <a href="/">Home</a>|<a href="/about">About Us</a>|
          <a href="/contact">Contact Us</a>
        </p>
        <p className="footer-company-name">
          Copyright © 2022 <strong>IEEE-VESIT</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <FontAwesomeIcon icon={faMapMarker} />
          <p>
            <span>
              <a href="https://goo.gl/maps/ZB7bSb3nF2v1z1mC9">
                Vivekanand Education Society's Institute Of Technology
                <br />
                Hashu Adwani Memorial Complex, Collector's Colony, <br />
                Chembur, Mumbai, Maharashtra 400074
              </a>
            </span>
          </p>
        </div>

        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>
            <span>
              <a href="tel:+919867615388">+91 9867615388</a> - Gaurang Rane
              (Chairperson)
            </span>
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <span>
              <a href="mailto:ieee.vesit@ves.ac.in">ieee.vesit@ves.ac.in</a>
            </span>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Council</span>
          <strong>IEEE-VESIT</strong> is an International Technical Society which
          stands for Institute of Electrical and Electronics Engineers.
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/ieee-vesit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/ieee_vesit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/ieeevesit/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
