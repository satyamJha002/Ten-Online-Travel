import { useParams } from "react-router-dom";
import { packages } from "../../../../assets/Data/hiking";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./HikingDetails.css";

const HikingDetails = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const { id } = useParams();

    const hikingObject = packages.find((obj) => obj.id === Number(id));

    if (!hikingObject) {
        return <div>Package not found</div>;
    }


    const handlePrevImage = () => {
        setCurrentImage((prevIndex) =>
            prevIndex === 0 ? hikingObject.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImage((prevIndex) =>
            prevIndex === hikingObject.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="hiking-details-container">
            <div className="hiking-detail-right">
                <div className="hiking-detail-title">
                    <h1>{hikingObject.title}</h1>
                    <div className="hiking-no-days">
                        <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                            <h2 className="text-white text-3xl">{hikingObject.noOfDays}</h2>
                        </div>
                        <span>Days</span>
                    </div>
                </div>

                <div className="hiking-details-images-slider">
                    <img
                        src={hikingObject.images[currentImage]}
                        alt={hikingObject.title}
                        className="hiking-details-card-image"
                    />
                    <button
                        className="hiking-details-arrow left"
                        onClick={handlePrevImage}
                    >
                        ❮
                    </button>
                    <button
                        className="hiking-details-arrow right"
                        onClick={handleNextImage}
                    >
                        ❯
                    </button>
                </div>

                <div className="hiking-detail-description">
                    <p>{hikingObject.detailDescription}</p>
                    <br />
                    <p>{hikingObject.subDescription}</p>
                </div>

                <div className="hiking-info-details p-4">
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

                <div className="hiking-detail-nav-sticky">
                    <ul>
                        {hikingObject.overView && (
                            <li>
                                <a href="#overView">OverView</a>
                            </li>
                        )}
                        <li>
                            <a href="#Itinerary">Itinerary</a>
                        </li>
                        <li>
                            <a href="#Inclusions">Inclusions</a>
                        </li>
                        <li>
                            <a href="#BookingTerms">Optional-Services</a>
                        </li>
                    </ul>
                </div>

                <div id="overView" className="hiking-detail-overview">
                    <h1>{hikingObject.overView ? "OverView" : null}</h1>
                    <p>{hikingObject.overView}</p>
                </div>

                <div id="Itinerary" className="hiking-detail-itinerary">
                    <h1>Itinerary</h1>
                    <div className="hiking-itinerary-container">
                        {hikingObject.qna.map((ele, index) => (
                            <div key={index} className="hiking-qna-container">
                                <div
                                    className="hiking-accordion-header"
                                    onClick={() => toggleAccordion(index)}
                                    style={{
                                        cursor: "pointer",
                                        background: "#f0f0f0",
                                        padding: "10px",
                                        borderBottom: "1px solid #ccc",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}>
                                    <h2>{ele.question}</h2>
                                    <span>{openIndex === index ? "-" : "+"}</span>
                                </div>
                                {openIndex === index && (
                                    <div
                                        className="hiking-accordion-content"
                                        style={{
                                            padding: "10px",
                                            background: "#fff",
                                            border: "1px solid #ccc",
                                        }}>
                                        <p>{ele.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Inclusions" className="hiking-inclusions-container">
                    <h1> Inclusion</h1>
                    <h2>Package Inclusions</h2>
                    <div className="hiking-inclusions">
                        {hikingObject.packageInclusion.map((inc, index) => (
                            <div key={index} className="hiking-inclusion">
                                <p>
                                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" /> {inc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hiking-exclusion-container">
                    <h2>Package Exclusion</h2>
                    <div className="hiking-inclusions">
                        {hikingObject.packageExclusion.map((exc, index) => (
                            <div key={index} className="hiking-inclusion">
                                <p>
                                    <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" /> {exc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="BookingTerms" className="hiking-booking-terms-container">
                    <h3><strong>Important Points</strong></h3>
                    <ul>
                        <li>Transport is not included in the package, can be arranged on request.</li>
                        <li>Direct buses are available from Delhi to Kasol. Costing around Rs 1,200 per person one way.</li>
                        <li>On-site restaurant with a wide variety of menu options.</li>
                        <li>Buffet will be arranged for occupancy of more than 20 pax, otherwise a fixed meal will be served at the table.</li>
                        <li>Accommodation would be in alpine or Swiss camps.</li>
                        <li>Alpine tents have access to common washrooms with floor bedding. Ideal for 3-4 persons.</li>
                        <li>Swiss tents have attached washrooms and beds. Ideal for 6-8 persons.</li>
                        <li>Camp allocation would be as per prior commitment.</li>
                        <li>All our washrooms are equipped with western toilets with hot/cold water.</li>
                        <li>Kids under 5 are free. 50% charge for those aged between 6 to 12. Above 12 yrs charged at full price.</li>
                        <li>Ample onsite free parking space.</li>
                        <li>Any changes to the itinerary post-confirmation cannot be accommodated.</li>
                        <li>Once the booking is confirmed, the advance will not be refundable.</li>
                        <li>Camp management will NOT be liable for any incidents or mishaps during the tour.</li>
                        <li>Any kind of insurance such as accident, theft, or medical is not included in this package.</li>
                        <li>There is no locker facility in the camp, so please avoid carrying valuable items.</li>
                        <li>Take part in any kind of adventure activities only when you are fully fit.</li>
                    </ul>
                    <h3><strong>Booking Confirmation Policy</strong></h3>
                    <ul>
                        <li>After the camp is selected, the booking confirmation will be sent to your email and WhatsApp within 24 hours.</li>
                        <li>Booking confirmation without an advance amount will not be considered.</li>
                        <li>If selected camps/hotels are sold out, guests can book another camp similar to that or reschedule their trip.</li>
                    </ul>
                    <b>Advance Booking Fee:</b>
                    <ul>
                        <li>20 days or more before the date of departure: 50% of the total cost</li>
                        <li>0 – 19 days before the date of departure: 100% of the total cost</li>
                    </ul>
                    <b>Payment Modes:</b>
                    <ul>
                        <li>Credit / Debit Card / Net Banking</li>
                        <li>Wallets: Paytm / Amazon Pay / Freecharge / Ola Money (Postpaid + Wallet) / Google Pay</li>
                    </ul>
                </div>
            </div>


            <div className="hiking-detail-left">
                <div className="hiking-detail-price-container">
                    <div className="hiking-detail-discount">
                        <h1>{hikingObject.discount}</h1>
                    </div>
                    <div className="hiking-originalPrice">
                        <span className="hiking-from">From</span>
                        <span>
                            <del>{hikingObject.originalPrice}</del>
                        </span>
                    </div>
                    <div className="hiking-finalPrice">
                        <h1>{hikingObject.price}</h1>
                        <span>/Adult</span>
                    </div>
                    <div className="hiking-availableBtn">
                        <button>Check Availability</button>
                    </div>
                </div>

                <div className="mt-10 text-2xl font-semibold text-center">
                    <h2>Check our reviews on TripAdvisor!</h2>
                </div>
                <div className="hiking-tripAdvisor-container">
                    <div className="hiking-tripAdvisor-img">
                        <img
                            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                            alt=""
                        />
                    </div>
                    <div className="hiking-tripAdvisor-content">
                        <h2>Before Holiday |</h2>
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
                            <p>"Before Holiday Review"</p>
                            <p>"very bad experience"</p>
                            <p>"Trip to Bali and Singapore"</p>
                            <p>"Comfortable experience"</p>
                            <p>"Nicely planned trip to Bali"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HikingDetails;