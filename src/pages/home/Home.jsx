import React, { useState, useEffect } from "react";
import "./Home.css"; // Import CSS file
import vesitBuilding from "../../assets/home/vesit_new_building.png";
import DSC06356 from "../../assets/home/DSC06356.jpg";
import beTe from "../../assets/home/be_te.png";
import teGroup from "../../assets/home/te_group.png";
import vesitLogo from "../../assets/home/ves-logo.png";
import ieeeGlobal from "../../assets/home/ieee_global.png";
import ieeeVesit from "../../assets/home/ieee_vesit_black.png";
import juhiRev from "../../assets/home/testimonials/juhi_rev.jpeg";
import mansiRev from "../../assets/home/testimonials/mansi_rev.jpeg";
import vanshRev from "../../assets/home/testimonials/vansh_rev.jpeg";
import madhumitaRev from "../../assets/home/testimonials/madhumita_rev.jpeg";
import membershipDrive from "../../assets/home/membership_drive.jpg";
import upcomingPoster from "../../assets/home/upcoming_posters.png";
import Preloader from "../landing/Preloader";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    showSlides();
  }, [currentSlide]);

  const slides = [vesitBuilding, DSC06356, beTe, teGroup];

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
  };

  return (
    <div>
      <>
        <div>
          {/* Slider */}
          <div className="center">
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`mySlides fade${
                    index === currentSlide ? " active" : ""
                  }`}
                >
                  <img src={slide} style={{ width: "100%" }} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            {/* About Us */}
            <div className="about" data-aos="fade-up">
              <p className="ieee_title">ABOUT US</p>
              <div className="about-ieee">
                <div className="ieee_text">
                  <p className="ieee_head">
                    Vivekanand Education Society's Institute of Technology
                    (VESIT)
                  </p>
                  <p className="ieee-desc" align="justify">
                    Vivekanand Education Society’s Institute of Technology
                    (VESIT) was established in 1984, with the aim of providing
                    professional education in the field of Engineering. This
                    institute is affiliated to the University of Mumbai and
                    follows the rules and regulations laid down by government,
                    AICTE, and University for admission; 51% reserved for Sindhi
                    Linguistic minority and 49% through CAP test. The management
                    quota has been surrendered to DTE to make admission
                    centralized.
                  </p>
                </div>
                <img className="ieee-global-logo" src={vesitLogo} alt="" />
              </div>
              <hr className="about-ieee-line" />
              <div className="about-ieee">
                <div className="ieee_text">
                  <p className="ieee_head">IEEE International</p>
                  <p className="ieee-desc" align="justify">
                    The Institute of Electrical and Electronics Engineers (IEEE)
                    is a professional association for electronic engineering and
                    electrical engineering (and associated disciplines) with its
                    corporate office in New York City and its operations center
                    in Piscataway, New Jersey. The mission of the IEEE is
                    advancing technology for the benefit of humanity. The IEEE
                    was formed from the amalgamation of the American Institute
                    of Electrical Engineers and the Institute of Radio Engineers
                    in 1963.
                  </p>
                </div>
                <img className="ieee-global-logo" src={ieeeGlobal} alt="" />
              </div>
              <hr className="about-ieee-line" />
              <div className="about-ieee">
                <div className="ieee_text">
                  <p className="ieee_head">IEEE-VESIT</p>
                  <p className="ieee-desc" align="justify">
                    IEEE stands for Institute of Electrical and Electronics
                    Engineers. Here at IEEE-VESIT, we conduct many technical
                    workshops as well as fun events and seminars, maintaining
                    the balance between academics and co-curricular activities.
                    Being the perfect blend of hardware and software, IEEE-VESIT
                    covers a huge cloud of domains in which students can build
                    their career. The faculty and student council works
                    hand-in-hand and the legacy is carried forward. IEEE-VESIT
                    also boasts about international membership which allows
                    students to get guidance right from selecting the topic to
                    write a research paper on until the paper is published in
                    the international IEEE magazines. IEEE-VESIT is one umbrella
                    society that you require in your engineering life! Be it
                    workshops, seminars, fun events, placements, masters,
                    technical paper presentations, etc, IEEE-VESIT has it all!
                  </p>
                </div>
                <img className="ieee-global-logo" src={ieeeVesit} alt="" />
              </div>
            </div>

            {/* What we do */}
            <div className="what-we-do">
              <h1 className="ieee_title">OUR OBJECTIVES</h1>
              <div className="reviewers">
                <div className="small-container">
                  <div className="row">
                    <div className="col-3">
                      <p align="justify">
                        Workshops: IEEE-VESIT makes sure to cover all the
                        trending domains and conduct detailed workshops on them.
                        In the workshops, along with in-depth knowledge, a
                        project is made so that the participants also get
                        hands-on experience.
                      </p>
                    </div>
                    <div className="col-3">
                      <p align="justify">
                        Fun Events: IEEE-VESIT tries to maintain a balance
                        between academics and co-curricular activities. IEEE
                        Arcade, Online Treasure Hunt (OTH), Case Closed are some
                        of our most popular fun events.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p align="justify">
                        Technical Paper Presentation (TPP): Research papers help
                        you stand out from the crowd and give you an edge over
                        other candidates, be it placements or masters.
                        IEEE-VESIT helps you since the beginning to the end of
                        your paper writing journey.
                      </p>
                    </div>
                    <div className="col-3">
                      <p align="justify">
                        IEEE-VESIT is all you need to get through your
                        engineering life successfully yet have fun!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="upcoming-events">
              <h1 className="ieee_title">UPCOMING EVENTS</h1>
              <div className="upcoming-events-wrap">
                <img
                  className="event-images"
                  src={membershipDrive}
                  alt="Membership Drive"
                />
                <img
                  className="event-images"
                  src={upcomingPoster}
                  alt="Upcoming Poster"
                />
                <img
                  className="event-images"
                  src={upcomingPoster}
                  alt="Upcoming Poster"
                />
                <img
                  className="event-images"
                  src={upcomingPoster}
                  alt="Upcoming Poster"
                />
              </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
              <h1 className="ieee_title">TESTIMONIALS</h1>
              <div className="reviewers">
                <div className="small-container">
                  <div className="row-rev">
                    <div className="row">
                      <div id="row-rev-1">
                        <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <br />
                          <img src={juhiRev} alt="" />
                          <h3>Juhi Chhatlani</h3>
                          <h4>CMPN (2019 - 2023)</h4>
                          <p align="justify">
                            Being a member of IEEE Vesit was amazing I have
                            gained experience with the technical workshop
                            conducted by the council. International member ship
                            of IEEE have helped me in publishing my research
                            paper
                          </p>
                        </div>
                        <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <br />
                          <img src={mansiRev} alt="" />
                          <h3>Mansi Kasar</h3>
                          <h4>EXTC (2018 - 2022)</h4>
                          <p align="justify">
                            IEEE has no doubt been an important factor in my
                            growth. Since all the workshop conducted had gave me
                            insights and hands on experience into various
                            technology that help me to learn new things.
                          </p>
                        </div>
                      </div>
                      <div id="row-rev-1">
                        <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <br />
                          <img src={vanshRev} alt="" />
                          <h3>Vansh Pahuja</h3>
                          <h4>CMPN (2020 - 2024)</h4>
                          <p align="justify">
                            UI/UX and App development workshop that was
                            conducted by IEEE has helped me to know more about
                            these fields. Also all the council members helped me
                            if any doubt arises during workshops.
                          </p>
                        </div>
                        <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <br />
                          <img src={madhumitaRev} alt="" />
                          <h3>Madhumita Menon</h3>
                          <h4>EXTC (2018 - 2022)</h4>
                          <p align="justify">
                            I have been a part of the IEEE-VESIT family for 3
                            years and I am not exaggerating one bit when I say
                            that choosing to get into this council was the best
                            decision at the time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
