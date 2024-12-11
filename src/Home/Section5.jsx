import { Section5 as Section5Data } from "../assets/Data/Section5Data";
import Cart from "../Components/Cart/Cart";
import "./Section5.css";

const Section5 = () => {
  return (
    <>
      <div className="Section5Intro">
        <h1>Featured Trip</h1>
        <div className="Section5CardsContainer">
          {Section5Data.map((pkg) => (
            <Cart key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <button className="view-trip-btn">VIEW ALL TRIP</button>
      </div>
    </>
  );
};

export default Section5;
