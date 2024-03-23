import React from "react";

function Home() {
  return (
    <div>
      <link rel="stylesheet" href="/static/css/home/home.css" />
      <div className="center">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img
              src="/static/images/home/vesit_new_building.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="mySlides fade">
            <img
              src="/static/images/home/DSC06356.jpg"
              style={{ width: "100%" }}
            />
          </div>
          <div className="mySlides fade">
            <img
              src="/static/images/home/be_te.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="mySlides fade">
            <img
              src="/static/images/home/te_group.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about" data-aos="fade-up">
          <p className="ieee_title">ABOUT US</p>
          <div className="about-ieee">
            <div className="ieee_text">
              <p className="ieee_head">
                Vivekanand Education Society's Institute of Technology (VESIT)
              </p>
              <p className="ieee-desc" align="justify">
                Vivekanand Education Society’s Institute of Technology (VESIT)
                was established in 1984, with the aim of providing professional
                education in the field of Engineering. This institute is
                affiliated to the University of Mumbai and follows the rules and
                regulations laid down by government, AICTE, and University for
                admission; 51% reserved for Sindhi Linguistic minority and 49%
                through CAP test. The management quota has been surrendered to
                DTE to make admission centralized.
              </p>
            </div>
            <img
              className="ieee-global-logo"
              src="/static/images/home/ves-logo.png"
              alt=""
            />
          </div>
          {/* Remaining content omitted for brevity */}
        </div>
      </div>
      <script src="/static/js/home/slider.js"></script>
    </div>
  );
}

export default Home;
