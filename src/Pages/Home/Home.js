import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import NewsFeed from "../../Components/NewsFeed/NewsFeed";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="flex justify-between ">

      <div className="flex  bg-[#F0F2F5] h-screen hover:overflow-y-scroll scroll-smooth w-[300px]">
        <LeftSideBar />
      </div> 
      <div className="NewFeed flex  justify-center   bg-[#F0F2F5] px-11 w-[560px] h-screen">
        <NewsFeed />
      </div>
      <div className="flex  bg-[#d9dfe8] h-screen hover:overflow-y-scroll scroll-smooth w-[300px]">
        <RightSideBar />
      </div>


    </div>
  );
};

export default Home;
