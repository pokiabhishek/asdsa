import React from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci"; // Assuming you want to use the star icon
import bg1 from "../assets/imges/student/01.jpg"
import { FaStar } from "react-icons/fa";
import feed1 from "../assets/imges/student/feedback/01.jpg"
import feed2 from "../assets/imges/student/feedback/02.jpg"
import bg from "../assets/imges/student/feedback/bg-feedback.png"
import { FaPlay } from "react-icons/fa";
// Data for the student feedback
const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";


const studentList = [
  {
    imgUrl: feed1,
    imgAlt: "student rajibraj91 rajibraj",
    name: "Oliver Beddows",
    degi: "UX designer",
    desc: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
  },
  {
    imgUrl: feed2,
    imgAlt: "student rajibraj91 rajibraj",
    name: "Madley Pondor",
    degi: "UX designer",
    desc: "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
  },
];

const Rating = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-primary text-lg" />
      ))}
    </div>
  );
};

const Student = () => {
  return (
    <div className="py-16 bg-gray-50 relative">
      <div className=" w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out">
        <div className="text-center mb-12 relative z-20">
          <span className="text-sm md:text-lg text-primary uppercase font-semibold tracking-wide">
            {subTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#314ea2]">{title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative z-20">
              <img
                src={bg1}
                alt="student feedback"
                className="w-full h-auto rounded-lg shadow-xl p-4"
              />
              <a
                href="https://www.youtube.com/embed/MU3qrgR2Kkc"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-7 rounded-full shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <i className="icofont-ec74 text-primary text-3xl"><FaPlay/></i>
              </a>
            </div>
          </div>
          <div className="relative z-20">
            {studentList.map((val, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg mb-8 p-6 ">
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="flex items-center mb-2">
                    <div className="mr-4">
                      <img
                        src={val.imgUrl}
                        alt={val.imgAlt}
                        className="md:w-16 md:h-16 rounded-full"
                      />
                    </div>
                    <div>
                      <a to="/team-single">
                        <h6 className="md:text-lg font-semibold text-[#314ea2]">
                          {val.name}
                        </h6>
                      </a>
                      <span className="text-gray-500 text-sm">{val.degi}</span>
                    </div>
                  </div>
                  <div>
                    <Rating />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-5 md:text-lg tracking-tight ">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-10">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Student;
