import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BillingPage = () => {
  const location = useLocation();
  const { date, time, packageType, members, totalPrice } = location.state || {};

  // const { addNewBooking } = useContext(BookingContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    address: "",
    city: "",
    country: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (termsAccepted) {
      const newBooking = {
        id: Date.now(),
        user: `${formData.firstName} ${formData.lastName}`,
        details: {
          date,
          packageType,
          members,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          country: formData.country,
        },
      };

      // Add booking to context
      // addNewBooking(newBooking);

      // Prepare email data
      const emailData = {
        access_key: "ef7d6db9-5581-4525-b98a-ca42fb0056f4", 
        subject: "Booking Details",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: `
          Booking Summary:
          - Date: ${date}
          - Package: ${packageType}
          - Members: ${members}
          - Total Price: $${totalPrice ? totalPrice : "0.00"}

          Billing Information:
          - Name: ${formData.firstName} ${formData.lastName}
          - Email: ${formData.email}
          - Phone: ${formData.phone}
          - Address: ${formData.address}
          - City: ${formData.city}
          - Country: ${formData.country}
        `,
      };

      try {
        // Send email using Web3Forms
        await axios.post("https://api.web3forms.com/submit", emailData, {
          headers: { "Content-Type": "application/json" },
        });

        alert("Booking details submitted and email sent!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      }
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="billing-page p-8 bg-white">
      <div className="flex">

        {/* Billing Details Form */}
        <div className="w-1/2 p-4 ml-60">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          {["firstName", "lastName", "email", "phone","address", "city", "country"].map(
            (field) => (
              <label key={field} className="block mb-4">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </label>
            )
          )}
          <label className="flex items-center mt-6">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            Accept Terms and Conditions
          </label>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {/* Booking Summary */}
        <div className="w-1/5 p-4  bg-whitw-100 items-center justify-center rounded shadow">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
            <p className="text-lg ">Date: {date}</p>
            <p className="text-lg ">Package: {packageType}</p>
            <p className="text-lg ">Members: {members}</p>
            <p className="text-lg ">
              Total Price: ${totalPrice ? totalPrice : "0.00"}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
