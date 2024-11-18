import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isIndiaSubmenuOpen, setIndiaSubmenuOpen] = useState(false);
  const [isHimachalSubmenuOpen, setHimachalSubmenuOpen] = useState(false);
  const [isKeralaSubmenuOpen, setKeralaSubmenuOpen] = useState(false);
  const [isTamilNaduSubmenuOpen, setTamilNaduSubmenuOpen] = useState(false);
  const [isActivitiesSubmenuOpen, setActivitiesSubmenuOpen] = useState(false);
  const [isInternationalSubmenuOpen, setInternationalSubmenuOpen] = useState(false);
  const [isUttarakhandSubmenuOpen, setUttarakhandSubmenuOpen] = useState(false);
  const activeStyle = "text-white font-bold"; 
  const inactiveStyle = "text-black font-small"; 
  return (
    <div>
<div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-36 py-4">
  {/* logo */}
  <div className="flex justify-center md:justify-start mb-4 md:mb-0">
  <svg
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 243.913 230.792"
    xmlns="http://www.w3.org/2000/svg"
    data-type="ugc"
    role="presentation"
    aria-hidden="true"
    className="h-20 w-auto md:h-44 md:w-66 object-contain" >
    <g>
      <g opacity=".86">
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z" ></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z" ></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z" ></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z" ></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z" ></path>
        <path
          strokeWidth=".5"
          strokeMiterlimit="10"
          stroke="#e9b00d"
          fill="#e9b00d"
          d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z" ></path>
      </g>
    </g>
    <text
      x="121.9565"
      y="230"
      fontSize="26"
      textAnchor="middle"
      fill="#e9b00d"
      fontFamily="Arial, sans-serif">
      TEN TRAVEL
    </text>
  </svg>
</div>

  <div className="text-center">
    <p className="text-sm md:text-xs font-medium">Call Us, We are open 24/7</p>
    <p className="text-xl md:text-4xl font-bold text-green-600">
      <a href="/contact">(+91) 1234567890</a>
    </p>
  </div>
</div>
      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center bg-green-400 px-6 py-4 shadow-md">
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } >
            HOME
          </NavLink>
          <div className="relative mx-2"
          // onMouseEnter={() => setIndiaSubmenuOpen(true)}
          // onMouseLeave={() => setIndiaSubmenuOpen(false)} 
          >
            <div className="flex">
            <NavLink
              to="/india"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
              <button className="block ">INDIA</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setIndiaSubmenuOpen(!isIndiaSubmenuOpen)}>
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isIndiaSubmenuOpen && (
              <div className="absolute  bg-green-400 mx-2 w-40 shadow-lg z-50 mt-4">
                <NavLink
                  to="/andaman-tour"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 justify-center items-center py-2 text-left hover:bg-gray-100">
                    Andaman Tour
                  </button>
                </NavLink>
                <button
                  className="block px-4 py-2 justify-center items-center flex text-left hover:bg-gray-100 no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setHimachalSubmenuOpen(!isHimachalSubmenuOpen) }>
                  Himachal <span className="ml-6">&#9654;</span>
                </button>
                {isHimachalSubmenuOpen && (
                  <div className="absolute left-full top-16 bg-green-400 shadow-lg">
                    <NavLink
                      to="/kasol"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}>
                      <button className="block  justify-center items-center px-4 py-2 text-left text-black  hover:bg-gray-100"
                        onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setHimachalSubmenuOpen(false); }} >
                        Kasol
                      </button>
                    </NavLink>
                  </div>
                )}
                <button
                  className="block px-4 py-2 flex text-left hover:bg-gray-100 no-underline hover:no-underline focus:no-underlin"
                  onClick={() =>
                    setKeralaSubmenuOpen(!isKeralaSubmenuOpen) }  >
                  Kerala
                 <span className="ml-12">&#9654;</span>
                </button>
                {isKeralaSubmenuOpen && (
                  <div className="absolute left-full my-3 bg-green-400 top-24 shadow-lg">
                    <NavLink
                      to="/Munnar"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block px-4 py-2 text-left hover:bg-gray-100"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setKeralaSubmenuOpen(false); }} >
                        Munnar
                      </button>
                    </NavLink>
                  </div>
                )}
                <button
                  className="block px-4 py-2 flex text-left hover:bg-gray-100 no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)}>
                  Tamil Nadu
                 <span className="ml-2">&#9654;</span>
                </button>
                {isTamilNaduSubmenuOpen && (
                  <div className="absolute left-full top-32  my-4 bg-green-400 shadow-lg">
                    <NavLink
                      to="/india/tamilnadu/ooty"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block px-4 py-2 text-left hover:bg-gray-100"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setTamilNaduSubmenuOpen(false); }} >
                        Ooty
                      </button>
                    </NavLink>
                    <NavLink
                      to="/india/tamilnadu/kodaikanal"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  } >
                      <button className="block px-4 py-2 text-left hover:bg-gray-100"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setTamilNaduSubmenuOpen(false);}} >
                       Kodaikanal
                      </button>
                    </NavLink>
                  </div>
                )}
                <NavLink
                  to="/india/goa"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Goa
                  </button>
                </NavLink>
                <NavLink
                  to="/india/darjeeling"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Darjeeling
                  </button>
                </NavLink>
                <NavLink
                  to="/india/sikkim"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Sikkim
                  </button>
                </NavLink>
                <NavLink
                  to="/india/kashmir"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Kashmir
                  </button>
                </NavLink>
                <NavLink
                  to="/india/ladakh"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                   Ladakh
                  </button>
                </NavLink>
                <button
                  className="block px-2 py-2 flex text-left hover:bg-gray-100 no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)} >
                  Uttarakhand
                 <span className="ml-4">&#9654;</span>
                </button>
                {isUttarakhandSubmenuOpen && (
                  <div className="absolute left-full top-28 my-72 bg-green-400 shadow-lg z-50">
                    <NavLink
                      to="/india/uttarakhand/nainital"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block px-4 py-2 text-left hover:bg-gray-100"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setUttarakhandSubmenuOpen(false); }} >
                        Nainital
                      </button>
                    </NavLink>
                    <NavLink
                      to="/india/uttarakhand/rishikesh"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  } >
                      <button className="block px-4 py-2 text-left hover:bg-gray-100"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setUttarakhandSubmenuOpen(false);}} >
                       Rishikesh
                      </button>
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* International */}
          <div className="relative mx-2 ">
          <div className="flex">
            <NavLink
              to="/international"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } >
              <button className="block">INTERNATIONAL</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)}>
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isInternationalSubmenuOpen && (
              <div className="absolute left-20 bg-green-400 justify-center items-center shadow-lg z-50 mt-4">
                <NavLink
                  to="/international/singapore"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)}  >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                  Singapore
                  </button>
                </NavLink>
                <NavLink
                  to="/international/maldives"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                   Maldives
                  </button>
                </NavLink>
                <NavLink
                  to="/international/malaysia"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                   Malaysia
                  </button>
                </NavLink>
                <NavLink
                  to="/international/dubai"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  }
                  onClick={() => setInternationalSubmenuOpen(false)}  >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Dubai
                  </button>
                </NavLink>
                <NavLink
                  to="/international/thailand"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Thailand
                  </button>
                </NavLink>
                <NavLink
                  to="/international/bali"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">
                    Bali
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          {/* Activities*/}
          <div className="relative mx-2">
          <div className="flex">
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
              <button className="block ">ACTIVITIES</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)} >
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isActivitiesSubmenuOpen && (
              <div className="absolute w-18 left-8 bg-green-400 shadow-lg z-50 mt-4">
                <NavLink
                  to="/activities/riverrafting"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setActivitiesSubmenuOpen(false)} >
                  <button className="block px-7 w-40 py-2 text-left hover:bg-gray-100">
                   River Rafting
                  </button>
                </NavLink>
                <NavLink
                  to="/activities/paragliding"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setActivitiesSubmenuOpen(false)}  >
                  <button className="block px-9 py-2 justify-center items-center text-left hover:bg-gray-100">
                    Paragliding
                  </button>
                </NavLink>
                <NavLink
                  to="/activities/hiking"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setActivitiesSubmenuOpen(false)} >
                  <button className="block px-14  justify-center items-center py-2 text-left hover:bg-gray-100">
                    Hiking
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
            ABOUT US
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline mx-2 hover:no-underline focus:no-underline` }>
            REVIEWS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline mx-2 hover:no-underline focus:no-underline`}>
            CONTACT
          </NavLink>
        </div>
      </div>
{/* mobile */}
<div className="md:hidden bg-green-500 text-white p-4">
  <div className="flex justify-between items-center">
     <button
          className="flex items-center justify-between  w-full text-black bg-green-500"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Menu</span>
          <span className="ml-2"> {isMobileMenuOpen ? "✕" : "☰"}</span>
        </button>
  </div>
  
  {isMobileMenuOpen && (
    <div className="absolute my-2 left-0 w-full bg-green-500 text-white p-4  z-50">
      <div className="">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium"  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
          HOME
        </button>
      </NavLink>
        <div className="flex">
        <NavLink
        to="/india"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} block py-2 text-left font-medium no-underline hover:no-underline focus:no-underline`}>
        <button className="block text-left">INDIA</button>
      </NavLink>
        <span
            className={`ml-48 px-3 py-2 cursor-pointer ${
              isIndiaSubmenuOpen ? "text-white-500" : "text-gray-600"
            } hover:text-gray-800`}
            onClick={() => setIndiaSubmenuOpen(!isIndiaSubmenuOpen)}>
            {isIndiaSubmenuOpen ? "▲" : "▼"} {/* Toggle icon */}
          </span>
        </div>
        {isIndiaSubmenuOpen && (
          <div className="ml-4">
            <NavLink
              to="/india/andaman"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
              <button className="block py-2 text-left">Andaman Tour</button>
            </NavLink>
            <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isHimachalSubmenuOpen ? activeStyle : inactiveStyle }`}
          onClick={() => setHimachalSubmenuOpen(!isHimachalSubmenuOpen)}>
          Himachal
        </button>
        <span
          className={`ml-36 px-3 py-2 cursor-pointer ${
            isHimachalSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setHimachalSubmenuOpen(!isHimachalSubmenuOpen)}>
          {isHimachalSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isHimachalSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/Himachal/kasol"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Kasol</button>
                </NavLink>
              </div> )}
              <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isKeralaSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setKeralaSubmenuOpen(!isKeralaSubmenuOpen)} >
          Kerala
        </button>
        <span
          className={`ml-44 px-2 py-2 cursor-pointer ${
            isKeralaSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setKeralaSubmenuOpen(!isKeralaSubmenuOpen)} >
          {isKeralaSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isKeralaSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/kerala/india/Munnar"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Munnar</button>
                </NavLink>
              </div> )}
              <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isTamilNaduSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)}>
          Tamil Nadu
        </button>
        <span
          className={`ml-36 py-2 cursor-pointer ${
            isTamilNaduSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)} >
          {isTamilNaduSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isTamilNaduSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/tamilnadu/ooty"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Ooty</button>
                </NavLink>
                <NavLink
                  to="/india/tamilnadu/kodaikanal"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
                  <button className="block py-2 text-left">Kodaikanal</button>
                </NavLink>
              </div> )}
              <NavLink
                  to="/goa"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Goa</button>
                </NavLink>
              <NavLink
              to="/india/darjeeling"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
              <button className="block py-2 text-left font-medium">
                Darjeeling
              </button>
            </NavLink>
            <NavLink
              to="/india/sikkim"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Sikkim
              </button>
            </NavLink>
            <NavLink
              to="/india/kashmir"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Kashmir
              </button>
            </NavLink>
            <NavLink
              to="/india/ladakh"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Ladakh
              </button>
            </NavLink>
            <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isUttarakhandSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)}>
          Uttarakhand
        </button>
        <span
          className={`ml-32 px-2  py-2 cursor-pointer ${
            isUttarakhandSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)} >
          {isUttarakhandSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isUttarakhandSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/uttarakhand/nainital"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Nainital</button>
                </NavLink>
                <NavLink
                  to="/india/uttarakhand/rishikesh"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
                  <button className="block py-2 text-left">Rishikesh</button>
                </NavLink>
              </div> )}
                  </div>
                )}
              </div>
      <div>
        <div className="flex">
            <button
                   className={`${isInternationalSubmenuOpen ? activeStyle : inactiveStyle} block py-2 text-left font-medium no-underline hover:no-underline focus:no-underline`}
              onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)} >
              INTERNATIONAL
            </button>
            <span
            className={`ml-32 py-2 cursor-pointer ${
              isInternationalSubmenuOpen ? "text-white-500" : "text-gray-600"
            } hover:text-gray-800`}
            onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)} >
            {isInternationalSubmenuOpen ? "▲" : "▼"} {/* Toggle icon */}
          </span>
            </div>
            {isInternationalSubmenuOpen && (
              <div>
                <NavLink
                  to="/international/singapore"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Singapore</button>
                </NavLink>
                <NavLink
                  to="/international/maldives"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Maldives</button>
                </NavLink>
                <NavLink
                  to="/international/malaysia"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Malaysia</button>
                </NavLink>
                <NavLink
                  to="/international/dubai"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Dubai</button>
                </NavLink>
                <NavLink
                  to="/international/thailand"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Thailand</button>
                </NavLink>
                <NavLink
                  to="/international/bali"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Bali</button>
                </NavLink>
                </div>
            )}
            </div>
      <div>
        <div className="flex">
        <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isActivitiesSubmenuOpen ? activeStyle : inactiveStyle }`}
          onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)} >
          ACTIVITIES
        </button>
            <span
          className={`ml-36 px-6 py-2 cursor-pointer ${
            isActivitiesSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)}>
          {isActivitiesSubmenuOpen ? "▲" : "▼"} {/* Toggle icon */}
        </span>
            </div>
            {isActivitiesSubmenuOpen && (
              <div>
                <NavLink
                  to="/activities/riverraftingr"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">River Rafting</button>
                </NavLink>
                <NavLink
                  to="/activities/paragliding"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">Paragliding</button>
                </NavLink>
                <NavLink
                  to="/activities/hiking"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">Hiking</button>
                </NavLink>
                </div>
            )}
            </div>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium">
          ABOUT US
        </button>
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}>
        <button className="block py-2 text-left font-medium">
          REVIEWS
        </button>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium">
          CONTACT
        </button>
      </NavLink>
    </div>
  )}
  </div>
  </div>
  );
};

