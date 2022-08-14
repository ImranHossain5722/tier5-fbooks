import React from "react";
import CreateRoom from "../../Components/CreateRoom/CreateRoom";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import NewsFeed from "../../Components/NewsFeed/NewsFeed";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="mt-[80px] bg-[#F0F2F5] fixed top-0 bottom-0 overflow-y-scroll w-[20%]  hidden lg:block">
          <LeftSideBar />
        </div>
        <div className="NewFeed mt-[80px] flex justify-center items-center h-full bg-[#F0F2F5] w-[55%]">
          <NewsFeed />
        </div>
        <div
          className=" mt-[80px] bg-[#F0F2F5]  fixed  top-0 bottom-0 overflow-y-scroll right-0  w-[22%] hidden lg:block"  >
          <RightSideBar />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
