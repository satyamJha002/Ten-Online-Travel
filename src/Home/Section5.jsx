import { Section5 as Section5Data } from "../assets/Data/Section5Data";
import Cart from "../Components/Cart/Cart";
import "./Section5.css";
import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/india");
  };
  return (
    <>
      <div className="Section5Intro">
        <h1>Featured Trip</h1>
        <div className="Section5CardsContainer">
          {Section5Data.map((pkg) => (
            <Cart key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <button className="view-trip-btn " onClick={handleViewAllClick}>
          VIEW ALL TRIP
        </button>
      </div>
    </>
  );
};

export default Section5;
