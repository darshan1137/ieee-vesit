import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events"; 
import Workshops from "./pages/workshops/Workshops"; 
import Magazines from "./pages/magazines/Magazines";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/magazines" element={<Magazines />} />
         
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
