import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/short-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md">
      <nav className="p-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-10 py-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between ">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  {" "}
                  <img
                    className="block lg:hidden w-[150px]"
                    src={logo}
                    alt="Logo"
                  />
                </Link>

                <Link to="/">
                  <img
                    className="hidden lg:block w-[200px]"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
              </div>
              {/* Links */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 ">
                  <Link
                    to="/"
                    className="hover:text-[#dc3545] p-2.5 rounded-md text-base font-bold sans-serif transition ease-in duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-[#dc3545] p-2.5 rounded-md text-base font-bold sans-serif transition ease-in duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-[#dc3545] p-2.5 rounded-md text-base font-bold sans-serif transition ease-in duration-200"
                  >
                    About Us
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-[#dc3545] p-2.5 rounded-md text-base font-bold sans-serif transition ease-in duration-200"
                  >
                    Contact Us
                  </Link>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link
              to="/"
              className="hover:text-[#dc3545] py-1 rounded-md text-base font-bold sans-serif transition ease-in duration-200 block"
            >
              Home
            </Link>
            <Link
              to="#"
              className="hover:text-[#dc3545] py-1 rounded-md text-base font-bold sans-serif transition ease-in duration-200 block"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about"
              className="hover:text-[#dc3545] py-1 rounded-md text-base font-bold sans-serif transition ease-in duration-200 block"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="hover:text-[#dc3545] py-1 rounded-md text-base font-bold sans-serif transition ease-in duration-200 block"
            >
              Contact Us
            </Link>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
