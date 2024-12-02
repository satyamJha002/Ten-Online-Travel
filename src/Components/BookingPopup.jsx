import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPopup = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [packageType, setPackageType] = useState("");
  const [members, setMembers] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const packagePrices = {
    Basic: 100,
    Premium: 200,
    VIP: 300,
  };


  const packageDetails = {
    Basic: {
      name: "Basic Package",
      description: "Includes basic services with limited access.",
      startDate: "Dec 26, 2024",
    },
    Premium: {
      name: "Premium Package",
      description: "Includes premium services with extra perks.",
      startDate: "Jan 15, 2025",
    },
    VIP: {
      name: "VIP Package",
      description: "All-inclusive with exclusive access to all services.",
      startDate: "Feb 5, 2025",
    },
  };

  const proceedToCheckout = () => {
    if (!date || !packageType || !members ) {
      alert("Please fill in all the fields.");
      return; 
    }
    const totalPrice = getPackagePrice();

    navigate("/billing", {
      state: {
        date,
        time,
        packageType,
        members,
        totalPrice,
       
      },
    });
  };

  const getPackagePrice = () => {
    return packagePrices[packageType] * members; 
  };

  const getPerPersonPrice = () => {
    return packagePrices[packageType];
  };

  return (
    <div className="booking-container relative">
      <button
         className="bg-green-500 text-white px-20 py-3 rounded-md hover:bg-green-600 transition"
        onClick={() => setShowPopup(true)}
      >
        View Details
      </button>

    
      {showPopup && (
        <div className="popup bg-black bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-full sm:w-[800px] h-[450px] flex">

            <div className="booking-details w-full sm:w-1/2 pr-4">
              <h2 className="text-2xl  mt-4 font-semibold mb-6 text-center">Select Booking Details</h2>

              <label className="block text-sm font-medium mb-2">
                Date:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 p-3 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>

              <label className="block text-sm font-medium mb-2">
                Package Type:
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="border border-gray-300 p-3 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Please select a package</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="VIP">VIP</option>
                </select>
              </label>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Members:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setMembers((prev) => Math.max(1, prev - 1))}
                    className="bg-gray-300 text-lg rounded-md p-2 hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{members}</span>
                  <button
                    onClick={() => setMembers((prev) => prev + 1)}
                    className="bg-gray-300 text-lg rounded-md p-2 hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                  onClick={proceedToCheckout}
                >
                  Proceed to Checkout
                </button>
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="price w-full sm:w-1/2 pl-4 border-l border-gray-300 flex flex-col items-center justify-center px-4 py-6">
              <div className="text-green-600 text-4xl   mb-4 rounded-md transition">
                Package Details
              </div>

              {packageType && (
                <>
                  <h2 className="text-lg text-gray-700 font-medium mb-2">
                    {packageDetails[packageType]?.name}
                  </h2>
                  <p className="text-sm text-gray-700">{packageDetails[packageType]?.description}</p>
                  <p className="text-sm text-gray-700 font-medium mt-2">
                    Starting Date: {packageDetails[packageType]?.startDate}
                  </p>

                  <p className="text-lg text-gray-700 font-medium mt-4">
                    {packageType ? `$${getPerPersonPrice()}/Person` : "Select a package to view price"}
                  </p>

                  <hr className="my-2" />
                  <p className="text-lg text-gray-700 font-medium">
                    Total Price: <span className="font-bold text-xl">${packageType ? getPackagePrice() : "0.00"}</span>
                  </p>
                </>
              )}

              {!packageType && (
                <p className="text-sm text-gray-500">Please select a package to view details.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPopup;
