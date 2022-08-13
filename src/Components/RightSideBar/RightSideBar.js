import React from "react";
import { AiFillHome } from "react-icons/ai";
import group2 from "../../Assets/Images/group2.jpg";
import wp from "../../Assets/Images/wp.png";
import jira from "../../Assets/Images/jira.jfif";
import './RightSideBar.css'


const RightSideBar = () => {
  return (
    <div className="RightSideBar">
      <div class="flex items-center  hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <p className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Sponsored
        </p>
      </div>

      <div className="sponser">
      <div class="flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-36 text-[#056BE1] rounded-lg" src={wp} />
        <p className=" px-4 w-full text-black text-[16px]   dark:bg-gray-800 dark:border-gray-600">
          Wro 
        </p>
      </div>
       <p className="text-center text-[10px] text-gray-400 mt-[-10px] " >wordpress.com</p>
      </div>
      <div className="sponser">
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-36 h-36  text-[#056BE1] rounded-lg" src={jira} />
        <p className=" px-4 w-full text-black text-[16px]  dark:bg-gray-800 dark:border-gray-600">
          You  
        </p>
      </div>
       <p className="text-center text-[10px] text-gray-400 mt-[-10px] " >jirabc.com</p>
      </div>
    </div>
  );
};

export default RightSideBar;
