import React, { useState } from "react";
import { malaysia } from "../../../../assets/Data/malaysia";
import { useParams } from "react-router-dom";
import styles from "./detailsPage.module.css";

const DetailsPage = () => {
  const [currentImages, setCurrentImages] = useState(0);
  const { id } = useParams();
  const filteredObjects = malaysia.filter((obj) => obj.id === Number(id));
  console.log(filteredObjects);

  const handlePrevImage = (images) => {
    setCurrentImages((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImages((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!filteredObjects) {
    return <div>Package not found</div>;
  }
  return (
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className={styles["malaysia-container"]}>
          <div className={styles["malaysia-right"]}>
            <div className={styles["malaysia-title"]}>
              <h1>{items.title}</h1>
              <div>
                <div className={styles["no-days"]}>
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className={styles["details-images-slider"]}>
              <img src={items.images[currentImages]} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsPage;
