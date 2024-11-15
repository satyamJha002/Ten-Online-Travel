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

  return (
    <nav className="flex items-center justify-between p-4 pl-12 pr-12 shadow-md bg-white">
      <div className="flex-shrink-0 flex">
        <NavLink to="/" className="text-black font-bold text-xl m-3">
          TEN Travel
        </NavLink>
      </div>
      <ul className="hidden lg:flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            HOME
          </NavLink>
        </li>

        {/* india */}
        <li className="relative">
          <li
            onClick={() => handleDropdownToggle("india")}
            className={`hover:text-green-500 ${
              dropdownOpen === "india" || location.pathname.includes("india")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            INDIA
            <span className="ml-2">&#9660;</span>
          </li>
          {dropdownOpen === "india" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/Andaman Tour">Andaman Tour</NavLink>
              </li>
              <li
                onClick={() => handleSubDropdownToggle("himachal")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/himachal" className="flex items-center">
                  Himachal
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "himachal" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/himachal/kasol">Kasol</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onClick={() => handleSubDropdownToggle("kerala")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/kerala" className="flex items-center">
                  Kerala
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "kerala" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/kerala/munnar">Munnar</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onClick={() => handleSubDropdownToggle("tamilnadu")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/tamilnadu" className="flex items-center">
                  Tamil Nadu
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "tamilnadu" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/ooty">Ooty</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/kodaikanal">
                        Kodaikanal
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/goa">Goa</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/tamilnadu">Tamil Nadu</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/sikkim">Sikkim</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/darjeeling">Darjeeling</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/kashmir">Kashmir</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/ladakh">Ladakh</NavLink>
              </li>

              <li
                onClick={() => handleSubDropdownToggle("uttarakhand")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/uttarakhand" className="flex items-center">
                  Uttarakhand
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "uttarakhand" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/nainital">Nainital</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/rishikesh">
                        Rishikesh
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* international*/}
        <li className="relative">
          <li
            onClick={() => handleDropdownToggle("international")}
            className={`hover:text-green-500 ${
              dropdownOpen === "international" ||
              location.pathname.includes("international")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            INTERNATIONAL
            <span className="ml-2">&#9660;</span>
          </li>
          {dropdownOpen === "international" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/singapore">Singapore</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/malaysia">Malaysia</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/dubai">Dubai</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/maldives">Maldives</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/thailand">Thailand</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/bali">Bali</NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* activities */}
        <li className="relative">
          <li
            onClick={() => handleDropdownToggle("activities")}
            className={`hover:text-green-500 ${
              dropdownOpen === "activities" ||
              location.pathname.includes("activities")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            ACTIVITIES
            <span className="ml-2">&#9660;</span>
          </li>
          {dropdownOpen === "activities" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/riverrafting">River Rafting</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/paragliding">Paragliding</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/hiking">Hiking</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            ABOUT US
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            REVIEWS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <li
        className="lg:hidden flex items-center space-x-2"
        onClick={toggleMobileMenu}>
        <span className="text-2xl">&#9776;</span>
      </li>
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}>
        <ul className="space-y-4 p-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              HOME
            </NavLink>
          </li>
          {/* india */}
          <li>
            <li
              onClick={() => handleDropdownToggle("india")}
              className={`w-full text-left ${
                dropdownOpen === "india" || location.pathname.includes("india")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              INDIA
              <span className="ml-2">&#9660;</span>
            </li>
            {dropdownOpen === "india" && (
              <ul className="ml-4 space-y-2">
                <li className="flex items-center">
                  <NavLink to="/india/himachal" onClick={toggleMobileMenu}>
                    Himachal
                  </NavLink>
                  <li
                    onClick={() => handleMobileSubDropdownToggle("himachal")}
                    className="ml-2 ">
                    <span className="ml-2">&#9654;</span>
                  </li>
                  {mobileSubDropdownOpen === "himachal" && (
                    <ul className="ml-4 space-y-2">
                      <li>
                        <NavLink
                          to="/india/himachal/kasol"
                          onClick={toggleMobileMenu}>
                          Kasol
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/india/kerala" onClick={toggleMobileMenu}>
                    Kerala
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/india/tamilnadu" onClick={toggleMobileMenu}>
                    Tamil Nadu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/india/andaman" onClick={toggleMobileMenu}>
                    Andaman Tour
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* international*/}
          <li>
            <li
              onClick={() => handleDropdownToggle("international")}
              className={`w-full text-left ${
                dropdownOpen === "international" ||
                location.pathname.includes("international")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              INTERNATIONAL
              <span className="ml-2">&#9660;</span>
            </li>
            {dropdownOpen === "international" && (
              <ul className="ml-4 space-y-2">
                <li>
                  <NavLink
                    to="/international/singapore"
                    onClick={toggleMobileMenu}>
                    Singapore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/international/malaysia"
                    onClick={toggleMobileMenu}>
                    Malaysia
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/international/Dubai" onClick={toggleMobileMenu}>
                    Dubai
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/international/maldives"
                    onClick={toggleMobileMenu}>
                    Maldives
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/international/thailand"
                    onClick={toggleMobileMenu}>
                    Thailand
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/international/bali" onClick={toggleMobileMenu}>
                    Bali
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* activities */}
          <li>
            <li
              onClick={() => handleDropdownToggle("Activities")}
              className={`w-full text-left ${
                dropdownOpen === "Activities" ||
                location.pathname.includes("Activities")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              Activities
              <span className="ml-2">&#9660;</span>
            </li>
            {dropdownOpen === "Activities" && (
              <ul className="ml-4 space-y-2">
                <li>
                  <NavLink
                    to="/activities/riverrafting"
                    onClick={toggleMobileMenu}>
                    River Rafting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/activities/paragliding"
                    onClick={toggleMobileMenu}>
                    Paragliding
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/international/hiking"
                    onClick={toggleMobileMenu}>
                    Hiking
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
