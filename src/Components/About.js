import React from "react";
import ulc from "../assets/ulc.png";
import motivation from "../assets/motivation.mp4";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className=" w-full bg-white py-16 ">
      <div className="max-w-[1080px] mx-auto grid  md:grid-cols-2 ">
        <img className="w-[85%] md:w-[75%] mx-8 my-4 " src={ulc} alt="ULC" />
        <div className="flex flex-col justify-center">
          <p className="text-slate-900 font-bold text-2xl mx-auto">About Us</p>
          <h1 className="text-sky-800 font-bold text-2xl md:text-4xl sm:text-3xl py-2 mx-auto">
            Ultimate Lifting Club
          </h1>
          <p className="text-justify flex flex-wrap font-medium mx-4">
            Ultimate Lifting Club is one of top and well eqquiped gyms in
            Kathmandu City. It is located at Tinkune.It is a newly built gym and
            have certified trainers. It has also been able to achieve trophies
            in competitions through the young atheletes working out here.It has
            been listed one of the top 5 gyms of KTM City by famous page The
            Buzz Nepal. You can click below to read the article.
            <a
              className="text-blue-700 hover:text-purple-600 underline"
              href="https://thebuzznepal.com/top-gyms-in-kathmandu/?fbclid=IwAR01JUBpt-I0dvbIFyEaZFj-n-FfXGSJIZTN1COzgvbXlr3WOsDBi5FdXlw"
              target="_blank"
            >
              Click here
            </a>
          </p>
        </div>
      </div>
      <p className="md:text-3xl sm:text-2xl text-xl font-bold my-6 mx-6 text-center">
        You can watch the training video of one of our athletes below here...
      </p>
      <div className="flex justify-center px-2 py-4">
        <ReactPlayer url={motivation} controls={true} />
      </div>
    </div>
  );
};

export default About;