export default Navbar;












// import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [subDropdownOpen, setSubDropdownOpen] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState(null);
//   const location = useLocation();

//   const handleDropdownToggle = (dropdown) => {
//     setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
//     setSubDropdownOpen(null);
//   };

//   const handleSubDropdownToggle = (subDropdown) => {
//     setSubDropdownOpen(subDropdownOpen === subDropdown ? null : subDropdown);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleMobileSubDropdownToggle = (subDropdown) => {
//     setMobileSubDropdownOpen(
//       mobileSubDropdownOpen === subDropdown ? null : subDropdown
//     );
//   };

//   const handleItemClick = () => {
//     setDropdownOpen(null);
//     setSubDropdownOpen(null);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="flex items-center justify-between p-4 pl-12 pr-12 shadow-md bg-white">
//       <div className="flex-shrink-0 flex">
//         <NavLink
//           to="/"
//           className="text-black font-bold text-xl m-3"
//           onClick={handleItemClick}>
//           TEN Travel
//         </NavLink>
//       </div>
//       <ul className="hidden lg:flex space-x-8">
//         <button>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//             }
//             onClick={handleItemClick}>
//             HOME
//           </NavLink>
//         </button>

//         {/* India */}
//         <button className="relative">
//           <div
//             onClick={() => handleDropdownToggle("india")}
//             className={`hover:text-green-500 ${
//               dropdownOpen === "india" || location.pathname.includes("india")
//                 ? "text-green-500 font-bold"
//                 : ""
//             } cursor-pointer`}>
//             INDIA
//             <span className="ml-2">&#9660;</span>
//           </div>
//           {dropdownOpen === "india" && (
//             <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/andaman" onClick={handleItemClick}>
//                   Andaman Tour
//                 </NavLink>
//               </button>
//               <button
//                 onClick={() => handleSubDropdownToggle("himachal")}
//                 className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 <div className="flex items-center">
//                   Himachal
//                   <span className="ml-2">&#9654;</span>
//                 </div>
//                 {subDropdownOpen === "himachal" && (
//                   <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/himachal/kasol"
//                         onClick={handleItemClick}>
//                         Kasol
//                       </NavLink>
//                     </button>
//                   </ul>
//                 )}
//               </button>
//               <button
//                 onClick={() => handleSubDropdownToggle("kerala")}
//                 className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 <div className="flex items-center">
//                   Kerala
//                   <span className="ml-2">&#9654;</span>
//                 </div>
//                 {subDropdownOpen === "kerala" && (
//                   <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/himachal/munnar"
//                         onClick={handleItemClick}>
//                         Munnar
//                       </NavLink>
//                     </button>
//                   </ul>
//                 )}
//               </button>
//               <button
//                 onClick={() => handleSubDropdownToggle("tamilnadu")}
//                 className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 <div className="flex items-center">
//                   Tamil Nadu
//                   <span className="ml-2">&#9654;</span>
//                 </div>
//                 {subDropdownOpen === "tamilnadu" && (
//                   <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/tamilnadu/Ooty"
//                         onClick={handleItemClick}>
//                         Ooty
//                       </NavLink>
//                     </button>
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/tamilnadu/kodaikanal"
//                         onClick={handleItemClick}>
//                         Kodaikanal
//                       </NavLink>
//                     </button>
//                   </ul>
//                 )}
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/goa" onClick={handleItemClick}>
//                   Goa
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/darjeeling" onClick={handleItemClick}>
//                   Darjeeling
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/sikkim" onClick={handleItemClick}>
//                   Sikkim
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/kashmir" onClick={handleItemClick}>
//                   Kashmir
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/india/ladakh" onClick={handleItemClick}>
//                   Ladakh
//                 </NavLink>
//               </button>
//               <button
//                 onClick={() => handleSubDropdownToggle("uttarakhand")}
//                 className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 <div className="flex items-center">
//                   Uttarakhand
//                   <span className="ml-2">&#9654;</span>
//                 </div>
//                 {subDropdownOpen === "uttarakhand" && (
//                   <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/uttarakhand/nainital"
//                         onClick={handleItemClick}>
//                         Nainital
//                       </NavLink>
//                     </button>
//                     <button className="px-4 py-2 hover:bg-gray-100">
//                       <NavLink
//                         to="/india/uttarakhand/rishikesh"
//                         onClick={handleItemClick}>
//                         Rishikesh
//                       </NavLink>
//                     </button>
//                   </ul>
//                 )}
//               </button>
//             </ul>
//           )}
//         </button>

