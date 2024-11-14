import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./RiverRafting.css";

const RiverRafting = () => {
    const packages = [
        {
            id: 1,
            images: [
                "https://b4holiday.com/wp-content/uploads/2017/11/holly-mandarich-3266802-1024x681.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/10/riverrafting-1526135_19201-1024x683.jpg",
            ],
            title: "Shimla Manali Honeymoon",
            location: "Himachal, India",
            duration: "6 Days - 5 Nights",
            people: "2 People",
            discount: "35% Off",
            price: "₹16,700",
            originalPrice: "₹25,500",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 2,
            images: [
                "https://b4holiday.com/wp-content/uploads/2021/03/river_rafting_rishikesh.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/IMG_2256.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/20170909_102201.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/11.jpeg",
                "https://b4holiday.com/wp-content/uploads/2021/03/bonfire.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/2018-03-12.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/2018-03-10.jpg",
            ],
            title: "Rishikesh Camping",
            location: "India, Rishikesh, Uttarakhand",
            duration: "2 Days - 1 Night",
            people: "2-60 People",
            discount: "33% Off",
            price: "₹1,500",
            originalPrice: "₹2,250",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },

        {
            id: 3,
            images: [
                "https://b4holiday.com/wp-content/uploads/2021/03/IMG_2256.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/20170909_102201.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/IMG_20180420_171651732_HDR.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/IMG_2256.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/11.jpeg",
                "https://b4holiday.com/wp-content/uploads/2021/03/bonfire.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/8.jpeg",
                "https://b4holiday.com/wp-content/uploads/2021/03/10.jpeg",
                "https://b4holiday.com/wp-content/uploads/2021/03/river_rafting_rishikesh.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/2018-03-12.jpg",
            ],
            title: "Rishikesh Rafting & Camping | 2 Nights Stay",
            location: "Rishikesh",
            duration: "3 Days - 2 Nights",
            people: "2-60 People",
            discount: "16% Off",
            price: "₹2,950",
            originalPrice: "₹3,500",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 4,
            images: [
                "https://b4holiday.com/wp-content/uploads/2017/11/holly-mandarich-3266802-1024x681.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/10/riverrafting-1526135_19201-1024x683.jpg",
            ],
            title: "Kullu Manali",
            location: "Himachal, India",
            duration: "4 Days - 3 Nights",
            people: "2-10 People",
            discount: "20% Off",
            price: "₹11,250",
            originalPrice: "₹14,000",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 5,
            images: [
                "https://b4holiday.com/wp-content/uploads/2017/11/holly-mandarich-3266802-1024x681.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/10/riverrafting-1526135_19201-1024x683.jpg",
            ],
            title: "Dal Housie",
            location: "Himachal, India",
            duration: "3 Days - 2 Nights",
            people: "2-4 People",
            discount: "20% Off",
            price: "₹7,999",
            originalPrice: "₹10,000",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 6,
            images: [
                "https://b4holiday.com/wp-content/uploads/2017/11/holly-mandarich-3266802-1024x681.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/10/riverrafting-1526135_19201-1024x683.jpg",
            ],
            title: "Shimla Manali",
            location: "Himachal, India",
            duration: "5 Days - 4 Nights",
            people: "7 People",
            discount: "15% Off",
            price: "₹9,800",
            originalPrice: "₹11,500",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 7,
            images: [
                "https://b4holiday.com/wp-content/uploads/2017/11/holly-mandarich-3266802-1024x681.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
                "https://b4holiday.com/wp-content/uploads/2017/10/riverrafting-1526135_19201-1024x683.jpg",
            ],
            title: "Shimla Manali",
            location: "Himachal, India",
            duration: "5 Days - 4 Nights",
            people: "7 People",
            discount: "8% Off",
            price: "₹22,000",
            originalPrice: "₹24,000",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },


    ];

    return (
        <div className="riverrafting-container">
            <h1>River Rafting</h1>
            <div className="riverrafting-cards">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
};

const PackageCard = ({ pkg }) => {
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
        <div className="riverrafting-card">
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

export default RiverRafting;
