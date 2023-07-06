import React, { useState } from "react";
import ulclogo from "../assets/ulclogo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Typed from "react-typed";
import ReactPlayer from "react-player";
import ulcintro from "../assets/ulcintro.mp4";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Home = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-4 h-24 text-white max-w-[1240px]">
        <img
          className="h-16 w-16 m-4 rounded-full"
          src={ulclogo}
          alt="ULC Logo"
        />
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">ULC</h1>
        <ul className="hidden md:flex ">
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          <Link to="About">
            <li className="p-4">About</li>
          </Link>
          <Link to="Services">
            <li className="p-4">Services</li>
          </Link>
          <a href="#contact">
            <li className="p-4">Contact</li>
          </a>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 h-full w-[50%] border-r border-r-gray-900  bg-[#000040] ease-in-out duration-700"
              : "left-[-100%] absolute"
          }
        >
          <img
            className="h-16 w-16 m-4 rounded-full"
            src={ulclogo}
            alt="ULC Logo"
          />
          <h1 className="w-full font-bold text-3xl text-[#00df9a] ml-5 ">
            ULC
          </h1>
          <ul className="p-4 uppercase" onClick={handleNav}>
            <Link to="/">
              <li className="p-4 border-b border-gray-600">Home</li>
            </Link>
            <Link to="About">
              <li className="p-4 border-b border-gray-600">About</li>
            </Link>
            <Link to="Services">
              <li className="p-4 border-b border-gray-600">Services</li>
            </Link>
            <a href="#contact">
              <li className="p-4">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <div className="flex flex-col justify-center text-center max-w-[800px] mx-auto mt-[100px]">
          <p className="font-bold text-md text-[#00df9a] ">
            CONFUSED ON HOW TO START YOUR FITNESS JOURNEY?
          </p>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold py-2 ">
            WE ARE HERE TO HELP YOU.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold mr-2 md:mr-4">
              We have{" "}
            </p>
            <Typed
              className="md:text-4xl sm:text-3xl text-xl font-bold"
              strings={[
                "GYM",
                "CARDIO",
                "KICKBOXING",
                "SAUNA & STEAM",
                "PERSONAL TRAINING",
              ]}
              typespeed={100}
              backSpeed={120}
              loop
            />
          </div>
          <p className="md:text-2xl my-3 text-xl font-bold text-slate-600">
            Achieve your fitness goals by joining us.Watch the video of our gym
            below..
          </p>
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Watch the full video of our gym below..
          </p>
          <div className="flex justify-center px-2 py-4">
            <ReactPlayer url={ulcintro} controls={true} width={500} />
          </div>
        </div>
      </div>
      <section id="contact">
        <div className="w-[100%] py-16 px-3 sm:flex sm:justify-between gap-8 text-gray-300">
          <div className="ml-6">
            <img
              className="h-16 w-16 rounded-full"
              src={ulclogo}
              alt="ULC Logo"
            />
            <h1 className="w-full text-3xl  font-bold text-[#00df9a]">ULC</h1>
            <p className="py-4 text-xl w-[70%] font-medium">
              You can reach us out via following:
            </p>
            <div className="flex my-6 gap-8">
              <a
                href="https://www.facebook.com/ultimateliftingclub/"
                target="_blank"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.instagram.com/ultimate_lifting_club/?hl=en"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B9779808960698&data=ARArKWfTyiSxpDQN_BaxRxB73k5n64fIgEdKdvh9-Jg-R7lrzmQF6FBV5IDayH_vxrTqzZ3qbdBD-JyliX-GIxB8g5vItYPhCMRjRAz4foLDcTICDclBY9Cbl7CwRq2CleKNIg0CCgQ9ejiO7_nUL_sWfQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1AWRjLBEKjZskZ9GgRL65Ca29VQ5L90XGHbCNWDKcNxLnAXwTgdh1HDGg"
                target="_blank"
              >
                <FaWhatsappSquare size={30} />
              </a>
            </div>
          </div>
          <div className="ml-6 sm:mr-10 sm:mt-28">
            <p className="text-xl font-medium">Contact us at:</p>
            <div className="flex ">
              <FiPhoneCall className="my-4 mx-4" size={20} />
              <a
                className="my-4  text-blue-500 underline hover:text-purple-500"
                href="tel:980-8960698"
              >
                980-8960698
              </a>
            </div>
            <div className="flex">
              <FiPhoneCall className="my-4 mx-4" size={20} />
              <a
                className="my-4  text-blue-500 underline hover:text-purple-500"
                href="tel:9862672959"
              >
                9862672959
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
