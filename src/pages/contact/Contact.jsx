import React, { useState } from "react";
import "./contact.css";
import facultyData from "../council/CD";
// import img from "src/assests/"
import { db } from "../../Firebase/config";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import aditi from "../../assets/council_images/SC/jpeg-optimizer_Aditi_CEO.jpg";
import sheryl from "../../assets/council_images/SC/jpeg-optimizer_ChairPerson_Sheryl.jpg";
import anoushka from "../../assets/council_images/JC/Anoushka_Menon_secretary.jpg";
import gaurang from "../../assets/council_images/JC/GAURANG RANE.jpeg";
import veydant from "../../assets/council_images/SEs/Veydant.jpg";
import ishan from '../../assets/council_images/SEs/Ishan.jpg'

function Contact() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Basic form validation
    if (!name || !year || !branch || !contactNo || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
  
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(contactNo)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    try {
      const contactsCollectionRef = collection(db, "contacts");
  
      // Add a new document to the "contacts" collection
      const docRef = await addDoc(contactsCollectionRef, {
        name,
        year,
        branch,
        contactNo,
        email,
        message,
      });
  
      // console.log("Document written with ID: ", docRef.id);
      alert('Form Submitted succesfully!');
      // Reset form fields after submission
      setName("");
      setYear("");
      setBranch("");
      setContactNo("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  return (
    <>
      <div className="contact_body" style={{ marginTop: "30px" }}>
        <center>
          <p className="ieee_title">CONTACT US</p>
        </center>

        <div className="faculty">
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
                    <a
                      class="fa-solid fa-envelope"
                      style={{ marginTop: 10 }}
                      href="mailto:gresha.bhatia@ves.ac.in"
                    >
                      &nbsp; {faculty.email}
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faculty">
          <div className="main center" data-aos="zoom-in-up">
            <div className="box center">
              <img
                src={gaurang}
                alt=""
              />
              <div>
                <div className="user_name">Gaurang Rane</div>
                <p className="skill">Chairperson</p>
                <p style={{ marginTop: 10 }}>9867615388</p>
                <a
                  href="mailto:2021.gaurang.rane@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2021.gaurang.rane@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
            <div className="box center">
              <img
                src={anoushka}
                alt=""
              />
              <div>
                <div className="user_name">Anoushka Menon</div>
                <p className="skill">CEO</p>
                <p style={{ marginTop: 10 }}>7506570413 </p>
                <a
                  href="mailto:2021.anoushka.menon@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2021.anoushka.menon@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
            <div className="box center">
              <img
                src={veydant}
                alt=""
              />
              <div>
                <div className="user_name">Veydant Sharma</div>
                <p className="skill">Secretary</p>
                <p style={{ marginTop: 10 }}>9930731383</p>
                <a
                  href="mailto:2022.veydant.sharma@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2022.veydant.sharma@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
            <div className="box center">
              <img
                src={ishan}
                alt=""
              />
              <div>
                <div className="user_name">Ishan Joshi</div>
                <p className="skill">MEO</p>
                <p style={{ marginTop: 10 }}>9619358205 </p>
                <a
                  href="mailto:2022.ishan.joshi@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2022.ishan.joshi@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <center>
        <h2>
          <b>OR</b>
        </h2>
        <p className="ieee_title">EMAIL US</p>
      </center>
      <div className="contact-form">
  <div className="contact-in">
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.675987384604!2d72.88022558518108!3d19.045306994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1672162695749!5m2!1sen!2sin"
        width="100%"
        height="auto"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="contact-form">
      <h1>Send Message</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="contact-form-txt"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required  // Marking the field as required
        />
        <div className="contact-form-dropdown">
          <select
            name="year"
            id="year"
            className="contact-form-txt"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required  // Marking the field as required
          >
            <option value="" disabled selected>
              Year
            </option>
            <option value="BE">BE</option>
            <option value="TE">TE</option>
            <option value="SE">SE</option>
            <option value="FE">FE</option>
          </select>
          <select
            name="branch"
            id="branch"
            className="contact-form-txt"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required  // Marking the field as required
          >
            <option value="" disabled selected>
              Branch
            </option>
            <option value="CMPN">CMPN</option>
            <option value="INFT">INFT</option>
            <option value="AIDS">AIDS</option>
            <option value="ETRX">ETRX</option>
            <option value="EXTC">EXTC</option>
            <option value="INST">INST</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Contact No."
          className="contact-form-txt"
          name="contact"
          id="contact"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required  // Marking the field as required
        />
        <input
          type="email"
          placeholder="Email"
          className="contact-form-txt"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required  // Marking the field as required
        />
        <textarea
          placeholder="Message"
          className="contact-form-textarea"
          style={{ resize: "none" }}
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required  // Marking the field as required
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="contact-form-btn"
          onClick={handleSubmit}
        />
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <em>All fields are mandatory</em>
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default Contact;

{
  /* <div style="margin-top:30px ;">
        <center>
          <p class="ieee_title">CONTACT US</p>
        </center>

        <div class="cards center">
          <div class="card" style="visibility: hidden;"></div>
          <div class="card">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Gresha Bhatia</h3>
                  <span class="card__status">CMPN Department</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; gresha.bhatia@ves.ac.in
              </p>
            </div>
          </div>
          <div class="card">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Ashwini Sawant</h3>
                  <span class="card__status">EXTC Department</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; ashwini.sawant@ves.ac.in
              </p>
            </div>
          </div>
          <div class="card" style="visibility: hidden;"></div>
        </div>

        <div class="cards center">
          <div class="card">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Sheryl Bellary</h3>
                  <span class="card__status">Chairperson</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-phone"></i>&nbsp; 9869679027 <br />
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; 2020.sheryl.bellary@ves.ac.in
              </p>
            </div>
          </div>
          <div class="card center">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Aditi Bombe</h3>
                  <span class="card__status">CEO</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-phone"></i>&nbsp; 9987691789 <br />
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; 2020.aditi.bombe@ves.ac.in
              </p>
            </div>
          </div>
          <div class="card">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Anoushka Menon</h3>
                  <span class="card__status">Secretary</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-phone"></i>&nbsp; 7506570413 <br />
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; 2021.anoushka.menon@ves.ac.in
              </p>
            </div>
          </div>
          <div class="card">
            <img src="" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Gaurang Rane</h3>
                  <span class="card__status">MEO</span>
                </div>
              </div>
              <p class="card__description">
                <i class="fa-solid fa-phone"></i>&nbsp; 9867615388 <br />
                <i class="fa-solid fa-envelope" style="margin-top: 10px;"></i>
                &nbsp; 2021.gaurang.rane@ves.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <center>
        <h2>
          <b>OR</b>
        </h2>
        <p class="ieee_title">EMAIL US</p>
      </center>
      <div class="contact-in">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.675987384604!2d72.88022558518108!3d19.045306994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1672162695749!5m2!1sen!2sin"
            width="100%"
            height="auto"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contact-form">
          <h1>Send Message</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              class="contact-form-txt"
              name="name"
              id="name"
            />
            <div class="contact-form-dropdown">
              <select name="year" id="year" class="contact-form-txt">
                <option value="" name="year" selected>
                  Year
                </option>
                <option value="BE">BE</option>
                <option value="TE">TE</option>
                <option value="SE">SE</option>
                <option value="FE">FE</option>
              </select>
              <select name="branch" id="branch" class="contact-form-txt">
                <option value="" selected>
                  Branch
                </option>
                <option value="CMPN">CMPN</option>
                <option value="INFT">INFT</option>
                <option value="AIDS">AIDS</option>
                <option value="ETRX">ETRX</option>
                <option value="EXTC">EXTC</option>
                <option value="INST">INST</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Contact No."
              class="contact-form-txt"
              name="contact"
              id="contact"
            />
            <input
              type="email"
              placeholder="Email"
              class="contact-form-txt"
              name="email"
              id="email"
            />
            <textarea
              placeholder="Message"
              class="contact-form-textarea"
              style="resize:none;"
              name="message"
              id="message"
            ></textarea>
            <input
              type="submit"
              placeholder="Submit"
              class="contact-form-btn"
              onclick="sendMail()"
            />
          </form>
        </div>
      </div> */
}
