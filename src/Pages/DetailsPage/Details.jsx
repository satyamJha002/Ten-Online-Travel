import "./detail.css";
import { useParams } from "react-router-dom";
import { dubai } from "../../assets/Data/dubai";
import { useState } from "react";
import { Link } from "react-router-dom";
const Details = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { id } = useParams();

  const filteredObjects = dubai.filter((obj) => obj.id === Number(id));
  console.log(filteredObjects);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      {filteredObjects.map((item, index) => (
        <div key={index} className="details-container">
          <div className="detail-right">
            <div className="detail-title">
              <h1>{item.title}</h1>
              <span>date</span>
            </div>
            <div className="detail-image-slider">
              <img
                src={item.images[currentImage]}
                alt={item.title}
                className="card-image"
              />

              <button className="arrow left" onClick={handlePrevImage}></button>
              <button
                className="arrow right"
                onClick={handleNextImage}></button>
            </div>
            <div className="detail-description">
              <p>{item.detailDescription} </p>
              <br />
              <p>{item.subDescription}</p>
            </div>
            <div className="info-details">
              <div>
                <p>Transport</p>
                <h1>SIC</h1>
              </div>
              <div>
                <p>Meals</p>
                <h1>Breakfast</h1>
              </div>
            </div>
            <div>
              <ul className="detail-nav">
                <li>
                  <a href={"#overView"}>OverView</a>
                </li>
                <li>
                  <a href={"#Itinerary"}>Itinerary</a>
                </li>
                <li>
                  <Link>Inclusions</Link>
                </li>
                <li>
                  <Link>Hotels</Link>
                </li>
              </ul>
            </div>
            <div id="overView" className="detail-overview">
              <h1>Overview</h1>
              <p>
                Flaunting its glittering infrastructure amid the glorious
                Arabian desert, the city of Dubai was once known to be a barren
                land. Today, this man-made miracle is filled with shimmering
                skyscrapers, fancy hotels, shopping malls and restaurants. Burj
                Khalifa – the tallest manmade building, Dubai Fountain with jets
                and lights choreographed to music, Atlantis, the Palm and an
                aquarium resort are among the top tourist destinations in Dubai.
                With the biggest population of all the seven emirates and the
                second largest in size, Dubai will overwhelm you with its
                amalgamation of futuristic marvel and ancient Arabian
                traditions.
              </p>
            </div>
            <div id="Itinerary" className="detail-itinerary">
              <h1>Itinerary</h1>
            </div>
          </div>
          <div className="detail-left"></div>
        </div>
      ))}
    </>
  );
};

export default Details;
