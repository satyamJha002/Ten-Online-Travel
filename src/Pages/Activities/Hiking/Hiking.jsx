import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Hiking.css";

const Hiking = () => {
    const packages = [
        {
            id: 1,
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
            id: 2,
            images: [
                "https://b4holiday.com/wp-content/uploads/2021/03/River1-e1581076472594-768x1024-1.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/Alpine1-1024x683-1.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/Snow1-1024x576-1.jpg",
                "https://b4holiday.com/wp-content/uploads/2021/03/Snowfall-1024x577-1.jpg",
            ],
            title: "Kasol Camping | 2 Nights Stay",
            location: "Kasol",
            duration: "3 Days - 2 Nights",
            people: "2-60 People",
            discount: "25% Off",
            price: "₹3,750",
            originalPrice: "₹4,990",
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
            title: "Rishikesh Camping | Wild Leopard Camp",
            location: "Rishikesh ",
            duration: "2 Days - 1 Nights",
            people: "2-60 People",
            discount: "36% Off",
            price: "₹1,450",
            originalPrice: "₹2,250",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },
        {
            id: 4,
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
            title: "Rishikesh Camping Package",
            location: "Rishikesh",
            duration: "3 Days - 2 Nights",
            people: "2-60 People",
            discount: "23% Off",
            price: "₹2,900",
            originalPrice: "₹3,750",
            nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
            featured: true,
        },

    ];

    return (
        <div className="hiking-container">
            <h1>hiking</h1>
            <div className="hiking-cards">
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
        <div className="hiking-card">
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

export default Hiking;