

import React, { useContext, useEffect } from "react";
import { BookingContext } from "../BookingContext";

const AdminPanel = () => {
  const { bookings, setBookings, approveBooking } = useContext(BookingContext);
  useEffect(() => {
    const interval = setInterval(() => {
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [setBookings]);

  return (
    <div className="admin-panel p-4">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">User</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Package</th>
            <th className="border p-2">Members</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Country</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border p-2">{booking.user}</td>
              <td className="border p-2">{booking.details.date}</td>
              <td className="border p-2">{booking.details.time}</td>
              <td className="border p-2">{booking.details.packageType}</td>
              <td className="border p-2">{booking.details.members}</td>
              <td className="border p-2">{booking.details.email}</td>
              <td className="border p-2">{booking.details.address}</td>
              <td className="border p-2">{booking.details.city}</td>
              <td className="border p-2">{booking.details.country}</td>
              <td className="border p-2">
                {booking.approved ? "Approved" : "Pending"}
              </td>
              <td className="border p-2">
                {!booking.approved && (
                  <button
                    onClick={() => approveBooking(booking.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;




// import React, { useContext, useEffect, useState } from "react";
// import { BookingContext } from "../BookingContext";

// const AdminPanel = () => {
//   const { bookings, approveBooking } = useContext(BookingContext);
//   const [refreshBookings, setRefreshBookings] = useState(bookings);

//   // Function to refresh bookings every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // This will refresh the bookings every 2 seconds
//       setRefreshBookings([...bookings]); // Spread the bookings to trigger re-render
//     }, 2000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [bookings]);

//   return (
//     <div className="admin-panel p-4">
//       <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">User</th>
//             <th className="border p-2">Booking Details</th>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Time</th>
//             <th className="border p-2">Members</th>
//             <th className="border p-2">Package</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {refreshBookings.map((booking) => (
//             <tr key={booking.id}>
//               <td className="border p-2">{booking.user}</td>
//               <td className="border p-2">
//                 {`Date: ${booking.details.date}, Time: ${booking.details.time}`}
//               </td>
//               <td className="border p-2">{booking.details.date}</td>
//               <td className="border p-2">{booking.details.time}</td>
//               <td className="border p-2">{booking.details.members}</td>
//               <td className="border p-2">{booking.details.packageType}</td>
//               <td className="border p-2">
//                 {booking.approved ? "Approved" : "Pending"}
//               </td>
//               <td className="border p-2">
//                 {!booking.approved && (
//                   <button
//                     onClick={() => approveBooking(booking.id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded"
//                   >
//                     Approve
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPanel;
