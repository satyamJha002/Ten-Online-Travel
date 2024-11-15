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
            title="Google Map"></iframe>
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
          disabled={showMap}>
          ❮
        </button>
        <button
          className="arrow right"
          onClick={handleNextImage}
          disabled={showMap}>
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
        <p>
          <span>📍</span>
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
        <div className="price-section">
          <span className="discount">{pkg.discount}</span>
          <span className="price">{pkg.price}</span>
          <span className="original-price">{pkg.originalPrice}</span>
        </div>
        <p>Next Departure</p>
        <ul className="departures">
          {pkg.nextDepartures.map((date, index) => (
            <li key={index}>✔ {date}</li>
          ))}
        </ul>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default Card;
