import React from 'react';
import jira from "../../Assets/Images/jira.jfif";
import'./NewsFeed.css'
import { AiOutlinePlus } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import c from "../../Assets/Images/jira.jfif";
import'./NewsFeed.css'
const NewsFeed = () => {
    return (
        <div className=' '>
            

            <div className='flex gap-4'>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='bg-white w-6  absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <AiOutlinePlus className='absolute left-14 mt-[-6px] bg-[#166ADA] rounded-xl border border-solid white text-white ' />
                  </div>
                    <p className='text-center text-[13px] p-5'>Create Your Story</p>
                 </div>

                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='w-6  absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-white text-[20px]' />
                  </div>
                    <p className='text-center text-white font-semibold  text-[13px] p-5'>Jhon Adom </p>
                 </div>
                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='w-6  absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-white text-[20px]' />
                  </div>
                    <p className='text-center text-white font-semibold  text-[13px] p-5'>Jhon Adom </p>
                 </div>

                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className='w-6  absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-white text-[20px]' />
                  </div>
                    <p className='text-center text-white font-semibold  text-[13px] p-5'>Jhon Adom </p>
                 </div>

                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='w-6  absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-white text-[20px]' />
                  </div>
                    <p className='text-center text-white font-semibold  text-[13px] p-5'>Jhon Adom </p>
                 </div>

                </div>
                
                
           </div>

        </div>
    );
};

export default NewsFeed;