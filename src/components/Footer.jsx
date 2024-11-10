import React from "react";
import { Link } from "react-router-dom";

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
      <div className="relative bg-gray-800 text-white py-16 px-4">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/images/shape-img/03.png')` }}
        ></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>

        <div className="container mx-auto relative z-10 text-center flex justify-between">
          <h3 className="text-3xl font-semibold mb-4 w-[50%]">{newsTitle}</h3>
          <form
            action="/"
            className="flex justify-center items-center space-x-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-lg text-black focus:outline-none w-96"
            />
            <input
              type="submit"
              name="submit"
              value="Subscribe Now"
              className="bg-primary text-white px-6 py-3 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Site Map */}
            <div>
              <h4 className="font-semibold text-xl pb-2">{siteTitle}</h4>
               <hr className="w-[25%]"/> 
              <ul className="space-y-2">
                {siteList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-xl mb-4">{useTitle}</h4>
              <hr className="w-[25%]"/> 
              <ul className="space-y-2">
                {useList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Contact */}
            <div>
              <h4 className="font-semibold text-xl mb-4">{socialTitle}</h4>
              <hr className="w-[25%]"/> 
              <ul className="space-y-2">
                {socialList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Support */}
            <div>
              <h4 className="font-semibold text-xl mb-4">{supportTitle}</h4>
              <hr className="w-[25%]"/> 
              <ul className="space-y-2">
                {supportList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-primary transition-colors"
                    >
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
      <div className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2022{" "}
            <a to="/" className="text-white">
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
