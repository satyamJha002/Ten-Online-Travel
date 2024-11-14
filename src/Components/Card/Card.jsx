import "./card.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { useState } from "react";

const Card = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <>
      <div className="container">
        <div className="travelCard">
          {/* the img should be dynamic  */}
          <div className="travelCard-img">
            <img
              src="https://b4holiday.com/wp-content/uploads/2021/12/Vilamendhoo-Island-2-600x400-1.jpg"
              alt=""
            />
          </div>
          <div className="travelTitle">
            {/* the Title should be dynamic  */}
            <h2>VELIGANDU ISLAND RESORT</h2>
            <div
              onClick={toggleLike}
              style={{ fontSize: "24px", cursor: "pointer" }}>
              {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
          <div className="travelCardDescription">
            <div className="descriptionLeft">
              <div className="cardLocation">
                <IoLocationOutline />
                {/* the  the  should be dynamic  */}
                <span>Maldives</span>
              </div>
              <div className="cardDays">
                <IoMdTime />
                <span>5 Days - 4 Nights</span>
              </div>
              <div className="CardPeople">
                <GoPeople />
                <span>2-4 People</span>
              </div>
              {/* this description should be dynamic  */}
              <div className="des">Award-winning Vilamendhoo</div>
            </div>
            <div className="descriptionRight">
              <div className="cardPrice">
                {/* the price should be dynamic  */}
                <h2>₹135,000</h2>
              </div>
              <div className="cardDescription">
                <div className="cardDescription">
                  <span>Next Departure</span>
                </div>
                <span>
                  <IoCheckmark /> Nov 14
                </span>
                <span>
                  <IoCheckmark />
                  Nov 15
                </span>
                <span>
                  <IoCheckmark /> Nov 16
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="travelCardBtn">
            <button className="button">
              <p>View Details</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
