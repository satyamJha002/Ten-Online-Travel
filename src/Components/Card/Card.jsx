import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Card = ({ pkg }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? pkg.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === pkg.images.length - 1 ? 0 : prev + 1));
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="travel-card">
      {pkg.featured && <span className="badge">Featured</span>}
      <div className="image-slider">
        {showMap ? (
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              pkg.location
            )}&output=embed`}
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        ) : (
          <img
            src={pkg.images[currentImage]}
            alt={pkg.title}
            className="card-image"
          />
        )}
        <button
          className="arrow left"
          onClick={handlePrevImage}
          disabled={showMap}
        >
          ❮
        </button>
        <button
          className="arrow right"
          onClick={handleNextImage}
          disabled={showMap}
        >
          ❯
        </button>
        <div className="map-icon-container">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="map-toggle-icon"
            onClick={toggleMap}
          />
        </div>
      </div>
      <h2 className="title">{pkg.title}</h2>
      <div className="card-details">
      {/* Left Section */}
      <div className="details-left">
        <p>
          <span><FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="map-toggle-icon"
        /></span>
          {pkg.location}
        </p>
        <p>
          <span>🕒</span>
          {pkg.duration}
        </p>
        <p>
          <span>👥</span>
          {pkg.people}
        </p>
        <p className="describe">
          {pkg.description}
        </p>
      </div>

      {/* Right Section */}
      <div className="details-right">
        {/* Price Section */}
        <div className="price-section">
          <span className="discount">{pkg.discount}</span>
          <span className="price">{pkg.price}</span>
          <span className="original-price">{pkg.originalPrice}</span>
        </div>
        {/* Departures Section */}
        <div className="departures">
          <p>Next Departure</p>
          <ul>
            {pkg.nextDepartures.map((date, index) => (
              <li key={index}>✔ {date}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      <div className="available-year">
      <button className="view-details-btn">View Details</button>
      <p>Available through out the year: <br/> 🗓️ Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec </p>
      </div>
    </div>
  );
};

export default Card;


