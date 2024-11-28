import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/NavBar/ScrollToTop";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Dubai from "./Pages/International/Dubai/Dubai";
import Bali from "./Pages/International/Bali/Bali";
import Darjeeling from "./Pages/India/Darjeeling/Darjeeling";
import Malaysia from "./Pages/International/Malaysia/Malaysia";
import MalaysiaDetailsPage from "./Pages/International/Malaysia/MalaysiaDetails/MalaysiaDetailsPage";
import Paragliding from "./Pages/Activities/Paragliding/Paragliding";
import ParaglidingDetails from "./Pages/Activities/Paragliding/ParaglidingDetails/ParaglidingDetails";
import RiverRafting from "./Pages/Activities/RiverRafting/RiverRafting";
import Hiking from "./Pages/Activities/Hiking/Hiking";
import Termpage from "./Components/Footer/FooterLink/Termpage";
import DocumentVisa from "./Components/Footer/FooterLink/DocumentVisa";
import PrivacyPolicy from "./Components/Footer/FooterLink/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import Kashmir from "./Pages/India/Kashmir/Kashmir";
import Ladakh from "./Pages/India/Ladakh/Ladakh";
import Review from "./Pages/Review/Review";
import AndamanTour from "./Pages/India/AndamanTour/AndamanTour";
import Goa from "./Pages/India/Goa/Goa";
import Sikkim from "./Pages/India/Sikkim/Sikkim";
import Kasol from "./Pages/India/Himachal/Kasol";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Thailand from "./Pages/International/Thailand/Thailand";
import ThailandDetailsPage from "./Pages/International/Thailand/ThailandDetails/ThailandDetailsPage";
import Singapore from "./Pages/International/Singapore/Singapore";
import Details from "./Pages/International/Dubai/DetailsPage/Details";
import Maldives from "./Pages/International/Maldives/Maldives";
import MaldivesDetails from "./Pages/International/Maldives/DetailsPage/MaldivesDetails";
import Ooty from "./Pages/India/TamilNadu/Ooty/Ooty";
import Naintal from "./Pages/India/Uttarakhand/Nainitaldata/Naintal";
import Kodaikanal from "./Pages/India/TamilNadu/Kodaikanal/Kodaikanal";
import Munnar from "./Pages/India/Kerala/Munnar";
import Rishikesh from "./Pages/India/Uttarakhand/Nainitaldata/Rishikesh/Rishikesh";
import RiverRaftingDetails from "./Pages/Activities/RiverRafting/RiDetails/RiDetails";
import HikingDetails from "./Pages/Activities/Hiking/DetailsPage/HikingDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/international/dubai" element={<Dubai />} />
          <Route path="/international/malaysia" element={<Malaysia />} />
          <Route
            path="/international/malaysia/trip/:id"
            element={<MalaysiaDetailsPage />}
          />
          <Route path="/international/maldives" element={<Maldives />} />
          <Route path="/international/bali" element={<Bali />} />
          <Route path="/international/thailand" element={<Thailand />} />
          <Route
            path="/international/thailand/trip/:id"
            element={<ThailandDetailsPage />}
          />
          <Route path="/international/singapore" element={<Singapore />} />
          <Route path="/:id/:id/trip/:id" element={<Details />} />
          <Route
            path="/international/maldives/trip/:id"
            element={<MaldivesDetails />}
          />

          <Route path="/andaman-tour" element={<AndamanTour />} />
          <Route path="/india/goa" element={<Goa />} />
          <Route path="/india/sikkim" element={<Sikkim />} />
          <Route path="/india/darjeeling" element={<Darjeeling />} />
          <Route path="/india/kashmir" element={<Kashmir />} />
          <Route path="/india/ladakh" element={<Ladakh />} />
          <Route path="/india/tamilnadu/Ooty" element={<Ooty />} />
          <Route path="/india/tamilnadu/Kodaikanal" element={<Kodaikanal />} />
          <Route path="/munnar" element={<Munnar />} />
          <Route path="/india/uttarakhand/nainital" element={<Naintal />} />
          <Route path="/india/uttarakhand/rishikesh" element={<Rishikesh />} />
          <Route path="/activities/paragliding" element={<Paragliding />} />
          <Route
            path="/activities/paragliding/trip/:id"
            element={<ParaglidingDetails />}
          />

          <Route path="/activities/riverrafting" element={<RiverRafting />} />
          <Route
            path="/activities/riverrafting/trip/:id"
            element={<RiverRaftingDetails />}
          />
          <Route path="/activities/Hiking" element={<Hiking />} />
          <Route
            path="/activities/Hiking/trip/:id"
            element={<HikingDetails />}
          />
          <Route path="/Termpage" element={<Termpage />} />
          <Route path="/DocumentVisa" element={<DocumentVisa />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/kasol" element={<Kasol />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
