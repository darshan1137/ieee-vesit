import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events";
import Workshops from "./pages/workshops/Workshops";
import Magazines from "./pages/magazines/Magazines";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Council from "./pages/council/Council";
import Developers from "./pages/developers/Developers";
import Description from "./pages/events/Description";
import Wdescription from "./pages/workshops/Description_workshop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/council"
          element={
            <WithNavbarAndFooter>
              <Council />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/contact"
          element={
            <WithNavbarAndFooter>
              <Contact />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/developers"
          element={
            <WithNavbarAndFooter>
              <Developers />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/events"
          element={
            <WithNavbarAndFooter>
              <Events />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/workshops"
          element={
            <WithNavbarAndFooter>
              <Workshops />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/magazines"
          element={
            <WithNavbarAndFooter>
              <Magazines />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/event/:title"
          element={
            <WithNavbarAndFooter>
              <Description />
            </WithNavbarAndFooter>
          }
        />
        <Route
          path="/workshop/:title"
          element={
            <WithNavbarAndFooter>
              <Wdescription />
            </WithNavbarAndFooter>
          }
        />

        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

function WithNavbarAndFooter({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default App;
