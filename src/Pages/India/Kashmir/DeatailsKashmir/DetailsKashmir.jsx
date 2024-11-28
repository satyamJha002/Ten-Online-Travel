import { useParams } from "react-router-dom";
// import { dubai } from "../../../../assets/Data/dubai";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import "./detailsKashmir.css";
import { kashmirPackages } from "../../../../assets/Data/data";

const DetailsKashmir = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const filteredObjects = kashmirPackages.filter((obj) => obj.id === Number(id));
console.log(",.,.dsmfewisufuew",kashmirPackages);
console.log("0000",filteredObjects);



  console.log(filteredObjects);

  const handlePrevImage = (images) => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!filteredObjects) {
    return <div>Package not found</div>;
  }

  return (
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className="details-container">
          <div className="detail-right">
            <div className="detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="details-images-slider">
              <img
                src={items.images[currentImage]}
                alt={items.title}
                className="details-card-image"
              />
              <button
                className="details-arrow left"
                onClick={() => handlePrevImage(items.images)}
              >
                ❮
              </button>
              <button
                className="details-arrow right"
                onClick={() => handleNextImage(items.images)}
              >
                ❯
              </button>
            </div>
            

            <div className="info-details p-4">
              <div className="flex gap-2 ">
                <FaBusAlt className="text-2xl text-green-500" />
                <div>
                  <p>Transport</p>
                  <h1>SIC</h1>
                </div>
              </div>
              <div className="flex gap-2">
                <MdRestaurant className="text-2xl text-green-500" />
                <div>
                  <p>Meals</p>
                  <h1>Breakfast</h1>
                </div>
              </div>

            </div>
            <div className="detail-nav-sticky">
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
                  <a href={"#Inclusions"}>Inclusions</a>
                </li>
                <li>
                  <a href={"#Hotels"}>Hotels</a>
                </li>
                <li>
                  <a href={"#OptionalServices"}>Optional Services</a>
                </li>
                
              </ul>
            </div>
            <div id="overView" className="detail-overview">
              <h1>OverView</h1>
             <p>KASHMIR TOUR (04 NIGHTS AND 05 DAYS)</p>
             <div className="d-flex ">
             <div className="mr-5">
             <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                     
                </p>
                 <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                     
                </p> 
                <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                     
                </p>
             </div>
             <div className="text">
              <p>(02 Nights Srinagar in Hotel)</p>
              <p>(01 Night Pahalgam in Hotel)</p>
              <p>(01 Night Srinagar in Houseboat) </p>
             </div>
             </div>
<p>Srinagar | Local Sightseeing | Gulmarg | Pahalgam | Sonamarg | Srinagar | Shikara Ride</p>
   <p>All transfers and Local Sightseeing by Innova including all toll taxes, driver allowance, /MAPAI Plan</p>            
         
            </div>

            <div id="Itinerary" className="detail-itinerary">
              <h1>Itinerary</h1>
              <div className="itinerary-container">
                {items.qna.map((ele, index) => (
                  <div key={index} className="qna-container">
                    <div
                      className="accordion-header"
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
                        className="accordion-content"
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

            <div id="Inclusions" className="inclusions-container">
              <h1> Inclusion</h1>
              <h2>The Trip Cost Includes</h2>
              <div className="inclusions">
                {items.packageInclusion.map((inc, index) => (
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
              <h2>The Trip Cost Excludes</h2>
              <div className="inclusions">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="inclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          

{/*  hotel*/}
<div id="Hotels" >
  <div className="hotel-container">
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
   

 {items.hotelData.map((data,index)=>{
return(
  <tr key={index}>
    <td>{data.location}</td>
    <td>{data.names}</td>
    <td>{data.roomType}</td>
  </tr>
)
 })
}

  
  </tbody>
</table>
</div>
{/*  */}

<div id="OptionalServices" >
  <div className="optional-container">
  <h1>Supplement Cost for other Services which is not Included:</h1>
  <div>
    <p>Note: As per Taxi-Union Restriction, our vehicle wouldn’t be allowed to do Sightseeing of Gulmarg, Pahalgam & Sonmarg; Guest has to take union vehicle on a direct payment basis. Either we can arrange as mentioned in the below supplement cost Column.</p>
  </div>
 

  </div>
  <div>
    <li>Gardens and Monument Entry Fee @ Rs 150 / Person</li>
    <li>Fish Point, Zero Point, Zojila Pass & Baltal Sightseeing @ Rs 5500/ 8-Seater Cab</li>
    <li>Kargil War Memorial ( Drass ), Zero Point & Zojila Pass @ Rs 8000/ 8-Seater Cab </li>
    <li>Thajiwas Glacier Sightseeing at Sonmarg (By Pony Ride) @ Rs 800/ Person</li>
    <li>Gondola ride ticket up to First Phase @ Rs 800/ Person</li>
    <li>Gondola ride ticket both First & Second Phase @ Rs 1800/ Person</li>
    <li>River Rafting at Pahalgam @ Rs 500/ Person</li>
    <li>Aru Valley, Betaab valley & Chandanwari Sightseeing @ Rs 2500/ 8-Seater Cab</li>
  </div>
  </div>

  </div>
          <div className="detail-left">
            <div className="detail-price-container">
              <div className="detail-discount">
                <h1>{items.discount}</h1>
              </div>
              <div className="originalPrice">
                <span className="from">From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className="finalPrice">
                <h1>{items.price}</h1>
                <span>/Adult</span>
              </div>
              <div className="availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
            <div className="mt-10 text-2xl font-semibold text-center">
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className="tripAdvisor-container">
              <div className="tripAdvisor-img">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className="tripAdvisor-content">
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
                  <p>"Trip to Kashmir"</p>
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

export default DetailsKashmir;
