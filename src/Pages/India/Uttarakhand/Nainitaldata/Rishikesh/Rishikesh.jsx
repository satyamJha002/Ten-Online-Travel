import React, { useState } from "react";
import "./Rishikesh.css";
import { rishikeshcamping } from "../../../../../assets/Data/risihikesh";
import Card from "../../../../../Components/Card/Card";
import { useLocation } from "react-router-dom";

const Rishikesh = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");

  return (
    <div className="rishikesh">
      {/*Rishikesh */}
      <div className="rishikesh-div">
        <p className="rishikesh-destination"> Home {newUrl}</p>
        <h1 className="rishikesh-heading">Rishikesh</h1>
        <p className="rishikesh-content">
          <strong>
            <h1>
              A trip to Uttarakhand feels incomplete without a visit to
              Rishikesh.
            </h1>
          </strong>
          Rishikesh holds great significance as a Hindu pilgrimage town.
          Enclosed by the districts of Tehri Garhwal, Pauri Garhwal, and
          Haridwar, it is believed to be the place where Lord Rama performed
          penance for slaying Ravana, the king of Lanka. Whether it's yoga and
          meditation or thrilling activities like rafting and bungee jumping,
          Rishikesh offers countless experiences to explore.
          <strong>
            <h5>
              By law, Rishikesh is a vegetarian city and prohibits alcohol.
            </h5>
          </strong>
        </p>
      </div>
      <div className="App">
        {" "}
        <h2>Things to Do in Rishikesh:</h2>{" "}
        <ul className="things-to-do">
          {" "}
          <li>Neer Garh Waterfall</li> <li>Garud Chati Waterfall</li>{" "}
          <li>Phool Chatti Waterfall</li>{" "}
          <li className="highlight">White Water Rafting</li>{" "}
          <li>‘Maha Aarti’ at Triveni Ghat</li> <li>Visit Lakshman Jhula</li>{" "}
          <li>Visit Beatles Ashram</li>{" "}
          <li>Visit Cafes and interact with people all over the world</li>{" "}
        </ul>{" "}
      </div>

      <div className="camping">
        <h2>Family & Friends Tour</h2>
      </div>
      <div className="camping-div">
        {rishikeshcamping.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
        ))}
      </div>

      {/* 
                <div className="friendtour">
                    <h2>Friend &
                       Family tour
                    </h2>
                </div>
                <div className="friend-div">
                    {(rishikeshfriend || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>


                <div className="hiking">
                    <h2>Hiking</h2>
                </div>
                <div className="hiking-div">
                    {(rishikeshhiking || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>


                <div className="rafting">
                    <h2>River Rafting</h2>
                </div>
                <div className="rafting-div">
                    {(rishikeshrafting || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>   


                <div className="sports">
                    <h2>WaterSports</h2>
                </div>
                <div className="sports-div">
                    {(rishikeshwatersports || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>      */}
    </div>
  );
};

export default Rishikesh;
