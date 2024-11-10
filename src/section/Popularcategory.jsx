import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import icon1 from "../assets/imges/Category/icon/01.jpg";
import icon2 from "../assets/imges/Category/icon/02.jpg";
import icon3 from "../assets/imges/Category/icon/03.jpg";
import icon4 from "../assets/imges/Category/icon/04.jpg";
import icon5 from "../assets/imges/Category/icon/05.jpg";
import icon6 from "../assets/imges/Category/icon/06.jpg";

const subTitle = "Popular Category";
const title = "Popular Category For Learn";
const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: icon1,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Science",
    count: "24 Course",
  },
  {
    imgUrl: icon2,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Civil Engineering",
    count: "04 Course",
  },
  {
    imgUrl: icon3,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Business Analysis",
    count: "27 Course",
  },
  {
    imgUrl: icon4,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Data Science Analytics",
    count: "28 Course",
  },
  {
    imgUrl: icon5,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Learning Management",
    count: "78 Course",
  },
  {
    imgUrl: icon6,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "38 Course",
  },
];

const Popularcategory = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index) => setHoverIndex(index);
  
  return (
    <div className="py-16 px-14 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-lg font-sans font-semibold tracking-wider text-primary mb-2 block">
            {subTitle}
          </span>
          <h2 className="text-5xl font-sans font-bold text-black tracking-tighter">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
          {categoryList.map((val, i) => (
            <div
            className="category-item text-center hover:translate-y-[-20px] origin-bottom transition-all duration-300 ease-in-out cursor-pointer"
            key={i}          
            onMouseOver={() => handleMouseEnter(i)}      
          >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="category-thumb mb-4">
                  <img
                    className="w-full h-20 object-contain rounded-lg"
                    src={val.imgUrl}
                    alt={val.imgAlt}
                  />
                </div>
                <div className="category-content">
                  <a
                    to="/course"
                    className={`text-[21px] font-semibold text-gray-800 transition-colors duration-300 ${
                      hoverIndex === i ? "text-primary" : "hover:text-primary"
                    }`}
                  >
                    {val.title}
                  </a>
                  <div className="text-sm text-gray-500 mt-2">{val.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            to="/course"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popularcategory;
