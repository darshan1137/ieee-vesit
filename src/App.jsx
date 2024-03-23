import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events"; 
import Workshops from "./pages/workshops/Workshops"; 
import Magazines from "./pages/magazines/Magazines";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Council from './pages/council/Council';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
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
