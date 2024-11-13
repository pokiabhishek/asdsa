import React, { useState } from 'react'
import img1 from "../assets/imges/course/01.jpg";
import img2 from "../assets/imges/course/02.jpg";
import img3 from "../assets/imges/course/03.jpg";
import { FaExternalLinkAlt, FaUser } from 'react-icons/fa';
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";

const subTitle = "FORM OUR BLOG POSTS";
const title = "More Articles From Resource Library";


const blogList = [
    {
        imgUrl: img1,
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Scottish Creatives To Receive Funded Business.',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        btnText: 'Read more',
        commentCount: '3',
    },
    {
        imgUrl: img2,
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Scottish Creatives To Receive Funded Business.',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        btnText: 'Read more',
        commentCount: '4',
    },
    {
        imgUrl: img3,
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Scottish Creatives To Receive Funded Business.',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        btnText: 'Read more',
        commentCount: '6',
    },
]

const Blog = () => {
  const [hover,setHover] = useState(null);
  const handlemouse = (index) => setHover(index)
  return (
    <div className="pt-28 bg-[#fff9f1]">
    <div className=" w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold md:text-lg font-medium text-primary mb-2 block">{subTitle}</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#314ea2]">{title}</h2>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogList.map((val, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer"
          onMouseOver={() => handlemouse(i)}
          >
            <div className="relative">
              <div className="w-full h-56 overflow-hidden">
                <a to="/blog-single">
                  <img
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    src={val.imgUrl}
                    alt={val.imgAlt}
                  />
                </a>
              </div>
            </div>
            <div className="p-2 md:p-6">
              <a to="/blog-single">
              <h4 className={`text-xl lg:text-2xl tracking-tight font-semibold transition-colors duration-300 mb-4 
  ${hover === i ? "text-primary" : "text-[#314ea2]"} hover:text-primary`}>
  {val.title}
</h4>
              </a>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-2 text-sm md:text-[16px]">
                  <FaUser className='text-primary md:text-lg'/> {val.author}
                </span>
                <span className="flex items-center gap-2 text-sm md:text-[16px] tracking-normal">
                  <BsCalendar2DateFill className='text-primary md:text-lg'/> {val.date}
                </span>
              </div>
              <p className="text-gray-600 mb-4 tracking-normal text-sm md:text-lg">{val.desc}</p>
              <div className="flex justify-between items-center text-sm border-t-2 pt-3">
                <div>
                  <a
                    to="/blog-single"
                    className="text-gray-600 font-semibold md:text-lg hover:underline flex items-center gap-2"
                  >
                    {val.btnText}
                    <FaExternalLinkAlt className='text-primary md:text-lg'/>
                  </a>
                </div>
                <div className="relative">
                  <MdMessage className='text-2xl md:text-3xl'/>
                  <span className='absolute -top-2 right-0 bg-primary font-semibold rounded-full text-sm w-[16px] h-[16px] text-center text-white'>{val.commentCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Blog

