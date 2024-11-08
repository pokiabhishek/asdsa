import React from "react";
import logo from "../assets/imges/learnin-logo.png";
import { FaUser, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="container mx-auto  fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <div className="logo-img h-[50%]">
          <img src={logo} alt="Logo" className="w-3/4 h-full object-contain" />
        </div>
        <div className="navbar-menu flex items-center">
          <ul className="flex gap-2 me-4 font-sans font-bold">
            <li className="p-6">Home</li>
            <li className="p-6">Courses</li>
            <li className="p-6">Blog</li>
            <li className="p-6">Pages</li>
            <li className="p-6">Contact</li>
          </ul>
          <div className="flex uppercase">
            <a
              href=""
              className="bg-slate-100 py-4 px-5 flex items-center justify-center space-x-2"
            >
              <FaUser className="text-primary"/>
              <span className="text-primary tracking-widest">Login</span>
            </a>
            <a
              href=""
              className="bg-primary py-4 px-5 flex items-center justify-center space-x-2"
            >
              <FaUserPlus className="text-white" /> {/* Signup icon */}
              <span className="text-white tracking-widest">Signup</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
