import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import NewsFeed from "../../Components/NewsFeed/NewsFeed";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-between items-center max-w-screen-full ">
      <div className="flex items-star bg-[#F0F2F5] h-screen ">
        <LeftSideBar />
      </div> 
      <div className="NewFeed flex items-start bg-white h-screen">
        <NewsFeed />
      </div>
      <div className="RightSideBar flex place-items-start bg-[#F0F2F5] h-screen">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
