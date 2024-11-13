import React from "react";
import instuc1 from "../assets/imges/instructor/01.jpg";
import instuc2 from "../assets/imges/instructor/02.jpg";
import instuc3 from "../assets/imges/instructor/03.jpg";
import instuc4 from "../assets/imges/instructor/04.jpg";
import { FaBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const subTitle = "World-class Instructors";
const title = "Classes Taught By Real Creators";

const instructorList = [
  {
    imgUrl: instuc1,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Emilee Logan",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
  },
  {
    imgUrl: instuc2,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Donald Logan",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
  },
  {
    imgUrl: instuc3,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Oliver Porter",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
  },
  {
    imgUrl: instuc4,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Nahla Jones",
    degi: "Master of Education Degree",
    courseCount: "08 courses",
    studentAnroll: "30 students",
  },
];

const Instructor = () => {
  return (
    <div className="py-20 bg-[#fff9f1]">
      <div className=" w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out">
        <div className="text-center mb-16">
          <span className="text-primary md:text-lg font-semibold uppercase font-sans">
            {subTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 font-sans text-[#314ea2]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {instructorList.map((val, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:translate-y-[-20px] origin-bottom transition-all duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="mb-6">
                  <img
                    className="w-full h-56 object-contain rounded-lg"
                    src={val.imgUrl}
                    alt={val.imgAlt}
                  />
                </div>
                <div className="text-center">
                  <a to="/team-single">
                    <h4 className="text-2xl font-semibold text-[#314ea2] cursor-pointer font-sans hover:text-primary duration-300 ease-out">
                      {val.name}
                    </h4>
                  </a>
                  <p className="text-gray-500 mt-2 font-sans text-lg tracking-tight">{val.degi}</p>
                  <div className="flex mt-2 justify-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar key={index} className="text-primary text-lg" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 py-4 px-6">
                <ul className="flex justify-between text-sm text-gray-600">
                  <li className="flex items-center">
                    <FaBook className="text-sm mr-2" />
                    <p className="font-normal text-gray-700 tracking-wide">{val.courseCount}</p>
                  </li>
                  <li className="flex items-center">
                    <IoIosPeople className="text-2xl mr-2" />
                     <p className="font-normal text-gray-700 tracking-wide">
                     {val.studentAnroll}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Want to help people learn, grow and achieve more in life?{" "}
            <a to="/team" className="text-primary font-semibold">
              Become an instructor
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
