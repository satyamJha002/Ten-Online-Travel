import { Link } from "react-router-dom";
import { Section6 as Section6Data } from "../assets/Data/Section6Data";
import Cart from "../Components/Cart/Cart";
import "./Section6.css";

const Section6 = () => {
  return (
    <>
      <div className="Section6Intro">
        <h1>Deals and Discounts</h1>
        <div className="Section6CardsContainer">
          {Section6Data.map((pkg) => (
            <Cart key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <Link to="/international">
          <button className="view-trip-btn">VIEW ALL TRIP</button>
        </Link>
      </div>
    </>
  );
};

export default Section6;
