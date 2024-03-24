// Landing.js
import React, { useState } from "react";
import Home from "../home/Home";
import Preloader from "./Preloader";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {!isLoaded && <Preloader setIsLoaded={setIsLoaded} />}

      {isLoaded && <Navbar />}
      {isLoaded && <Home />}
      {isLoaded && <Footer />}
    </div>
  );
}

export default Landing;
