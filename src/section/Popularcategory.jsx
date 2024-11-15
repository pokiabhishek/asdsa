import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import icon1 from "../assets/imges/Category/icon/01.jpg";
import icon2 from "../assets/imges/Category/icon/02.jpg";
import icon3 from "../assets/imges/Category/icon/03.jpg";
import icon4 from "../assets/imges/Category/icon/04.jpg";
import icon5 from "../assets/imges/Category/icon/05.jpg";
import icon6 from "../assets/imges/Category/icon/06.jpg";

const subTitle = "Popular Category";
const title = "Popular Category To Learn";
const btnText = "Browse All Categories";

// List of category items
const categoryList = [
  {
    imgUrl: icon5,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Deep Learning",
    count: "78 Leacture",
  },
  {
    imgUrl: icon4,
    imgAlt: "category rajibraj91 rajibraj",
    title: "React.js",
    count: "28 Leacture",
  },
  {
    imgUrl: icon3,
    imgAlt: "category rajibraj91 rajibraj",
    title: "AI & ML",
    count: "27 Leacture",
  },
  {
    imgUrl: icon1,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Data Science",
    count: "24 Leacture",
  },
  {
    imgUrl: icon2,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Python",
    count: "04 Leacture",
  },
  {
    imgUrl: icon6,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Web Development",
    count: "38 Leacture",
  },
];


// List of colors
const categoryColors = [
  "#f16126",
  "#00a556",
  "#eec93d",
  "#cf9fb7",
  "#31aabd",
  "#f79a3d",
];

const Popularcategory = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <div className="py-16 px-14 bg-gray-50">
      <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto transition-all duration-500 ease-in-out">
        <div className="text-center mb-12">
          <span className="text-sm md:text-lg font-sans uppercase font-semibold tracking-wider text-primary mb-2 block">
            {subTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#314ea2] tracking-tighter">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
          {categoryList.map((val, i) => (
            <div
              key={i}
              className="category-item text-center hover:translate-y-[-20px] origin-bottom transition-all duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between"
              >
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
                    className={`text-[21px] font-semibold transition-colors duration-300`}
                    style={{
                      color: hoverIndex === i ? "#f79a3d" : "#314ea2", // Apply orange color on hover, otherwise default color
                    }}
                  >
                    {val.title}
                  </a>
                  <div
                    className="text-sm mt-2 font-semibold tracking-wider"
                    style={{
                      color: categoryColors[i], // Apply color directly to the count text
                    }}
                  >
                    {val.count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            to="/course"
            className="inline-block text-sm cursor-pointer px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popularcategory;
