import "./detail.css";
import { useParams } from "react-router-dom";
import { dubai } from "../../assets/Data/dubai";
import { useState } from "react";
const Details = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { id } = useParams();

  const filteredObjects = dubai.filter((obj) => obj.id === Number(id));
  console.log(filteredObjects);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {filteredObjects.map((item, index) => (
        <div key={index} className="details-container">
          <div className="detail-right">
            <div className="detail-title">
              <h1>{item.title}</h1>
              <div>
                <div className="no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{item.noOfDays} </h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="detail-image-slider">
              <img
                src={item.images[currentImage]}
                alt={item.title}
                className="card-image"
              />

              <button className="arrow left" onClick={handlePrevImage}></button>
              <button
                className="arrow right"
                onClick={handleNextImage}></button>
            </div>
            <div className="detail-description">
              <p>{item.detailDescription} </p>
              <br />
              <p>{item.subDescription}</p>
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
              <ul className="detail-nav">
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
              <p>{item.overView}</p>
            </div>
            <div id="Itinerary" className="detail-itinerary">
              <h1>Itinerary</h1>
              <div className="itinerary-container">
                {item.qna.map((ele, index) => (
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
              <h1>Package Inclusions</h1>
              <h2> Inclusion</h2>
              <div className="inclusion">
                {item.packageInclusion.map((inc, index) => (
                  <div key={index}>
                    <p>{inc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-left">
            <div className="detail-price-container">
              <div className="detail-discount">
                <h1>{item.discount} </h1>
              </div>
              <div className="originalPrice">
                <span className="from">From</span>
                <span>
                  <del> {item.originalPrice}</del>
                </span>
              </div>
              <div className="finalPrice">
                <h1>{item.price} </h1>
                <span>/Adult</span>
              </div>
              <div className="availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
