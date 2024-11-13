import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

const Othernavbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    home: false,
    instructor: false,
    student: false,
    page: false,
    blog: false,
  });

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleSubmenuToggle = (section) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav
      className={
        navbar
          ? "z-[11] sticky top-0 p-2 bg-white shadow-lg"
          : "bg-gradient-to-r from-secondary to-accent md:bg-gradient-to-l md:from-secondary md:to-accent"
      }
    >
      <div className="max-w-[1440px] mx-auto p-1 relative pt-3">
        <div className="md:flex md:justify-between md:items-center">
          {/* First part (Menu Icon & Logo) */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer text-4xl text-primary"
            />
            <div className="mx-auto">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                alt="logo"
                className="h-8"
              />
            </div>
          </div>

          {/* Second part (Desktop Menu) */}
          <ul className="hidden lg:flex font-semibold space-x-6">
            {["home", "instructor", "student", "page", "blog"].map((item, index) => (
              <li
                key={index}
                className="relative group hover:text-primary cursor-pointer transition-all delay-100 duration-300"
                onMouseEnter={() => handleSubmenuToggle(item)}
                onMouseLeave={() => handleSubmenuToggle(item)}
              >
                <span className="flex justify-center items-center text-primary">
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                  <BiChevronDown className="text-xl" />
                </span>
                {/* Desktop submenu */}
                {submenuOpen[item] && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#F38681] p-4 space-y-2">
                    <ul>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 1</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 2</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 3</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 4</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Third part (Buttons) */}
          <div className="space-x-4 hidden md:block">
            <button className="transition-all delay-100 duration-300 font-semibold hover:bg-primary hover:text-white px-11 py-1.5 rounded-full">
              Signin
            </button>
            <button className="transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary hover:border-primary px-8 py-1.5 rounded-full">
              Signup
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`lg:hidden bg-primary w-[280px] md:w-[260px] h-screen absolute ${
            open
              ? "-top-4 -left-2 transition-all duration-700"
              : "top-0 -left-full transition-all duration-1000 delay-300"
          }`}
        >
          <div className="bg-white p-[17px] flex justify-between items-center">
            <span className="cursor-pointer">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                alt="logo"
                className="h-7"
              />
            </span>
            <IoIosClose
              className="hover:text-primary text-3xl font-bold cursor-pointer transition-all duration-200"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="space-y-3 text-sm cursor-pointer">
            {["home", "instructor", "student", "page", "blog"].map((item, index) => (
              <li
                key={index}
                className="text-[#FEE9E8] border-b border-[#F8908B]"
              >
                <div
                  onClick={() => handleSubmenuToggle(item)}
                  className="flex justify-between items-center p-3"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                  <BiChevronDown className="text-xl" />
                </div>

                {/* Mobile submenu */}
                {submenuOpen[item] && (
                  <div className="bg-[#F38681]">
                    <ul className="space-y-5 p-6">
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 1</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 2</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 3</li>
                      <li>{item.charAt(0).toUpperCase() + item.slice(1)} 4</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="text-[#FEE9E8] border-b border-[#F8908B] p-3">
              Signin / Signup
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Othernavbar;
