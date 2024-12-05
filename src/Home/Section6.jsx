import { Section6 as Section6Data } from "../assets/Data/Section6Data";
import Cart from "../Components/Cart/Cart";
import "./Section6.css";

const Section6 = () => {
  return (
    <>
      <div className="Section6Intro">
        <h1>Deals and Discounts</h1>
        {/* <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div> */}
        <div className="Section6CardsContainer">
          {Section6Data.map((pkg) => (
            <Cart key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <button class="view-trip-btn">VIEW ALL TRIP</button>
      </div>
    </>
  );
};

export default Section6;
