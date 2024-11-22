import { useParams } from "react-router-dom";
import { dubai } from "../../assets/Data/dubai";
import { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./detail.css";

const Details = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  const navRef = useRef(null); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [navTop, setNavTop] = useState(0);

  const { id } = useParams();

  const filteredObjects = dubai.filter((obj) => obj.id === Number(id));
  const pkg = filteredObjects.length > 0 ? filteredObjects[0] : null;

  const handlePrevImage = () => {
    if (pkg?.images) {
      setCurrentImage((prev) =>
        prev === 0 ? pkg.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (pkg?.images) {
      setCurrentImage((prev) =>
        prev === pkg.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const handleScroll = () => {
    const nav = navRef.current;
    const scrollY = window.scrollY;

    
    if (scrollY > navTop && scrollY > lastScrollY) {
      setIsSticky(true); 
    } else if (scrollY < lastScrollY && scrollY <= navTop) {
      setIsSticky(false); 
    }

    setLastScrollY(scrollY); 
  };

  useEffect(() => {
    setNavTop(navRef.current.offsetTop); 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!pkg) {
    return <div>Package not found</div>; 
  }

  return (
    <div className="details-container">
      <div className="detail-right">
        <div className="detail-title">
          <h1>{pkg.title}</h1>
          <div>
            <div className="no-days">
              <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                <h2 className="text-white text-3xl">{pkg.noOfDays}</h2>
              </div>
              <span>Days</span>
            </div>
          </div>
        </div>
        <div className="details-images-slider">
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
              className="details-card-image"
            />
          )}
          <button
            className="details-arrow left"
            onClick={handlePrevImage}
            disabled={showMap}>
            ❮
          </button>
          <button
            className="details-arrow right"
            onClick={handleNextImage}
            disabled={showMap}>
            ❯
          </button>
        </div>
        <div className="detail-description">
          <p>{pkg.detailDescription}</p>
          <br />
          <p>{pkg.subDescription}</p>
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
          <ul
            ref={navRef}
            className={`detail-nav ${isSticky ? "fixed" : ""}`}>
            <li>
              <a href={"#overView"}>OverView</a>
            </li>
            <li>
              <a href={"#Itinerary"}>Itinerary</a>
            </li>
            <li>
              <a href={"#Inclusions"}>Inclusions</a>
            </li>
            <li>
              <a href={"#Hotels"}>Hotels</a>
            </li>
          </ul>
        </div>
        <div id="overView" className="detail-overview">
          <h1>Overview</h1>
          <p>{pkg.overView}</p>
        </div>
        <div id="Itinerary" className="detail-itinerary">
          <h1>Itinerary</h1>
          <div className="itinerary-container">
            {pkg.qna.map((ele, index) => (
              <div key={index} className="qna-container">
                <div className="question">
                  <h2>{ele.question1}</h2>
                </div>
                <div className="answer">
                  <p>{ele.answer1} </p>
                </div>
                <div className="question">
                  <h2>{ele.question2}</h2>
                </div>
                <div className="answer">
                  <p>{ele.answer2} </p>
                </div>
                <div className="question">
                  <h2>{ele.question3}</h2>
                </div>
                <div className="answer">
                  <p>{ele.answer3}</p>
                </div>
                <div className="question">
                  <h2>{ele.question4}</h2>
                </div>
                <div className="answer">
                  <p>{ele.answer4} </p>
                </div>
                <div className="question">
                  <h2>{ele.question5}</h2>
                </div>
                <div className="answer">
                  <p>{ele.answer5} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="Inclusions" className="inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="inclusions">
            {pkg.packageInclusion.map((inc, index) => (
              <div key={index} className="inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="exclusion-container">
          <h2>Package Exclusion</h2>
          {pkg.packageExclusion.map((exc, index) => (
            <div key={index}>{exc}</div>
          ))}
        </div>
      </div>
      <div className="detail-left">
        <div className="detail-price-container">
          <div className="detail-discount">
            <h1>{pkg.discount}</h1>
          </div>
          <div className="originalPrice">
            <span className="from">From</span>
            <span>
              <del>{pkg.originalPrice}</del>
            </span>
          </div>
          <div className="finalPrice">
            <h1>{pkg.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="availableBtn">
            <button>Check Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
