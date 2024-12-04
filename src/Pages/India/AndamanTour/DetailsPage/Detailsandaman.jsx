import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import {
  andmatour,
  watertourPackages,
} from "../../../../assets/Data/Andmantour";
import "./Detailsandaman.css";

const Detailsandaman = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  console.log("mmml", locationURL?.split("/"));

  console.log("mmml", locationURL?.split("/")?.[1]);
  useEffect(() => {
    let str = locationURL?.split("/")?.[2];
    switch (str) {
      case "andmatour":
        setDetailsData(andmatour);
        break;
      case "watercontainer":
        setDetailsData(watertourPackages);
        break;
      default:
        setDetailsData([]);
        break;
    }
  }, [locationURL]);

  useEffect(() => {
    const res = detailsData?.filter((obj) => obj.id === Number(id));
    setFilteredObjects(res);
  }, [detailsData, id]);

  if (filteredObjects.length === 0) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = (images) => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className="andaman-details-container">
          <div className="andamn-detail-right">
            <div className="andamn-detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="andamn-no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            {items.images && items.images.length > 0 && (
              <div className="andamn-details-images-slider">
                <img
                  src={items.images[currentImage]}
                  alt={items.title}
                  className="andamn-details-card-image"
                />
                <button
                  className="andamn-details-arrow left"
                  onClick={() => handlePrevImage(items.images)}
                >
                  ❮
                </button>
                <button
                  className="andamn-details-arrow right"
                  onClick={() => handleNextImage(items.images)}
                >
                  ❯
                </button>
              </div>
            )}
            <div className="andamn-detail-description">
              <p>{items.detailDescription}</p>
              <br />
              <p>{items.subDescription}</p>
              <br />
              <p>{items.lastDescription}</p>
            </div>

            <div className="andamn-info-details p-4">
              <div className="flex gap-2 ">
                <FaBusAlt className="text-2xl text-green-500" />
                <div>
                  <p>Transport</p>
                  <h1>Ac Sedan Car</h1>
                </div>
              </div>
              <div className="flex gap-2">
                <MdRestaurant className="text-2xl text-green-500" />
                <div>
                  <p>Meals</p>
                  <h1>Breakfast</h1>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="icon-holder text-2xl text-green-500">
                  <svg
                    fill="currentColor"
                    data-prefix="fas"
                    data-icon="hotel"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-inline--fa"
                    viewBox="0 0 512 512"
                    height="24"
                    width="24"
                  >
                    <path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"></path>
                  </svg>
                </span>
                <div>
                  <p>Accomodation</p>
                  <h1>3 & 4 Star Category Hotel</h1>
                </div>
              </div>
            </div>
            <div className="andamn-detail-nav-sticky">
              <ul>
                {items.overView === " " ? null : (
                  <li>
                    <a href={"#overView"}>OverView</a>
                  </li>
                )}

                <li>
                  <a href={"#Itinerary"}>Itinerary</a>
                </li>
                <li>
                  <a href={"#andamn-Inclusions"}>Inclusions</a>
                </li>
                <li>
                  <a href={"#Hotels"}>Hotels</a>
                </li>
                <li>
                  <a href={"#Optional"}>Optional Services</a>
                </li>
              </ul>
            </div>
            <div id="overView" className="andamn-detail-overview">
              <h1> {items.overView === " " ? null : "OverView"}</h1>
              <p>{items.overView}</p>
            </div>
            <div id="expect" className="andamn-detail-expect">
              <h1>What is Expect</h1>
              {items.Expect.map((inc, index) => (
                <div key={index} className="andamn-expect">
                  <p>
                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                    {inc}
                  </p>
                </div>
              ))}
            </div>
            <div id="Itinerary" className="andamn-detail-itinerary">
              <h1>Itinerary</h1>
              <div className="andamn-itinerary-container">
                {items.qna.map((ele, index) => (
                  <div key={index} className="andamn-qna-container">
                    <div
                      className="andamn-accordion-header"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        cursor: "pointer",
                        background: "#f0f0f0",
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2>{ele.question}</h2>
                      <span>{openIndex === index ? "-" : "+"}</span>
                    </div>
                    {openIndex === index && (
                      <div
                        className="andamn-accordion-content"
                        style={{
                          padding: "10px",
                          background: "#fff",
                          border: "1px solid #ccc",
                        }}
                      >
                        <p>{ele.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="andamn-Inclusions" className="andamn-inclusions-container">
              <h1> Inclusion</h1>
              <h2>The Trip Cost Includes</h2>
              <div className="andamn-inclusions">
                {items.packageInclusion.map((inc, index) => (
                  <div key={index} className="andamn-inclusion">
                    <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                      {inc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="andamn-exclusion-container">
              <h2>The Trip Cost Excludes</h2>
              <div className="andamn-exclusion">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="andamn-exclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel */}
            <div id="Hotels">
              <div className="andamn-hotel-container">
                <h1>Hotel Name</h1>
              </div>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Location</th>
                    <th scope="col">Hotel / Resort Name</th>
                    <th scope="col">Room Type</th>
                  </tr>
                </thead>
                <tbody>
                  {items.hotelData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.location}</td>
                        <td>{data.names}</td>
                        <td>{data.roomType}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* optional */}
            <div id="Optional">
              <div className="optional-container">
                <h1>
                  Available Activities Based on Location: @ Additional Cost
                </h1>
              </div>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Location</th>
                    <th scope="col">AVAILABLE ACTIVITY</th>
                    <th scope="col">ACTIVITY COST</th>
                  </tr>
                </thead>
                <tbody>
                  {items.availableActivities.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.location}</td>
                        <td>{data.activity}</td>
                        <td>{data.cost}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="andamn-detail-left">
            <div className="andaman-detail-price-container">
              <div className="andamn-detail-discount">
                <h1>{items.discount}</h1>
              </div>
              <div className="andamn-originalPrice">
                <span className="andamn-from">From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className="andamn-finalPrice">
                <h1>{items.price}</h1>
                <span>/Adult</span>
              </div>
              <div className="andamn-availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
            <div className="mt-10 text-2xl font-semibold text-center">
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className="andamn-tripAdvisor-container">
              <div className="andamn-tripAdvisor-img">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className="andamn-tripAdvisor-content">
                <h2>Ten Travel |</h2>
                <h2>Online Travel</h2>
                <h2>Agency</h2>
                <div>
                  <p>Trip Advisor Traveler Rating</p>
                  <span className="flex gap-1 text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </div>
                <div>
                  <span>Trip Advisor Review</span>
                  <p>"Ten Travel Review"</p>
                  <p>"very bad experience"</p>
                  <p>"Trip to Bali and Singapore"</p>
                  <p>"Comfortable experince"</p>
                  <p>"Nicely planned trip to bali"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Detailsandaman;