//         {/* International */}
//         <button className="relative">
//           <div
//             onClick={() => handleDropdownToggle("international")}
//             className={`hover:text-green-500 ${
//               dropdownOpen === "international" ||
//               location.pathname.includes("international")
//                 ? "text-green-500 font-bold"
//                 : ""
//             } cursor-pointer`}>
//             INTERNATIONAL
//             <span className="ml-2">&#9660;</span>
//           </div>
//           {dropdownOpen === "international" && (
//             <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink
//                   to="/international/singapore"
//                   onClick={handleItemClick}>
//                   Singapore
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/international/malaysia" onClick={handleItemClick}>
//                   Malaysia
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/international/dubai" onClick={handleItemClick}>
//                   Dubai
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/international/maldives" onClick={handleItemClick}>
//                   Maldives
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/international/thailand" onClick={handleItemClick}>
//                   Thailand
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/international/bali" onClick={handleItemClick}>
//                   Bali
//                 </NavLink>
//               </button>
//             </ul>
//           )}
//         </button>

//         {/* Activities */}
//         <button className="relative">
//           <div
//             onClick={() => handleDropdownToggle("activities")}
//             className={`hover:text-green-500 ${
//               dropdownOpen === "activities" ||
//               location.pathname.includes("activities")
//                 ? "text-green-500 font-bold"
//                 : ""
//             } cursor-pointer`}>
//             ACTIVITIES
//             <span className="ml-2">&#9660;</span>
//           </div>
//           {dropdownOpen === "activities" && (
//             <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink
//                   to="/activities/riverrafting"
//                   onClick={handleItemClick}>
//                   River Rafting
//                 </NavLink>
//               </button>

