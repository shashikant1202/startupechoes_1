import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import images from "../constants/images";
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const navItemsInfo = [
  { name: "Home", type: "link", path: "/" },
  { name: "Our Services", type: "link", path: "/services" },
  { name: "Startups", type: "link", path: "/startups" },
  { name: "Business", type: "link", path: "/business" },
  { name: "Economic", type: "link", path: "/economic" },
  { name: "Market", type: "link", path: "/market" },
];

const NavItems = ({ name, path, closeMenu }) => (
  <li className="relative group">
    <Link 
      to={path} 
      className="hover:text-red-500 text-gray-800 dark:text-gray-200"
      onClick={closeMenu}
    >
      {name}
    </Link>
  </li>
);

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleNav = () => {
    setNavIsVisible(prev => !prev);
  };

  const closeMenu = () => {
    setNavIsVisible(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <section>
      <header className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md border-b-2 border-dark-hard rounded-b-lg transition-colors duration-150">
        <div className="container mx-auto px-5 flex justify-between py-6 items-center">
          {/* Logo with higher z-index */}
          <div className="relative z-50">
            <Link to="/" onClick={closeMenu}>
              <img className="w-200 h-16" src={images.Logo} alt="logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50 flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
              )}
            </button>
            <button 
              onClick={toggleNav}
              className="text-gray-800 dark:text-gray-200"
            >
              {navIsVisible ? (
                <MdClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Menu - Adjusted positioning and z-index */}
          <nav className={`${
            navIsVisible ? "opacity-100 visible" : "opacity-0 invisible"
          } bg-white dark:bg-gray-900 lg:bg-transparent lg:opacity-100 lg:visible
            fixed top-[88px] left-0 right-0 bottom-0 
            lg:static lg:flex lg:items-center lg:justify-end
            z-[49] flex flex-col w-full lg:w-auto 
            lg:flex-row gap-x-9 items-center 
            transition-all duration-300 shadow-lg lg:shadow-none`}>
            <ul className="gap-y-5 items-center flex flex-col lg:flex-row gap-x-8 font-semibold mt-10 lg:mt-0">
              {navItemsInfo.map((item) => (
                <NavItems 
                  key={item.name} 
                  name={item.name} 
                  path={item.path} 
                  closeMenu={closeMenu}
                />
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-5 lg:mt-0">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="border-2 border-red-500 px-5 py-2 rounded-full text-red-500 dark:text-red-400 dark:border-red-400 font-semibold hover:bg-red-500 dark:hover:bg-red-400 hover:text-white dark:hover:text-gray-900 transition-all duration-150"
              >
                Sign In
              </Link>

              <button
                onClick={toggleDarkMode}
                className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                {darkMode ? (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className="pt-24"></div>
    </section>
  );
};

export default Header;
