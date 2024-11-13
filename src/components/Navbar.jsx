import React, { useEffect, useState } from "react";
import logo from "../assets/imges/learnin-logo.png";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "../App.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "sticky-navbar-nav sticky-navbar-middle"
          : "bg-transparent absolute right-0 left-0"
      } z-30 transition-all duration-500 ease-in-out px-6 md:px-10 lg:px-14 xl:px-24`}
    >
      <div className="flex justify-between items-center py-1">
        {/* Logo */}
        <div className="logo-img h-[50%]">
          <img
            src={logo}
            alt="Logo"
            className="w-3/6 md:w-3/4 h-full object-cover"
          />
        </div>

        {/* Hamburger Icon and Navbar Menu */}
        <div className="navbar-menu flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-4 font-sans font-bold">
            <li className="p-6">Home</li>
            <li className="p-6">Courses</li>
            <li className="p-6">Blog</li>
            <li className="p-6">Pages</li>
            <li className="p-6">Contact</li>
          </ul>

          {/* Login & Signup */}
          <div className="flex uppercase">
            <a
              href="#"
              className="bg-slate-100 py-4 px-5 flex items-center justify-center space-x-2"
            >
              <FaUser className="text-primary" />
              <span className="text-primary tracking-widest">Login</span>
            </a>
            <a
              href="#"
              className="bg-primary py-4 px-5 flex items-center justify-center space-x-2"
            >
              <FaUserPlus className="text-white" />
              <span className="text-white tracking-widest">Signup</span>
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden ml-4">
            <FiMenu
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-5 py-2">
          <div className="flex justify-between items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-1/3 h-auto object-contain"
            />
            <FiX
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col mt-6 space-y-4">
            <li className="text-lg">Home</li>
            <li className="text-lg">Courses</li>
            <li className="text-lg">Blog</li>
            <li className="text-lg">Pages</li>
            <li className="text-lg">Contact</li>
          </ul>
          <div className="flex flex-col mt-6">
            <a
              href="#"
              className="bg-slate-100 py-4 px-5 flex items-center justify-center space-x-2"
            >
              <FaUser className="text-primary" />
              <span className="text-primary tracking-widest">Login</span>
            </a>
            <a
              href="#"
              className="bg-primary py-4 px-5 flex items-center justify-center space-x-2 mt-4"
            >
              <FaUserPlus className="text-white" />
              <span className="text-white tracking-widest">Signup</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
