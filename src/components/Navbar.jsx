import React, { useState, useEffect } from "react";
import { FaAngleUp, FaUser, FaUserPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/imges/REAL_TUTORIAL_HUB.png"; // Update with the correct logo path
import "../assets/css/Navbardropdown.css"; // Ensure the CSS is properly imported for animation
import { FaAngleDown } from "react-icons/fa";



const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Track scroll position
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active on mobile

  // Handle scroll event to make the navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) { // Change threshold to 200px
        setIsSticky(true);  // Change to white when scrolling more than 200px
      } else {
        setIsSticky(false); // Keep transparent when less than 200px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <header
      className={`header-section ${isSticky ? "bg-white shadow-md sticky-navbar pulse-on-scroll" : "bg-transparent"} transition-all duration-500 ease-in-out z-50 fixed top-0 left-0 right-0`}
    >
      {/* Header Bottom */}
      <div className="header-bottom py-2">
        <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out flex items-center">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" className="w-1/2 sm:w-2/6 md:w-2/3 lg:w-2/4" />
            </a>
          </div>

          {/* Menu and Mobile Hamburger */}
          <div className="menu-area hidden md:flex items-center space-x-1">
            <ul
              className={`nav-links flex space-x-6 font-semibold ${menuToggle ? "active" : ""}`}
            >
              <li className="dropdown dropdown-7">
                <a href="/" className="hover:text-primary text-sm tracking-wider duration-300 flex items-center gap-2">Home <FaAngleDown /></a>
                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                  <li><a href="#" className="dropdown_item-1">Sub-item 1</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 2</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 3</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-7">
                <a href="/course" className="hover:text-primary text-sm tracking-wider duration-300 flex items-center gap-2">Courses <FaAngleDown /></a>
                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                  <li><a href="#" className="dropdown_item-1">Sub-item 1</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 2</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 3</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-7">
                <a href="/blog" className="hover:text-primary text-sm tracking-wider duration-300 flex items-center gap-2">Blog <FaAngleDown /></a>
                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                  <li><a href="#" className="dropdown_item-1">Sub-item 1</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 2</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 3</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-7">
                {/* Contact Dropdown */}
                <a href="/contact" className="hover:text-primary text-sm tracking-wider duration-300 flex items-center gap-2">Contact <FaAngleDown /></a>
                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                  <li><a href="#" className="dropdown_item-1">Sub-item 1</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 2</a></li>
                  <li><a href="#" className="dropdown_item-1">Sub-item 3</a></li>
                </ul>
              </li>
            </ul>

            {/* Login and Signup */}
            <div className="auth-buttons hidden md:flex space-x-4">
              <a href="/login" className="text-sm py-2 px-4 flex items-center text-primary border border-primary rounded-sm hover:bg-primary hover:text-white duration-300 font-semibold tracking-wide">
                <FaUser className="mr-2" /> Login
              </a>
              <a href="/signup" className="text-sm flex w-[130px] justify-center items-center py-2 px-4 bg-primary text-white rounded-sm hover:bg-[#314ea2] duration-300 font-semibold tracking-wide">
                <FaUserPlus className="mr-2" /> Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Menu (Offcanvas) */}
          <div className="block md:hidden ml-4">
            <FiMenu
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Offcanvas) */}
      <div
  className={`fixed top-0 right-0 z-50 w-full md:w-1/3 h-full  backdrop-blur-[10px] transition-all duration-300 ease-in-out transform ${menuToggle ? "translate-x-0" : "translate-x-full"}`}
>
        <div className="flex justify-between items-center px-7 py-2">
          <img src={logo} alt="Logo" className="w-1/2 h-auto object-cover" />
          <button
            className="text-3xl text-primary cursor-pointer"
            onClick={() => setMenuToggle(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-4 p-6 ">
          <li className="text-blue-100">
            <a href="/" onClick={() => setMenuToggle(false)}>
              Home
            </a>
          </li>
          <li>
          <button
              onClick={() => toggleDropdown("course")} // Toggle dropdown on mobile
              className="w-full text-left flex items-center justify-between text-blue-100"
            >
              course <span>{activeDropdown === "course" ? <FaAngleUp /> : <FaAngleDown />}</span>
            </button>
            {activeDropdown === "course" && (
              <ul className="space-y-2 p-2 transition-all ease-in-out duration-300 text-white">
                <li className="shadow-lg rounded-lg  hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 1</a>
                </li>
                <li className="shadow-lg rounded-lg hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 2</a>
                </li>
                <li className="shadow-lg rounded-lg hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 3</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("blog")} // Toggle dropdown for Blog
              className="w-full text-left flex items-center justify-between text-blue-100"
            >
              Blog{" "}
              <span>
                {activeDropdown === "blog" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {/* Mobile Blog Dropdown Menu */}
            {activeDropdown === "blog" && (
              <ul className="space-y-2 p-2 transition-all ease-in-out duration-300 text-white">
                <li className="shadow-lg rounded-lg hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 1</a>
                </li>
                <li className="shadow-lg rounded-lg hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 2</a>
                </li>
                <li className="shadow-lg rounded-lg hover:bg-[#314ea2]  duration-300 p-2">
                  <a href="#">Sub-item 3</a>
                </li>
              </ul>
            )}
          </li>
          <li>
          <button
              className="w-full text-left flex items-center justify-between text-blue-100"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Login/Sign Up Buttons */}
        <div className="flex flex-col mt-6 space-y-4 p-6">
          <a href="/login" className="bg-[#314ea2] py-4 px-5 flex items-center justify-center space-x-2">
            <FaUser className="text-white" />
            <span className="text-white tracking-widest">Login</span>
          </a>
          <a href="/signup" className="bg-primary hover:bg-[#314ea2] py-4 px-5 flex items-center justify-center space-x-2">
            <FaUserPlus className="text-white" />
            <span className="text-white tracking-widest">Sign Up</span>
          </a>
        </div>
      </div>

      {/* Overlay to close offcanvas when clicked outside */}
      {menuToggle && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
          onClick={() => setMenuToggle(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