//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities/paragliding" onClick={handleItemClick}>
//                   Paragliding
//                 </NavLink>
//               </button>
//               <button className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities/hiking" onClick={handleItemClick}>
//                   Hiking
//                 </NavLink>
//               </button>
//             </ul>
//           )}
//         </button>

//         <button>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//             }
//             onClick={handleItemClick}>
//             ABOUT US
//           </NavLink>
//         </button>
//         <button>
//           <NavLink
//             to="/reviews"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//             }
//             onClick={handleItemClick}>
//             REVIEWS
//           </NavLink>
//         </button>
//         <button>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//             }
//             onClick={handleItemClick}>
//             CONTACT
//           </NavLink>
//         </button>
//       </ul>

//       {/* Mobile toggle */}
//       <div
//         className="lg:hidden flex items-center space-x-2"
//         onClick={toggleMobileMenu}>
//         <span className="text-2xl cursor-pointer">&#9776;</span>
//       </div>

//       {/* Mobile Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } shadow-lg z-50`}>
//         <div className="p-6">
//           <button onClick={toggleMobileMenu} className="text-2xl mb-6">
//             &#10005;
//           </button>

//           <ul className="space-y-4 ">
//             <button className="flex">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//                 }
//                 onClick={handleItemClick}>
//                 HOME
//               </NavLink>
//             </button>

