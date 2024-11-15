import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    setSubDropdownOpen(null);
  };

  const handleSubDropdownToggle = (subDropdown) => {
    setSubDropdownOpen(subDropdownOpen === subDropdown ? null : subDropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileSubDropdownToggle = (subDropdown) => {
    setMobileSubDropdownOpen(
      mobileSubDropdownOpen === subDropdown ? null : subDropdown
    );
  };

  const handleItemClick = () => {
    setDropdownOpen(null);
    setSubDropdownOpen(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-4 pl-12 pr-12 shadow-md bg-white">
      <div className="flex-shrink-0 flex">
        <NavLink to="/" className="text-black font-bold text-xl m-3" onClick={handleItemClick}>
          TEN Travel
        </NavLink>
      </div>
      <ul className="hidden lg:flex space-x-8">
        <button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }
            onClick={handleItemClick}>
            HOME
          </NavLink>
        </button>

        {/* India */}
        <button className="relative">
          <div
            onClick={() => handleDropdownToggle("india")}
            className={`hover:text-green-500 ${
              dropdownOpen === "india" || location.pathname.includes("india")
                ? "text-green-500 font-bold"
                : ""
            } cursor-pointer`}>
            INDIA
            <span className="ml-2">&#9660;</span>
          </div>
          {dropdownOpen === "india" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/andaman" onClick={handleItemClick}>
                  Andaman Tour
                </NavLink>
              </button>
              <button
                onClick={() => handleSubDropdownToggle("himachal")}
                className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  Himachal
                  <span className="ml-2">&#9654;</span>
                </div>
                {subDropdownOpen === "himachal" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/himachal/kasol" onClick={handleItemClick}>
                        Kasol
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>
              <button
                onClick={() => handleSubDropdownToggle("kerala")}
                className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                Kerala
                  <span className="ml-2">&#9654;</span>
                </div>
                {subDropdownOpen === "kerala" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/himachal/munnar" onClick={handleItemClick}>
                        Munnar
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>
              <button
                onClick={() => handleSubDropdownToggle("tamilnadu")}
                className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                 Tamil Nadu
                  <span className="ml-2">&#9654;</span>
                </div>
                {subDropdownOpen === "tamilnadu" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/Ooty" onClick={handleItemClick}>
                       Ooty
                      </NavLink>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/kodaikanal" onClick={handleItemClick}>
                      Kodaikanal
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/goa" onClick={handleItemClick}>
                  Goa
                </NavLink>
              </button>              
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/darjeeling" onClick={handleItemClick}>
                Darjeeling
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/sikkim" onClick={handleItemClick}>
                  Sikkim
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/kashmir" onClick={handleItemClick}>
                Kashmir
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/ladakh" onClick={handleItemClick}>
                Ladakh
                </NavLink>
              </button>
              <button
                onClick={() => handleSubDropdownToggle("uttarakhand")}
                className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  Uttarakhand
                  <span className="ml-2">&#9654;</span>
                </div>
                {subDropdownOpen === "uttarakhand" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/uttarakhand/nainital" onClick={handleItemClick}>
                      Nainital
                      </NavLink>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/uttarakhand/rishikesh" onClick={handleItemClick}>
                      Rishikesh
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>
            </ul>
          )}
        </button>

        {/* International */}
        <button className="relative">
          <div
            onClick={() => handleDropdownToggle("international")}
            className={`hover:text-green-500 ${
              dropdownOpen === "international" ||
              location.pathname.includes("international")
                ? "text-green-500 font-bold"
                : ""
            } cursor-pointer`}>
            INTERNATIONAL
            <span className="ml-2">&#9660;</span>
          </div>
          {dropdownOpen === "international" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/singapore" onClick={handleItemClick}>
                  Singapore
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/malaysia" onClick={handleItemClick}>
                Malaysia
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/dubai" onClick={handleItemClick}>
                Dubai
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/maldives" onClick={handleItemClick}>
                Maldives
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/thailand" onClick={handleItemClick}>
                Thailand
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/bali" onClick={handleItemClick}>
                Bali
                </NavLink>
              </button>             
            </ul>
          )}
        </button>

        {/* Activities */}
        <button className="relative">
          <div
            onClick={() => handleDropdownToggle("activities")}
            className={`hover:text-green-500 ${
              dropdownOpen === "activities" ||
              location.pathname.includes("activities")
                ? "text-green-500 font-bold"
                : ""
            } cursor-pointer`}>
            ACTIVITIES
            <span className="ml-2">&#9660;</span>
          </div>
          {dropdownOpen === "activities" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/riverrafting" onClick={handleItemClick}>
                  River Rafting
                </NavLink>
              </button>

              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/paragliding" onClick={handleItemClick}>
                Paragliding
                </NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/hiking" onClick={handleItemClick}>
                  Hiking
                </NavLink>
              </button>
            </ul>
          )}
        </button>

    
        <button>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }
            onClick={handleItemClick}>
            ABOUT US
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }
            onClick={handleItemClick}>
            REVIEWS
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }
            onClick={handleItemClick}>
            CONTACT
          </NavLink>
        </button>
      </ul>

      {/* Mobile toggle */}
      <div className="lg:hidden flex items-center space-x-2" onClick={toggleMobileMenu}>
        <span className="text-2xl cursor-pointer">&#9776;</span>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50`}>
        <div className="p-6">
          <button onClick={toggleMobileMenu} className="text-2xl mb-6">&#10005;</button>

          <ul className="space-y-4 ">
            <button className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }
                onClick={handleItemClick}>
                HOME
              </NavLink>
            </button>

            {/* India */}
            <button  className="flex">
              <div
                onClick={() => handleDropdownToggle("india")}
                className={`flex justify-between items-center cursor-pointer ${
                  dropdownOpen === "india" ? "text-green-500 font-bold" : ""
                }`}>
                INDIA
                <span className="ml-2">&#9654;</span>
              </div>
              {dropdownOpen === "india" && (
                <ul className="ml-4 mt-2 space-y-2">
                  <button  className="flex">
                    <NavLink to="/india/andaman" onClick={handleItemClick}>
                      Andaman Tour
                    </NavLink>
                  </button>
                  <button className="flex">
                    <div
                      onClick={() => handleMobileSubDropdownToggle("himachal")}
                      className="flex justify-between items-center cursor-pointer">
                        Himachal
                      <span className="ml-2 ">&#9654;</span>
                    </div>
                    {mobileSubDropdownOpen === "himachal" && (
                      <ul className="ml-4 mt-2 space-y-2 ">
                        <button className="flex">
                          <NavLink to="/india/himachal/kasol" onClick={handleItemClick}>
                          Kasol
                          </NavLink>
                        </button>
                      </ul>
                    )}
                  </button>
                  <button className="flex">
                    <div
                      onClick={() => handleMobileSubDropdownToggle("kerala")}
                      className="flex justify-between items-center cursor-pointer">
                        Kerala
                      <span className="ml-2 ">&#9654;</span>
                    </div>
                    {mobileSubDropdownOpen === "kerala" && (
                      <ul className="ml-4 mt-2 space-y-2 ">
                        <button className="flex">
                          <NavLink to="/india/kerala/munnar" onClick={handleItemClick}>
                          Munnar
                          </NavLink>
                        </button>
                      </ul>
                    )}
                  </button>
                  <button className="flex">
                    <div
                      onClick={() => handleMobileSubDropdownToggle("tamilnadu")}
                      className="flex justify-between items-center cursor-pointer">
                        Tamil Nadu
                      <span className="ml-1">&#9654;</span>
                    </div>
                    {mobileSubDropdownOpen === "tamilnadu" && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <button className="flex">
                          <NavLink to="/india/tamilnadu/Ooty" onClick={handleItemClick}>
                          Ooty
                          </NavLink>
                        </button>
                        <button className="flex" >
                          <NavLink to="/india/tamilnadu/kodaikanal" onClick={handleItemClick}>
                          Kodaikanal
                          </NavLink>
                        </button>
                      </ul>
                    )}
                  </button>
                  <button  className="flex">
                    <NavLink to="/india/goa" onClick={handleItemClick}>
                      Goa
                    </NavLink>
                  </button>
                  
                  <button  className="flex">
                    <NavLink to="/india/darjeeling" onClick={handleItemClick}>
                    Darjeeling
                    </NavLink>
                  </button>
                  
                  <button  className="flex">
                    <NavLink to="/india/sikkim" onClick={handleItemClick}>
                     Sikkim
                    </NavLink>
                  </button>
                  
                  <button  className="flex">
                    <NavLink to="/india/kashmir" onClick={handleItemClick}>
                      Kashmir
                    </NavLink>
                  </button>
                  
                  <button  className="flex">
                    <NavLink to="/india/ladakh" onClick={handleItemClick}>
                     Ladakh
                    </NavLink>
                  </button>
                  <button className="flex">
                    <div
                      onClick={() => handleMobileSubDropdownToggle("uttarakhand")}
                      className="flex justify-between items-center cursor-pointer">
                        Uttarakhand
                      <span className="ml-2">&#9654;</span>
                    </div>
                    {mobileSubDropdownOpen === "uttarakhand" && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <button >
                          <NavLink to="/india/uttarakhand/nainital" onClick={handleItemClick}>
                          Nainital
                          </NavLink>
                        </button>
                        <button >
                          <NavLink to="/india/uttarakhand/rishikesh" onClick={handleItemClick}>
                          Rishikesh
                          </NavLink>
                        </button>
                      </ul>
                    )}
                  </button>
                </ul>
              )}
            </button>

            {/* International  */}
            <button  className="flex">
              <div
                onClick={() => handleDropdownToggle("international")}
                className={`flex justify-between items-center cursor-pointer ${
                  dropdownOpen === "international" ? "text-green-500 font-bold" : ""
                }`}>
                INTERNATIONAL
                <span className="ml-2">&#9654;</span>
              </div>
              {dropdownOpen === "international" && (
                <ul className="ml-4 mt-2 space-y-2">
                  <button >
                    <NavLink to="/international/singapore" onClick={handleItemClick}>
                      Singapore
                    </NavLink>
                  </button >
                  <button className="flex">
                    <NavLink to="/international/dubai" onClick={handleItemClick}>
                    Dubai
                    </NavLink>
                  </button >
                  <button className="flex">
                    <NavLink to="/international/maldives" onClick={handleItemClick}>
                    Maldives
                    </NavLink>
                  </button>
                  <button className="flex">
                    <NavLink to="/international/thailand" onClick={handleItemClick}>
                    Thailand
                    </NavLink>
                  </button>
                  <button className="flex">
                    <NavLink to="/international/bali" onClick={handleItemClick}>
                      Bali
                    </NavLink>
                  </button>
                </ul>
              )}
            </button>

            {/* Activities */}
            <button  className="flex">
              <div
                onClick={() => handleDropdownToggle("activities")}
                className={`flex justify-between items-center cursor-pointer ${
                  dropdownOpen === "activities" ? "text-green-500 font-bold" : ""
                }`}>
                ACTIVITIES
                <span className="ml-2">&#9654;</span>
              </div>
              {dropdownOpen === "activities" && (
                <ul className="ml-4 mt-2 space-y-2">
                  <button className="flex">
                    <NavLink to="/activities/riverrafting" onClick={handleItemClick}>
                      River Rafting
                    </NavLink>
                  </button>
                  <button className="flex">
                    <NavLink to="/activities/paragliding" onClick={handleItemClick}>
                    Paragliding
                    </NavLink>
                  </button>
                  <button className="flex">
                    <NavLink to="/activities/hiking" onClick={handleItemClick}>
                      Hiking
                    </NavLink>
                  </button>
                </ul>
              )}
            </button>

         
            <button  className="flex">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }
                onClick={handleItemClick}>
                ABOUT US
              </NavLink>
            </button >
            <button  className="flex">
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }
                onClick={handleItemClick}>
                REVIEWS
              </NavLink>
            </button >
            <button  className="flex">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "hover:text-green-500"
                }
                onClick={handleItemClick}>
                CONTACT
              </NavLink>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
















