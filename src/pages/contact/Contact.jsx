import React, { useState } from "react";
import "./contact.css";
import facultyData from "../council/CD";
import { db } from "../../Firebase/config";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

function Contact() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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

      console.log("Document written with ID: ", docRef.id);
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
      <div className="contact_body"style={{ marginTop: "30px" }}>
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
                src="src/assets/council_images/SC/jpeg-optimizer_ChairPerson_Sheryl.jpg"
                alt=""
              />
              <div>
                <div className="user_name">Sheryl Bellary</div>
                <p className="skill">Chairperson</p>
                <p style={{ marginTop: 10 }}>9869679027</p>
                <a
                  href="mailto:2020.sheryl.bellary@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2020.sheryl.bellary@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
            <div className="box center">
              <img
                src="src/assets/council_images/SC/jpeg-optimizer_Aditi_CEO.jpg"
                alt=""
              />
              <div>
                <div className="user_name">Aditi Bombe</div>
                <p className="skill">CEO</p>
                <p style={{ marginTop: 10 }}>9987691789 </p>
                <a
                  href="mailto:2020.aditi.bombe@ves.ac.in"
                  class="fa-solid fa-envelope"
                  style={{ marginTop: 10 }}
                >
                  2020.aditi.bombe@ves.ac.in
                </a>
                &nbsp;
                <br />
              </div>
            </div>
            <div className="box center">
              <img src="" alt="" />
              <div>
                <div className="user_name">Anoushka Menon</div>
                <p className="skill">Secretary</p>
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
              <img src="" alt="" />
              <div>
                <div className="user_name">Gaurang Rane</div>
                <p className="skill">MEO</p>
                <p style={{ marginTop: 10 }}>9867615388 </p>
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
            />
            <div className="contact-form-dropdown">
              <select
                name="year"
                id="year"
                className="contact-form-txt"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="" name="year" selected>
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
              >
                <option value="">Branch</option>
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
              className="contact-form-txt"
              name="contact"
              id="contact"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-form-txt"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="contact-form-textarea"
              style={{ resize: "none" }}
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="contact-form-btn"
              onClick={handleSubmit}
            />
          </form>
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