//             {/* India */}
//             <button className="flex">
//               <div
//                 onClick={() => handleDropdownToggle("india")}
//                 className={`flex justify-between items-center cursor-pointer ${
//                   dropdownOpen === "india" ? "text-green-500 font-bold" : ""
//                 }`}>
//                 INDIA
//                 <span className="ml-2">&#9654;</span>
//               </div>
//               {dropdownOpen === "india" && (
//                 <ul className="ml-4 mt-2 space-y-2">
//                   <button className="flex">
//                     <NavLink to="/india/andaman" onClick={handleItemClick}>
//                       Andaman Tour
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <div
//                       onClick={() => handleMobileSubDropdownToggle("himachal")}
//                       className="flex justify-between items-center cursor-pointer">
//                       Himachal
//                       <span className="ml-2 ">&#9654;</span>
//                     </div>
//                     {mobileSubDropdownOpen === "himachal" && (
//                       <ul className="ml-4 mt-2 space-y-2 ">
//                         <button className="flex">
//                           <NavLink
//                             to="/india/himachal/kasol"
//                             onClick={handleItemClick}>
//                             Kasol
//                           </NavLink>
//                         </button>
//                       </ul>
//                     )}
//                   </button>
//                   <button className="flex">
//                     <div
//                       onClick={() => handleMobileSubDropdownToggle("kerala")}
//                       className="flex justify-between items-center cursor-pointer">
//                       Kerala
//                       <span className="ml-2 ">&#9654;</span>
//                     </div>
//                     {mobileSubDropdownOpen === "kerala" && (
//                       <ul className="ml-4 mt-2 space-y-2 ">
//                         <button className="flex">
//                           <NavLink
//                             to="/india/kerala/munnar"
//                             onClick={handleItemClick}>
//                             Munnar
//                           </NavLink>
//                         </button>
//                       </ul>
//                     )}
//                   </button>
//                   <button className="flex">
//                     <div
//                       onClick={() => handleMobileSubDropdownToggle("tamilnadu")}
//                       className="flex justify-between items-center cursor-pointer">
//                       Tamil Nadu
//                       <span className="ml-1">&#9654;</span>
//                     </div>
//                     {mobileSubDropdownOpen === "tamilnadu" && (
//                       <ul className="ml-4 mt-2 space-y-2">
//                         <button className="flex">
//                           <NavLink
//                             to="/india/tamilnadu/Ooty"
//                             onClick={handleItemClick}>
//                             Ooty
//                           </NavLink>
//                         </button>
//                         <button className="flex">
//                           <NavLink
//                             to="/india/tamilnadu/kodaikanal"
//                             onClick={handleItemClick}>
//                             Kodaikanal
//                           </NavLink>
//                         </button>
//                       </ul>
//                     )}
//                   </button>
//                   <button className="flex">
//                     <NavLink to="/india/goa" onClick={handleItemClick}>
//                       Goa
//                     </NavLink>
//                   </button>

