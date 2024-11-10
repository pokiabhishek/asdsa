import React, { useState } from "react";
import img1 from "../assets/imges/course/01.jpg";
import img2 from "../assets/imges/course/02.jpg";
import img3 from "../assets/imges/course/03.jpg";
import img4 from "../assets/imges/course/04.jpg";
import img5 from "../assets/imges/course/05.jpg";
import img6 from "../assets/imges/course/06.jpg";
import auth1 from "../assets/imges/course/author/01.jpg";
import auth2 from "../assets/imges/course/author/02.jpg";
import auth3 from "../assets/imges/course/author/03.jpg";
import auth4 from "../assets/imges/course/author/04.jpg";
import auth5 from "../assets/imges/course/author/05.jpg";
import auth6 from "../assets/imges/course/author/06.jpg";
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
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Fundamentals of Adobe XD Theory Learn New",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth1,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
    color: "#f16126", // Unique color for this course
  },
  {
    imgUrl: img2,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Certified Graphic Design with Free Project Course",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth2,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Lora Smith",
    btnText: "Read More",
    color: "#00a556", // Unique color for this course
  },
  {
    imgUrl: img3,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Theory Learn New Student And Fundamentals",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth3,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Robot Smith",
    btnText: "Read More",
    color: "#eec93d", // Unique color for this course
  },
  {
    imgUrl: img4,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Computer Fundamentals Basic Startup Ultricies Vitae",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth4,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Zinat Zaara",
    btnText: "Read More",
    color: "#cf9fb7", // Unique color for this course
  },
  {
    imgUrl: img5,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth5,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Rajib Raj",
    btnText: "Read More",
    color: "#31aabd", // Unique color for this course
  },
  {
    imgUrl: img6,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Student Want to Learn About Science And Arts",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: auth6,
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Angel Mili",
    btnText: "Read More",
    color: "#f79a3d", // Unique color for this course
  },
];

const Course = () => {
  const stars = new Array(5).fill(null);
  const [hover,setHover] = useState(null);
  const handlemouse = (index) => setHover(index)

  return (
    <div className="py-12 bg-[#fff9f1]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-lg font-bold text-primary mb-2  uppercase tracking-widest">
            {subTitle}
          </span>
          <h2 className="text-5xl font-sans font-bold text-black tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 group transition-transform duration-300 ease-in-out transform  hover:shadow-lg cursor-pointer"
              onMouseOver={() => handlemouse(index)}
            >
              <div className="relative">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={course.imgUrl}
                    alt={course.imgAlt}
                  />
                </div>
                <span className="absolute text-xl font-sans font-semibold right-6 -bottom-5 bg-primary py-4 px-3 rounded-full tracking-wide text-white">
                  $30
                </span>
              </div>
              <div className="p-6">
                <div className="flex mb-4 justify-between items-center">
                  <span
                    className="text-sm text-white px-3 py-2 rounded-md"
                    style={{ backgroundColor: course.color }}
                  >
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
                <h1 className={`text-[26px] font-bold text-black mb-2 line-clamp-3 tracking-tighter duration-300 ${hover === index ? "text-primary" : "hover:text-primary"}`}>
                  {course.title}
                </h1>
                <div className="text-sm text-gray-500 mb-4 flex justify-between">
                  <span className="flex items-center gap-2 text-lg">
                    <MdOutlineOndemandVideo className="text-xl text-primary font-semibold" />{" "}
                    {course.totalLeson}
                  </span>
                  <span className="flex items-center gap-2 text-lg">
                    <MdOnlinePrediction className="text-xl text-primary" />{" "}
                    {course.schdule}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t-[1px] pt-2">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full object-cover mr-2"
                      src={course.authorImgUrl}
                      alt={course.authorImgAlt}
                    />
                    <span className="text-lg text-black font-semibold">
                      {course.authorName}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-black flex items-center gap-2">
                    {course.btnText}{" "}
                    <FaExternalLinkAlt className="text-primary" />
                  </span>
                </div>
                {/* Uncomment below button if needed */}
                {/* <div className="text-center mt-4">
                  <a
                    href="#"
                    className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                  >
                    {course.btnText}
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
