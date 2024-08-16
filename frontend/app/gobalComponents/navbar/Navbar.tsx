"use client";

import NavElements from './NavElements';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [userType, setUserType] = useState('user');
    const router = useRouter();

    const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newUserType = e.target.value;
        setUserType(newUserType);
        if (newUserType === 'user') {
            router.push('/user/1/dashboard');
        } else if (newUserType === 'admin') {
            router.push('/admin/1/dashboard');
        }
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-8 px-6 2xl:px-0">
        <Link href="/user/[id]/dashboard" as="/user/1/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OnBoardingAI</span>
        </Link>
       
            <div className="flex-grow flex justify-center items-center space-x-20 rtl:space-x-reverse md:flex">
                <NavElements icon="https://img.icons8.com/?size=100&id=83986&format=png&color=FFFFFF"/>
                <NavElements icon="https://img.icons8.com/?size=100&id=JnHXhz9KQ8RC&format=png&color=FFFFFF"/>
                <NavElements icon="https://flowbite.com/docs/images/logo.svg"/>
            </div>
            
            <div className="relative">
                <select 
                    value={userType} 
                    onChange={handleUserTypeChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="user">USER</option>
                    <option value="admin">ADMIN</option>
                </select>
            </div>
            {/* needs to make dynamic to small screens */}
        </div>
        </nav>
    )
}

export default Navbar;