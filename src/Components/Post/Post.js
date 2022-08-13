import React from 'react';
import imran from "../../Assets/Images/story_image.jpg";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlinePhotoLibrary  } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import CreateRoom from '../CreateRoom/CreateRoom';
import ShowPost from '../ShowPost/ShowPost';

const Post = () => {
    return (
        <div className=''>
            <div className='post mt-6 bg-white  rounded-xl shadow-md '>
            <div className='flex items-center'> 
              <div className='w-14 h-14 bg-gray-300 m-4 rounded-full'
              style={{
                background:`url(${imran})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} >
              </div>
              <input className='flex justify-center bg-gray-200 px-7 mx-auto  w-5/6 h-12 rounded-xl focus:outline-none hover:bg-gray-100'
              placeholder='Whats on your mind' />
            </div> 
            <div className=' w-5/6 h-[1px] bg-gray-200 mx-auto'> </div>
             <div className='flex '>
                 <div className=' flex items-center gap-2 p-5'>
                 <RiVideoAddFill className="ml-[20px] text-[25px] text-red-500" />
                 <h2 className='text-gray-400 font-semibold '>Live Video </h2>
                 </div>
                 <div className=' flex items-center gap-2 p-5'>
                 < MdOutlinePhotoLibrary  className="ml-[2px] text-[25px] text-green-800" />
                 <h2 className='text-gray-400 font-semibold '> Photo/ Video </h2>
                 </div>
                 <div className=' flex items-center gap-2 p-5'>
                 < GoSmiley  className="ml-[2px] text-[25px] text-yellow-400" />
                 <h2 className='text-gray-400 font-semibold'> Feeling/activity </h2>
                 </div>
             </div>
            </div>

           <div className="mt-6" >
           <CreateRoom />
           </div>

           <div className="mt-6" >
           <ShowPost/>
           <ShowPost/>
           <ShowPost/>
           <ShowPost/>
           </div>
            
             
        </div>
    );
};

export default Post;