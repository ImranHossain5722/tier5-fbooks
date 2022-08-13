import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import leftSideProfileImage from '../../Assets/Images/left-side_profile_imran_hossain.jpg' 
import leftSideWatch from '../../Assets/Images/watch.png' 
import leftSideMarket from '../../Assets/Images/marcket.png' 
import gaming from '../../Assets/Images/gmaing.png' 
import {MdGroups} from 'react-icons/md' 

const LeftSideBar = () => {
  return (
    <div className="">
      {/* home */}
      <div class="flex items-center  hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <AiFillHome className=" text-3xl text-[#056BE1] " />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Home
        </a>  
      </div>
      {/* profile */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={leftSideProfileImage} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600">
          Md.Imran Hossain
        </a>  
      </div>
        {/* menu */}
      <div class="flex items-center  hover:bg-[#E4E6E9] mt-3   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <CgMenuGridO className=" text-3xl text-[#000] bg-gray-200 rounded-full" />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Menu
        </a>  
      </div>

      {/* watch */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={leftSideWatch} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600">
          Watch
        </a>  
      </div>
      {/* market place  */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={leftSideMarket} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600">
          Merketplace 
        </a>  
      </div>

       {/* Gaming  */}
       <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={gaming} />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600">
          Gaming
        </a>  
      </div>

       {/* group */}
       <div class="flex items-center  hover:bg-[#E4E6E9] mt-3   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      <MdGroups className=" text-3xl text-[#000] bg-gray-200 rounded-full" />
        <a href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Groups
        </a>  
      </div>


    </div>
  );
};

export default LeftSideBar;
