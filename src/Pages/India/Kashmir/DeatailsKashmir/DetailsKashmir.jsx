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
                  <h1>Non Ac Car / SUV </h1>
                </div>
              </div>
              <div className="flex gap-2">
                <MdRestaurant className="text-2xl text-green-500" />
                <div>
                  <p>Meals</p>
                  <h1>Breakfast & Dinner</h1>
                </div>
              </div>
              <div className="flex gap-3">
              <span className="icon-holder text-2xl text-green-500"><svg fill="currentColor" data-prefix="fas" data-icon="hotel" xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa" viewBox="0 0 512 512" height="24" width="24"><path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"></path></svg></span>
              <div>
                <p>Accomodation</p>
                <h1>3 Star Category Hotels</h1>
              </div>
               </div>
               <div className="flex gap-3">
               <span className="icon-holder text-2xl text-green-500"><svg fill="currentColor" data-prefix="fas" data-icon="hiking" xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa" viewBox="0 0 384 512" height="24" width="24"><path d="M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"></path></svg></span>
               <div>
                <p>Tour type</p>
                <h1>Family Tour</h1>
              </div>
              </div>
              <div className="flex gap-3">
              <span className="icon-holder text-2xl text-green-500"><svg fill="currentColor" data-prefix="fas" data-icon="plane-arrival" xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa" viewBox="0 0 640 512" height="24" width="24"><path d="M.2528 166.9L.0426 67.99C.0208 57.74 9.508 50.11 19.51 52.34L55.07 60.24C65.63 62.58 74.29 70.11 78.09 80.24L95.1 127.1L223.3 165.6L181.8 20.4C178.9 10.18 186.6 .001 197.2 .001H237.3C248.8 .001 259.5 6.236 265.2 16.31L374.2 210.2L481.5 241.8C497.4 246.5 512.2 254.3 525.2 264.7L559.6 292.2C583.7 311.4 577.7 349.5 548.9 360.5C507.7 376.1 462.7 378.5 420.1 367.4L121.7 289.8C110.6 286.9 100.5 281.1 92.4 272.9L9.536 189.4C3.606 183.4 .2707 175.3 .2528 166.9V166.9zM608 448C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448H608zM192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368zM224 384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384z"></path></svg></span>

               <div>
                <p>Arrival on</p>
                <h1>Srinagar Airport</h1>
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
