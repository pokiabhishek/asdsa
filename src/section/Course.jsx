import React, { useState } from "react";
import img1 from "../assets/imges/course/01.jpg";
import img2 from "../assets/imges/course/02.jpg";
import img3 from "../assets/imges/course/03.jpg";
import img4 from "../assets/imges/course/04.jpg";
import img5 from "../assets/imges/course/05.jpg";
import img6 from "../assets/imges/course/06.jpg";
import logo from "../assets/imges/REAL_TUTORIAL_HUB.png";

import { FaStar } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOnlinePrediction } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const courseList = [
  {
    imgUrl: img1,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "Programming in C",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#f16126", // Unique color for this course
  },
  {
    imgUrl: img2,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "Programming in C++",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#00a556", // Unique color for this course
  },
  {
    imgUrl: img3,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "Basic Python",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#eec93d", // Unique color for this course
  },
  {
    imgUrl: img4,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "Website Design",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#cf9fb7", // Unique color for this course
  },
  {
    imgUrl: img5,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "Programming in C#",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#31aabd", // Unique color for this course
  },
  {
    imgUrl: img6,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "feature",
    reviewCount: "03 reviews",
    title: "SQL",
    totalLeson: "18x Leacture",
    schdule: "Online Tutorial",
    authorImgUrl: logo,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "RTH",
    btnText: "Read More",
    color: "#f79a3d", // Unique color for this course
  },
];

const Course = () => {
  const stars = new Array(5).fill(null);
  const [hover, setHover] = useState(null);

  const handleMouse = (index) => setHover(index);
  const handleMouseLeave = () => setHover(null);

  return (
    <div className="py-12 bg-[#fff9f1]">
      <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out">
        <div className="text-center mb-12">
          <span className="text-sm md:text-lg font-bold text-primary mb-2 uppercase tracking-widest">
            {subTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#314ea2] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 group transition-transform duration-300 ease-in-out transform hover:shadow-lg cursor-pointer flex flex-col h-full"
              onMouseOver={() => handleMouse(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative flex-grow">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={course.imgUrl}
                    alt={course.imgAlt}
                  />
                </div>
                <span className="absolute text-sm md:text-xl font-sans font-semibold right-6 -bottom-5 bg-primary py-4 px-3 rounded-full tracking-wide text-white">
                  {course.price}
                </span>
              </div>

              <div className="p-2 md:p-4 flex-grow">
                <div className="flex mb-4 justify-between items-center pt-3">
                  <span
                    className="text-[10px] md:text-[12px] text-white  rounded-md uppercase font-semibold tracking-wider flex items-center p-2 gap-2"
                    style={{ backgroundColor: course.color }}
                  >
                    <FaStar className="text-white" />
                    {course.cate}
                  </span>
                  <div className="flex">
                    {stars.map((_, index) => (
                      <FaStar key={index} className="text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {course.reviewCount}
                  </span>
                </div>
                <h1
                  className={`text-lg md:text-[26px] font-bold mb-2 line-clamp-3 tracking-wider duration-300 ${
                    hover === index ? "text-primary" : "text-[#314ea2]"
                  }`}
                >
                  {course.title}
                </h1>
                <div className="text-sm text-gray-500 mb-4 flex justify-between">
                  <span className="flex items-center gap-2 md:text-md">
                    <MdOutlineOndemandVideo className="text-xl text-primary font-semibold" />
                    {course.totalLeson}
                  </span>
                  <span className="flex items-center gap-2 md:text-md">
                    <MdOnlinePrediction className="text-xl text-primary" />
                    {course.schdule}
                  </span>
                </div>
              </div>

              {/* Author and Button Section */}
              <div className="flex justify-between items-center border-t-[1px] pt-2">
                <div className="flex items-center">
                  <img
                    className="w-24 h-10  object-contain mr-2"
                    src={course.authorImgUrl}
                    alt={course.authorImgAlt}
                  />
                  <span className="md:text-md text-[#314ea2] font-semibold">
                    {course.authorName}
                  </span>
                </div>
                <span className="md:text-lg font-semibold text-[#314ea2] flex items-center gap-2">
                  {course.btnText}
                  <FaExternalLinkAlt className="text-primary" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