//                   <button className="flex">
//                     <NavLink to="/india/darjeeling" onClick={handleItemClick}>
//                       Darjeeling
//                     </NavLink>
//                   </button>

//                   <button className="flex">
//                     <NavLink to="/india/sikkim" onClick={handleItemClick}>
//                       Sikkim
//                     </NavLink>
//                   </button>

//                   <button className="flex">
//                     <NavLink to="/india/kashmir" onClick={handleItemClick}>
//                       Kashmir
//                     </NavLink>
//                   </button>

//                   <button className="flex">
//                     <NavLink to="/india/ladakh" onClick={handleItemClick}>
//                       Ladakh
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <div
//                       onClick={() =>
//                         handleMobileSubDropdownToggle("uttarakhand")
//                       }
//                       className="flex justify-between items-center cursor-pointer">
//                       Uttarakhand
//                       <span className="ml-2">&#9654;</span>
//                     </div>
//                     {mobileSubDropdownOpen === "uttarakhand" && (
//                       <ul className="ml-4 mt-2 space-y-2">
//                         <button>
//                           <NavLink
//                             to="/india/uttarakhand/nainital"
//                             onClick={handleItemClick}>
//                             Nainital
//                           </NavLink>
//                         </button>
//                         <button>
//                           <NavLink
//                             to="/india/uttarakhand/rishikesh"
//                             onClick={handleItemClick}>
//                             Rishikesh
//                           </NavLink>
//                         </button>
//                       </ul>
//                     )}
//                   </button>
//                 </ul>
//               )}
//             </button>

