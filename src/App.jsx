import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <><Navbar/>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
