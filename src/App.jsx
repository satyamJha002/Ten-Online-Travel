import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/NavBar/ScrollToTop";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Dubai from "./Pages/International/Dubai/Dubai";
import Paragliding from "./Pages/Activities/Paragliding/Paragliding";
import RiverRafting from "./Pages/Activities/RiverRafting/RiverRafting";
import Hiking from "./Pages/Activities/Hiking/Hiking";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/international/dubai" element={<Dubai />} />
          <Route path="/activities/paragliding" element={<Paragliding />} />
          <Route path="/activities/RiverRafting" element={<RiverRafting />} />
          <Route path="/activities/Hiking" element={<Hiking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
