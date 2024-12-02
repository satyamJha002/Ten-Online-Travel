// // // import React, { createContext, useState } from "react";

// // // export const BookingContext = createContext();

// // // export const BookingProvider = ({ children }) => {
// // //   const [bookings, setBookings] = useState([]);

// // //   return (
// // //     <BookingContext.Provider value={{ bookings, setBookings }}>
// // //       {children}
// // //     </BookingContext.Provider>
// // //   );
// // // };









// // import React, { createContext, useState, useEffect } from "react";

// // export const BookingContext = createContext();

// // export const BookingProvider = ({ children }) => {
// //   const [bookings, setBookings] = useState(() => {
// //     const storedBookings = localStorage.getItem("bookings");
// //     return storedBookings ? JSON.parse(storedBookings) : [];
// //   });

// //   // Sync with localStorage whenever bookings change
// //   useEffect(() => {
// //     localStorage.setItem("bookings", JSON.stringify(bookings));
// //   }, [bookings]);

// //   return (
// //     <BookingContext.Provider value={{ bookings, setBookings }}>
// //       {children}
// //     </BookingContext.Provider>
// //   );
// // };









// import React, { createContext, useState, useEffect } from "react";

// export const BookingContext = createContext();

// export const BookingProvider = ({ children }) => {
//   const [bookings, setBookings] = useState(() => {
//     const storedBookings = localStorage.getItem("bookings");
//     return storedBookings ? JSON.parse(storedBookings) : [];
//   });

//   // Sync with localStorage whenever bookings change
//   useEffect(() => {
//     localStorage.setItem("bookings", JSON.stringify(bookings));
//   }, [bookings]);

//   // Function to approve a booking and persist it
//   const approveBooking = (id) => {
//     setBookings((prev) => {
//       const updatedBookings = prev.map((booking) =>
//         booking.id === id ? { ...booking, approved: true } : booking
//       );
//       localStorage.setItem("bookings", JSON.stringify(updatedBookings)); // Persist immediately
//       return updatedBookings;
//     });
//   };

//   return (
//     <BookingContext.Provider value={{ bookings, setBookings, approveBooking }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };














import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const storedBookings = localStorage.getItem("bookings");
    return storedBookings ? JSON.parse(storedBookings) : [];
  });

  // Sync with localStorage whenever bookings change
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // Function to approve a booking and persist it
  const approveBooking = (id) => {
    setBookings((prev) => {
      const updatedBookings = prev.map((booking) =>
        booking.id === id ? { ...booking, approved: true } : booking
      );
      localStorage.setItem("bookings", JSON.stringify(updatedBookings)); // Persist immediately
      return updatedBookings;
    });
  };

  // Function to add a new booking while preserving existing ones
  const addNewBooking = (newBooking) => {
    setBookings((prev) => {
      const existingBookings = [...prev]; // Keep current state
      const updatedBookings = [
        ...existingBookings,
        { ...newBooking, approved: false }, // Add new booking with default 'unapproved'
      ];
      localStorage.setItem("bookings", JSON.stringify(updatedBookings)); // Persist immediately
      return updatedBookings;
    });
  };

  return (
    <BookingContext.Provider value={{ bookings, setBookings, approveBooking, addNewBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
