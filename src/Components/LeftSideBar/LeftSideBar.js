import React from "react";
import { AiFillHome } from "react-icons/ai";
import leftSideProfileImage from '../../Assets/Images/left-side_profile_imran_hossain.jpg' 

const LeftSideBar = () => {
  return (
    <div className="">
     
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <AiFillHome className=" text-3xl text-[#056BE1] " />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg bg-gray-300    dark:bg-gray-800 dark:border-gray-600">
          Home
        </a>  
      </div>

      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={leftSideProfileImage} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg bg-gray-300    dark:bg-gray-800 dark:border-gray-600">
          Md.Imran Hossain
        </a>  
      </div>

      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={leftSideProfileImage} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg bg-gray-300    dark:bg-gray-800 dark:border-gray-600">
          Md.Imran Hossain
        </a>  
      </div>


    </div>
  );
};

export default LeftSideBar;
