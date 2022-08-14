import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CreateRoom.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import { MdVideoCall } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules

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
    <div className="bg-white mx-auto max-w-sm md:max-w-md lg:max-w-[750px] rounded-xl py-2">
      {/* title section */}

      <div className="mt-6">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={2}
          loop={true}
          navigation={{
            prevEl: "#prev_slide",
            nextEl: "#next_slide",
          }}
          modules={[Autoplay, Navigation]}
          autoplay={false}
          className="mySwiper"
          style={{ "--swiper-theme-color": "#27AE61" }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>


            <div className="py-6 flex items-center justify-center hover:fill-blue-500">
              <div>
                <button className=" flex btn">
                  <MdVideoCall /> Create room
                </button>
              </div>
            </div>
          </SwiperSlide>
          {users?.map((user) => (
            <SwiperSlide key={user.id}>
              <div class="avatar online">
                <div class="w-14 rounded-full">
                  <img className="w-10 h-10 rounded-full" src={user.image} />
                </div>
              </div>

                
            </SwiperSlide>
          ))}
          <div className="swiperSlide_button_group">
            <div className="swiper_button swiper_button_prev" ref={prevRef}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="swiper_button swiper_button_next" ref={nextRef}>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          
        </Swiper>
      </div>
    </div>
  );
};

export default CreateRoom;
