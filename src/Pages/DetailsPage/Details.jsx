import { useParams } from "react-router-dom";
import { dubai } from "../../assets/Data/dubai";
import { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Details = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navTop, setNavTop] = useState(0);

  const { id } = useParams();

  const pkg = dubai.find((obj) => obj.id === Number(id)) || null;

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

  const handleScroll = () => {
    if (navRef.current) {
      const nav = navRef.current;
      const scrollY = window.scrollY;

      if (scrollY > navTop && scrollY > lastScrollY) {
        setIsSticky(true);
      } else if (scrollY < lastScrollY && scrollY <= navTop) {
        setIsSticky(false);
      }

      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    if (navRef.current) {
      setNavTop(navRef.current.offsetTop);
    }
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
          <div className="no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">{pkg.noOfDays}</h2>
            </div>
            <span>Days</span>
          </div>
        </div>
        <div className="details-images-slider">
          {showMap && pkg?.location ? (
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
              src={pkg.images?.[currentImage]}
              alt={pkg.title}
              className="details-card-image"
            />
          )}
          <button
            className="details-arrow left"
            onClick={handlePrevImage}
            disabled={showMap}
          >
            ❮
          </button>
          <button
            className="details-arrow right"
            onClick={handleNextImage}
            disabled={showMap}
          >
            ❯
          </button>
        </div>
        <div className="detail-description">
          <p>{pkg.detailDescription}</p>
          <br />
          <p>{pkg.subDescription}</p>
        </div>
        <ul ref={navRef} className={`detail-nav ${isSticky ? "fixed" : ""}`}>
          <li>
            <a href="#overView">Overview</a>
          </li>
          <li>
            <a href="#Itinerary">Itinerary</a>
          </li>
          <li>
            <a href="#Inclusions">Inclusions</a>
          </li>
          <li>
            <a href="#Hotels">Hotels</a>
          </li>
        </ul>
        <div id="overView" className="detail-overview">
          <h1>Overview</h1>
          <p>{pkg.overView}</p>
        </div>
        <div id="Itinerary" className="detail-itinerary">
          <h1>Itinerary</h1>
          {pkg.qna?.map((qna, index) => (
            <div key={index} className="qna-container">
              {Object.entries(qna).map(([key, value]) => (
                <div key={key}>
                  <h2>{key}</h2>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div id="Inclusions" className="inclusions-container">
          <h1>Inclusions</h1>
          {pkg.packageInclusion?.map((inc, index) => (
            <p key={index}>
              <FaCheckCircle className="text-green-500 text-xl" /> {inc}
            </p>
          ))}
        </div>
        <div className="exclusion-container">
          <h2>Package Exclusions</h2>
          {pkg.packageExclusion?.map((exc, index) => (
            <p key={index}>{exc}</p>
          ))}
        </div>
      </div>
      <div className="detail-left">
        <div className="detail-price-container">
          <div className="detail-discount">
            <h1>{pkg.discount}</h1>
          </div>
          <div className="originalPrice">
            <span>From</span>
            <del>{pkg.originalPrice}</del>
          </div>
          <div className="finalPrice">
            <h1>{pkg.price}</h1>
            <span>/Adult</span>
          </div>
          <button>Check Availability</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
