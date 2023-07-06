import React from "react";

const Services = () => {
  return (
    <div className=" w-full py-[3rem] px-4 bg-white">
      <h1 className="font-bold text-3xl sm:4xl md:5xl text-center mb-8">
        Our Services
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl shadow-black flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto"
            src="https://shotkit.com/wp-content/uploads/2021/08/Fitness-photography-anush-gorak.jpeg"
            alt="Gym"
          />
          <h2 className="text-2xl font-bold md:text-3xl text-center py-2">
            Gym
          </h2>
          <p className="text-xl md:2xl font-semibold text-center">Pricing:</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">Rs.5000 monthly/-</p>
            <p className="py-2 border-b mx-8">Rs.12000 for 3 months/-</p>
            <p className="py-2 border-b mx-8">Rs.36000 yearly/-</p>
          </div>
          <button className="bg-green-500 border border-white rounded-lg text-black font-semibold w-[200px] py-2 mx-auto my-4 hover:text-white">
            Contact for more...
          </button>
        </div>
        <div className="w-full shadow-2xl shadow-black flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto"
            src="https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.webp?b=1&s=170667a&w=0&k=20&c=qSje_x0VFmlmQhQMOMBl3ck2gP0OWm-AJNlOMm-nDNg="
            alt="Cardio"
          />
          <h2 className="text-2xl font-bold md:text-3xl text-center py-2">
            Cardio
          </h2>
          <p className="text-xl md:2xl font-semibold text-center">Pricing:</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">Rs.3000 monthly/-</p>
            <p className="py-2 border-b mx-8">Rs.8000 for 3 months/-</p>
            <p className="py-2 border-b mx-8">Rs.22000 yearly/-</p>
          </div>
          <button className="bg-green-500 border border-white rounded-lg text-black font-semibold w-[200px] py-2 mx-auto my-4 hover:text-white">
            Contact for more...
          </button>
        </div>
        <div className="w-full shadow-2xl shadow-black flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto"
            src="https://st4.depositphotos.com/4259987/24060/i/600/depositphotos_240602504-stock-photo-dedicated-strong-brunette-ponytail-sportswear.jpg"
            alt="KickBoxing"
          />
          <h2 className="text-2xl font-bold md:text-3xl text-center py-2">
            KickBoxing
          </h2>
          <p className="text-xl md:2xl font-semibold text-center">Pricing:</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">Rs.4000 monthly/-</p>
            <p className="py-2 border-b mx-8">Rs.10000 for 3 months/-</p>
            <p className="py-2 border-b mx-8">Rs.30000 yearly/-</p>
          </div>
          <button className="bg-green-500 border border-white rounded-lg text-black font-semibold w-[200px] py-2 mx-auto my-4 hover:text-white">
            Contact for more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
