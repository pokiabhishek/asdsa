import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS

// Images
import img1 from "../assets/imges/sponsor/01.png";
import img2 from "../assets/imges/sponsor/02.png";
import img3 from "../assets/imges/sponsor/03.png";
import img4 from "../assets/imges/sponsor/04.png";
import img5 from "../assets/imges/sponsor/05.png";
import img6 from "../assets/imges/sponsor/06.png";

// Array of sponsors
const sponsorList = [
  {
    imgUrl: img1,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
  {
    imgUrl: img2,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
  {
    imgUrl: img3,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
  {
    imgUrl: img4,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
  {
    imgUrl: img5,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
  {
    imgUrl: img6,
    imgAlt: 'sponsor rajibraj91 rajibraj',
  },
];

const Sponsor = () => {
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 5, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024, // When the screen width is less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
        }
      },
      {
        breakpoint: 768, // When the screen width is less than 768px
        settings: {
          slidesToShow: 2, // Show 2 slides
        }
      },
      {
        breakpoint: 480, // When the screen width is less than 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
        }
      }
    ]
  };

  return (
    <div className="bg-[#fff9f1] py-12">
      <div className="container mx-auto">
        <Slider {...settings}>
          {sponsorList.map((item, i) => (
            <div key={i} className="">
              <img src={item.imgUrl} alt={item.imgAlt} className="max-w-[150px] object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;
