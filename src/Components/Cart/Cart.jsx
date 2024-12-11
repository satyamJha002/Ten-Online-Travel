/* eslint-disable react/prop-types */
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ pkg, newUrl }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMap, setShowMap] = useState(false);

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
        <div className="map-icon-container">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="map-toggle-icon"
            onClick={toggleMap}
          />
        </div>
      </div>
      <div className="titleContainer">
        <h2 className="title">{pkg.title}</h2>
      </div>
      <div className="card-details">
        {/* Left Section */}
        <div className="details-left">
          <p className="icon-map">
            <span>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="map-toggle-icon"
              />
            </span>
            {pkg.location}
          </p>
          <p className="icon-duration">
            <span>
              <FontAwesomeIcon icon={faClock} className="icon" />
            </span>
            {pkg.duration}
          </p>
        </div>
      </div>
      <div className="available-year">
        <Link to={`${pkg.route}`} className="view-details-btn">
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
