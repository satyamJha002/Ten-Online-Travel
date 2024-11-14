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
          TEN Traviling
        </NavLink>
      </div>
      <ul className="hidden lg:flex space-x-8">
        <button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            HOME
          </NavLink>
        </button>

        {/* india */}
        <button className="relative">
          <button
            onClick={() => handleDropdownToggle("india")}
            className={`hover:text-green-500 ${
              dropdownOpen === "india" || location.pathname.includes("india")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            INDIA
            <span className="ml-2">&#9660;</span>
          </button>
          {dropdownOpen === "india" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/Andaman Tour">Andaman Tour</NavLink>
              </button>
              <button
                onClick={() => handleSubDropdownToggle("himachal")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/himachal" className="flex items-center">
                  Himachal
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "himachal" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/himachal/kasol">Kasol</NavLink>
                    </button>
                  </ul>
                )}
              </button>
              <button
                onClick={() => handleSubDropdownToggle("kerala")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/kerala" className="flex items-center">
                  Kerala
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "kerala" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/kerala/munnar">Munnar</NavLink>
                    </button>
                  </ul>
                )}
              </button>

              <button
                onClick={() => handleSubDropdownToggle("tamilnadu")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/tamilnadu" className="flex items-center">
                  Tamil Nadu
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "tamilnadu" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/ooty">Ooty</NavLink>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/kodaikanal">
                        Kodaikanal
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>

              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/goa">Goa</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/tamilnadu">Tamil Nadu</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/sikkim">Sikkim</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/darjeeling">Darjeeling</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/kashmir">Kashmir</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/ladakh">Ladakh</NavLink>
              </button>

              <button
                onClick={() => handleSubDropdownToggle("uttarakhand")}
                className="relative px-4 py-2 hover:bg-gray-100">
                <NavLink to="/india/uttarakhand" className="flex items-center">
                  Uttarakhand
                  <span className="ml-2">&#9654;</span>
                </NavLink>
                {subDropdownOpen === "uttarakhand" && (
                  <ul className="absolute top-0 left-full mt-0 w-40 bg-white border border-gray-200 shadow-lg">
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/nainital">Nainital</NavLink>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100">
                      <NavLink to="/india/tamilnadu/rishikesh">
                        Rishikesh
                      </NavLink>
                    </button>
                  </ul>
                )}
              </button>
            </ul>
          )}
        </button>

        {/* international*/}
        <button className="relative">
          <button
            onClick={() => handleDropdownToggle("international")}
            className={`hover:text-green-500 ${
              dropdownOpen === "international" ||
              location.pathname.includes("international")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            INTERNATIONAL
            <span className="ml-2">&#9660;</span>
          </button>
          {dropdownOpen === "international" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/singapore">Singapore</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/malaysia">Malaysia</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/dubai">Dubai</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/maldives">Maldives</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/thailand">Thailand</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/international/bali">Bali</NavLink>
              </button>
            </ul>
          )}
        </button>

        {/* activities */}
        <button className="relative">
          <button
            onClick={() => handleDropdownToggle("activities")}
            className={`hover:text-green-500 ${
              dropdownOpen === "activities" ||
              location.pathname.includes("activities")
                ? "text-green-500 font-bold"
                : ""
            }`}>
            ACTIVITIES
            <span className="ml-2">&#9660;</span>
          </button>
          {dropdownOpen === "activities" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/riverrafting">River Rafting</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/paragliding">Paragliding</NavLink>
              </button>
              <button className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities/hiking">Hiking</NavLink>
              </button>
            </ul>
          )}
        </button>
        <button>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            ABOUT US
          </NavLink>
        </button>

        <button>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            REVIEWS
          </NavLink>
        </button>

        <button>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "hover:text-green-500"
            }>
            CONTACT
          </NavLink>
        </button>
      </ul>

      {/* Mobile Menu */}
      <button
        className="lg:hidden flex items-center space-x-2"
        onClick={toggleMobileMenu}>
        <span className="text-2xl">&#9776;</span>
      </button>
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}>
        <ul className="space-y-4 p-6">
          <button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              HOME
            </NavLink>
          </button>
          {/* india */}
          <button>
            <button
              onClick={() => handleDropdownToggle("india")}
              className={`w-full text-left ${
                dropdownOpen === "india" || location.pathname.includes("india")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              INDIA
              <span className="ml-2">&#9660;</span>
            </button>
            {dropdownOpen === "india" && (
              <ul className="ml-4 space-y-2">
                <button>
                  <NavLink to="/india/himachal" onClick={toggleMobileMenu}>
                    Himachal
                  </NavLink>
                  <button
                    onClick={() => handleMobileSubDropdownToggle("himachal")}
                    className="ml-2">
                    <span className="ml-2">&#9660;</span>
                  </button>
                  {mobileSubDropdownOpen === "himachal" && (
                    <ul className="ml-4 space-y-2">
                      <button>
                        <NavLink
                          to="/india/himachal/kasol"
                          onClick={toggleMobileMenu}>
                          Kasol
                        </NavLink>
                      </button>
                    </ul>
                  )}
                </button>
                <button>
                  <NavLink to="/india/kerala" onClick={toggleMobileMenu}>
                    Kerala
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/india/tamilnadu" onClick={toggleMobileMenu}>
                    Tamil Nadu
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/india/andaman" onClick={toggleMobileMenu}>
                    Andaman Tour
                  </NavLink>
                </button>
              </ul>
            )}
          </button>

          {/* international*/}
          <button>
            <button
              onClick={() => handleDropdownToggle("international")}
              className={`w-full text-left ${
                dropdownOpen === "international" ||
                location.pathname.includes("international")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              INTERNATIONAL
              <span className="ml-2">&#9660;</span>
            </button>
            {dropdownOpen === "international" && (
              <ul className="ml-4 space-y-2">
                <button>
                  <NavLink
                    to="/international/singapore"
                    onClick={toggleMobileMenu}>
                    Singapore
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/international/malaysia"
                    onClick={toggleMobileMenu}>
                    Malaysia
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/international/Dubai" onClick={toggleMobileMenu}>
                    Dubai
                  </NavLink>
                </button>

                <button>
                  <NavLink
                    to="/international/maldives"
                    onClick={toggleMobileMenu}>
                    Maldives
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/international/thailand"
                    onClick={toggleMobileMenu}>
                    Thailand
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/international/bali" onClick={toggleMobileMenu}>
                    Bali
                  </NavLink>
                </button>
              </ul>
            )}
          </button>

          {/* activities */}
          <button>
            <button
              onClick={() => handleDropdownToggle("Activities")}
              className={`w-full text-left ${
                dropdownOpen === "Activities" ||
                location.pathname.includes("Activities")
                  ? "text-green-500 font-bold"
                  : "hover:text-green-500"
              }`}>
              Activities
              <span className="ml-2">&#9660;</span>
            </button>
            {dropdownOpen === "Activities" && (
              <ul className="ml-4 space-y-2">
                <button>
                  <NavLink
                    to="/activities/riverrafting"
                    onClick={toggleMobileMenu}>
                    River Rafting
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/activities/paragliding"
                    onClick={toggleMobileMenu}>
                    Paragliding
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/international/hiking"
                    onClick={toggleMobileMenu}>
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
              onClick={toggleMobileMenu}>
              ABOUT US
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              REVIEWS
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "hover:text-green-500"
              }
              onClick={toggleMobileMenu}>
              CONTACT
            </NavLink>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
