import React from 'react';
import img1 from "../assets/imges/achive/01.png";
import img2 from "../assets/imges/achive/02.png";
import CountUp from 'react-countup';
import bg from "../assets/imges/achive/bg.png"

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Edukon";

const achievementList = [
    { count: '30', desc: 'Years of Language Education Experience' },
    { count: '3084', desc: 'Learners Enrolled in Edukon Courses' },
    { count: '330', desc: 'Qualified Teachers And Language Experts' },
    { count: '2300', desc: 'Innovative Foreign Language Courses' },
];

const achieveList = [
    {
        imgUrl: img1,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Start Teaching Today',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Become A Instructor',
        siteLink: '#',
    },
    {
        imgUrl: img2,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'If You Join Our Course',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Register For Free',
        siteLink: '#',
    },
];

const Achivement = () => {
    return (
        <div className="pt-28 pb-16 bg-gray-100"  style={{ backgroundImage: `url(${bg})` }}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-lg font-semibold text-primary">{subTitle}</span>
                    <h2 className="text-4xl font-bold text-black mt-2">{title}</h2>
                </div>

                {/* Achievement List */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                        {achievementList.map((val, i) => (
                            <div className="p-6 text-center" key={i}>
                                <h2 className="text-4xl font-bold text-black">
                                    <span className="count">
                                        <CountUp end={parseInt(val.count)} />+
                                    </span>
                                </h2>
                                <p className="text-gray-600 mt-2 text-lg tracking-tighter w-[70%] mx-auto">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievement Details */}
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {achieveList.map((val, i) => (
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={i}>
                                <div className="flex items-center p-10 relative">
                                    <div className="absolute -right-24 ">
                                        <img src={val.imgUrl} alt={val.imgAlt} className=" pt-20" />
                                    </div>
                                    <div className="ml-6 w-[60%]">
                                        <h4 className="text-2xl font-bold text-black">{val.title}</h4>
                                        <p className="text-gray-600 mt-2 text-lg tracking-normal">{val.desc}</p>
                                        <a href={val.siteLink} className="text-primary font-semibold mt-4 inline-block tracking-wider">{val.btnText}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;