//             {/* International  */}
//             <button className="flex">
//               <div
//                 onClick={() => handleDropdownToggle("international")}
//                 className={`flex justify-between items-center cursor-pointer ${
//                   dropdownOpen === "international"
//                     ? "text-green-500 font-bold"
//                     : ""
//                 }`}>
//                 INTERNATIONAL
//                 <span className="ml-2">&#9654;</span>
//               </div>
//               {dropdownOpen === "international" && (
//                 <ul className="ml-4 mt-2 space-y-2">
//                   <button>
//                     <NavLink
//                       to="/international/singapore"
//                       onClick={handleItemClick}>
//                       Singapore
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink
//                       to="/international/malaysia"
//                       onClick={handleItemClick}>
//                       Malaysia
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink
//                       to="/international/dubai"
//                       onClick={handleItemClick}>
//                       Dubai
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink
//                       to="/international/maldives"
//                       onClick={handleItemClick}>
//                       Maldives
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink
//                       to="/international/thailand"
//                       onClick={handleItemClick}>
//                       Thailand
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink to="/international/bali" onClick={handleItemClick}>
//                       Bali
//                     </NavLink>
//                   </button>
//                 </ul>
//               )}
//             </button>

//             {/* Activities */}
//             <button className="flex">
//               <div
//                 onClick={() => handleDropdownToggle("activities")}
//                 className={`flex justify-between items-center cursor-pointer ${
//                   dropdownOpen === "activities"
//                     ? "text-green-500 font-bold"
//                     : ""
//                 }`}>
//                 ACTIVITIES
//                 <span className="ml-2">&#9654;</span>
//               </div>
//               {dropdownOpen === "activities" && (
//                 <ul className="ml-4 mt-2 space-y-2">
//                   <button className="flex">
//                     <NavLink
//                       to="/activities/riverrafting"
//                       onClick={handleItemClick}>
//                       River Rafting
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink
//                       to="/activities/paragliding"
//                       onClick={handleItemClick}>
//                       Paragliding
//                     </NavLink>
//                   </button>
//                   <button className="flex">
//                     <NavLink to="/activities/hiking" onClick={handleItemClick}>
//                       Hiking
//                     </NavLink>
//                   </button>
//                 </ul>
//               )}
//             </button>

//             <button className="flex">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//                 }
//                 onClick={handleItemClick}>
//                 ABOUT US
//               </NavLink>
//             </button>
//             <button className="flex">
//               <NavLink
//                 to="/reviews"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//                 }
//                 onClick={handleItemClick}>
//                 REVIEWS
//               </NavLink>
//             </button>
//             <button className="flex">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "hover:text-green-500"
//                 }
//                 onClick={handleItemClick}>
//                 CONTACT
//               </NavLink>
//             </button>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;















