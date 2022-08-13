import React from "react";
import CreateRoom from "../../Components/CreateRoom/CreateRoom";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import NewsFeed from "../../Components/NewsFeed/NewsFeed";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex  bg-[#F0F2F5] max-h-screen overflow-y-scroll w-[300px]">
          <LeftSideBar />
        </div>
        <div className="NewFeed flex justify-center items-center max-h-screen overflow-auto bg-[#F0F2F5] px-11 w-[500px]">
          <NewsFeed />
        </div>
        <div className="flex  bg-[#d9dfe8] max-h-screen  hover:overflow-y-scroll  w-[350px]">
          <RightSideBar />
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default Home;
