import React from "react";
import aboutimg from "../assets/imges/about/01.png";
import icon1 from "../assets/imges/about/icon/01.jpg";
import icon2 from "../assets/imges/about/icon/02.jpg";
import icon3 from "../assets/imges/about/icon/03.jpg";

const subTitle = "About Our Edukon";
const title = "Good Qualification Services And Better Skills";
const desc =
  "Distinctively provide access multifunctional users whereas transparent processes sometimes incentivize efficient functionalities rather than extensible architecture communicate leveraged services and cross-platform.";

const aboutList = [
  {
    imgUrl: icon1,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
  {
    imgUrl: icon2,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
  {
    imgUrl: icon3,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
];

const About = () => {
  return (
    <div className="pt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col justify-between pt-11">
            <div className="flex-grow"></div>
            <img
              className="w-full h-auto rounded-lg  object-contain"
              src={aboutimg}
              alt="About Edukon"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h4 className="text-lg uppercase font-sans font-semibold tracking-wider text-primary">
              {subTitle}
            </h4>
            <h1 className="text-3xl lg:text-3xl xl:text-4xl font-extrabold leading-10 mt-4 w-[95%]">
              {title}
            </h1>
            <p className="text-gray-500 text-lg mt-4 w-[90%]">
              {desc}
            </p>

            {/* List of Features */}
            <div className="mt-8 space-y-6">
              {aboutList.map((item, i) => (
                <div key={i} className="flex items-start gap-6 sm:flex-row flex-col">
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-black">{item.title}</h2>
                    <p className="text-lg text-gray-500 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
