import React from 'react';
import logo from '../../Assets/Images/Tier5Fbooks.png'
import { GoSearch } from 'react-icons/go';
import { BsPersonFill} from 'react-icons/bs';
import { BsMessenger} from 'react-icons/bs';
// import { IoNotifications} from 'react-icons/Io';
import { BsFillBellFill} from 'react-icons/bs';


const NavBar = () => {
    return (
        <div className='navbar'>
            
                
<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md py-2">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-start">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
            
        </a>
        <div className="flex items-center bg-gray-100  lg:w-1/2 rounded-2xl py-2 hover:bg-gray-200 " >
            <GoSearch className='ml-[20px] text-sm text-gray-500' />
            <input className='searchbar bg-[#80808000] text-black font-sembold pl-1 focus:outline-none '
            placeholder='Search Tier5Fbooks '/>
            
        </div>

        <div class="flex place-items-end gap-3 ">
        <div className="topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <BsMessenger className=' text-lg ' />
           
          </div>
        <div className="topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <BsFillBellFill />
           
          </div>
        <div className="topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <BsPersonFill />
           
          </div>
        </div>

    </div>
</nav>



        </div>
    );
};

export default NavBar;