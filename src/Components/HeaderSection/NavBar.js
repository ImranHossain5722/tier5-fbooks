import React from 'react';
import logo from '../../Assets/Images/Tier5Fbooks.png'

const NavBar = () => {
    return (
        <div className='navbar'>
            
                
<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md py-2">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-start">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
            
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>

        <div class="flex place-items-end">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>

    </div>
</nav>



        </div>
    );
};

export default NavBar;