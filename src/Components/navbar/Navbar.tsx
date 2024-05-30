import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <MdOutlinePersonOutline className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span className="ml-3 text-xl">Employ Management</span>
        </a>
        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/addemp" className="mr-5 hover:text-gray-900">
            Add Employ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
