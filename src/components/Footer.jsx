import React from "react";
import { BsSendArrowDownFill } from "react-icons/bs";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Site Map";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const supportTitle = "Our Support";

const siteList = [
  { text: "Documentation", link: "#" },
  { text: "Feedback", link: "#" },
  { text: "Plugins", link: "#" },
  { text: "Support Forums", link: "#" },
  { text: "Themes", link: "#" },
];

const useList = [
  { text: "About Us", link: "#" },
  { text: "Help Link", link: "#" },
  { text: "Terms & Conditions", link: "#" },
  { text: "Contact Us", link: "#" },
  { text: "Privacy Policy", link: "#" },
];

const socialList = [
  { text: "Facebook", link: "#" },
  { text: "Twitter", link: "#" },
  { text: "Instagram", link: "#" },
  { text: "YouTube", link: "#" },
  { text: "Github", link: "#" },
];

const supportList = [
  { text: "Help Center", link: "#" },
  { text: "Paid with Mollie", link: "#" },
  { text: "Status", link: "#" },
  { text: "Changelog", link: "#" },
  { text: "Contact Support", link: "#" },
];

const Footer = () => {
  return (
    <div>
      {/* News Letter Section */}
      <div className="bg-[#212529] text-white py-16 px-4">
        <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto text-center flex flex-col md:flex-row justify-between gap-3">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 w-full md:w-1/2 text-left">
            {newsTitle}
          </h3>
          <form action="/" className="flex flex-col md:flex-row items-center py-3 w-full md:w-1/2">
            <div className="relative flex items-center py-3 w-full md:w-[350px]">
              <BsSendArrowDownFill className="absolute left-1 text-green-600" />
              <input
                type="text"
                placeholder="Keywords of your course"
                className="text-[12px] md:text-base p-4 pl-7 w-full focus:outline-none shadow-xl text-black rounded-full"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-[10px] md:text-[13px] py-4 rounded-full md:px-4 md:py-5 text-white font-semibold tracking-wide w-full md:w-auto mt-3 md:mt-0 md:ml-3"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#212529] text-white py-16">
        <div className="w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Site Map */}
            <div>
              <h4 className="font-semibold text-2xl pb-2">{siteTitle}</h4>
              <hr className="w-[25%] border-t-2 border-green-400" />
              <ul className="space-y-2">
                {siteList.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-2xl mb-4">{useTitle}</h4>
              <hr className="w-[25%] border-t-2 border-green-400" />
              <ul className="space-y-2">
                {useList.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Contact */}
            <div>
              <h4 className="font-semibold text-2xl mb-4">{socialTitle}</h4>
              <hr className="w-[25%] border-t-2 border-green-400" />
              <ul className="space-y-2">
                {socialList.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Support */}
            <div>
              <h4 className="font-semibold text-2xl mb-4">{supportTitle}</h4>
              <hr className="w-[25%] border-t-2 border-green-400" />
              <ul className="space-y-2">
                {supportList.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-white text-sm md:text-lg text-black py-4 font-semibold tracking-wider">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2022{" "}
            <a to="/" className="text-gray-600">
              Edukon
            </a>{" "}
            Designed by
            <a
              href="https://themeforest.net/user/CodexCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {" "}
              CodexCoder
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
