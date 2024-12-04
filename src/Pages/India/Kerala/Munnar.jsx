import React, { useState } from "react";
import {
  munnarOtherTrips,
  munnarsightseeing,
  travelPackage as munnar,
} from "../../../assets/Data/munnar";
import Card from "../../../Components/Card/Card";
import "./Munnar.css";
import { useLocation } from "react-router-dom";

const Munnar = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="munnar-intro">
        <p className="munnar-destination"> Home {newUrl}</p>

        <h1>Munnar</h1>
        <div className="munnarInfo">
          <p>
            Munnar, a picturesque hill station in Kerala, South India, is just
            110 km from Cochin International Airport. Located 6,000 feet above
            sea level, it is renowned for its cool climate, scenic landscapes,
            and sprawling tea plantations. Visitors are enchanted by Munnar’s
            tranquility and natural beauty. Treehouses, a popular attraction,
            provide a unique stay amid lush greenery, offering a perfect retreat
            for those seeking relaxation. Munnar's highlights include National
            Parks, ancient churches, serene lakes, dams, temples, and vibrant
            tea gardens. With its echo points, waterfalls, and rich flora and
            fauna, Munnar is a haven for nature lovers and a memorable getaway.
          </p>
        </div>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>

        <div className="munnarCardsContainer">
          {(munnar || []).map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Sightseeing</h2>
        </div>
        <div className="sightseeingCardsContainer">
          {(munnarsightseeing || []).map((pkg) => (
            <Card
              key={pkg.id}
              pkg={pkg}
              locationURL={locationURL + "/munnarsightseeing"}
            />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Other Trips</h2>
        </div>
        <div className="otherCardsContainer">
          {(munnarOtherTrips || []).map((pkg) => (
            <Card
              key={pkg.id}
              pkg={pkg}
              locationURL={locationURL + "/munnarothertrips"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Munnar;
