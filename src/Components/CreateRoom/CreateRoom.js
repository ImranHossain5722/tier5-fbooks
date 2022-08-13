import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './CreateRoom.css'
import {MdVideoCall} from 'react-icons/md'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const CreateRoom = () => {

  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);

  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // classes
  // swiper-button-prev,  swiper-button-disabled
  return (
    <div className="bg-white max-w-[750px] rounded-lg py-2">
       {/* title section */}
    
    
      <div className="mt-6">
        <Swiper
          slidesPerView={6}
          spaceBetween={50}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-9 py-6"
          style={{ "--swiper-theme-color": "" }}
        >
          <SwiperSlide>
            <div className="py-6 flex items-center justify-center hover:fill-blue-500">
              <div>
                <button className=" flex btn">< MdVideoCall/> Create room</button>
              </div>
            </div>
          </SwiperSlide>
          {users?.map((user) => (
            <SwiperSlide key={user.id}>
              <div class="avatar online">
                <div class="w-14 rounded-full">
                  <img className="w-10 h-10 rounded-full"  src={user.image} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CreateRoom;
