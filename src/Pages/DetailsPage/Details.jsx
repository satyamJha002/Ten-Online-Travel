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
      <div>
        {filteredObjects.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <div className="image-slider">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
