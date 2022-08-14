import React from 'react';
import imran from "../../Assets/Images/story_image.jpg";
import {BsDot}from "react-icons/bs"
const Contacts = () => {
    return (
        <div>
            <div className='flex items-center'>
            <div className='w-11 h-11 bg-gray-300 m-4 rounded-full'
              style={{
                background:`url(${imran})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} >
                      <BsDot className='relative top-3 left-4  text-[#2F9A48] text-[45px] '/>
                
              </div>
               <p>Imran Hossain</p>

            </div>
        </div>
    );
};

export default Contacts;