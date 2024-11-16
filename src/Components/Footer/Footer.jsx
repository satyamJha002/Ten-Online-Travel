import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-8 md:space-y-0">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-yellow-500"
                preserveAspectRatio="xMidYMid meet"
                data-bbox="0.36 0.279 243.208 201.268"
                viewBox="0 0 243.913 201.792"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <h1 className="text-xl font-semibold">Ten Travel</h1>
            </div>
            <p>New Delhi, India</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@entrepreneurshipnetwork.net"
                className="text-yellow-400 hover:underline"
              >
                info@entrepreneurshipnetwork.net
              </a>
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/india"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  India
                </Link>
              </li>
              <li>
                <Link
                  to="/international"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  International
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">General</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Termpage"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/DocumentVisa"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Documents Collection & Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white-500">
          <p>@2024 Ten Travel | Developed by Ten Travel Teams</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
