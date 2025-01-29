import React, { useState } from 'react';
import { FaHammer, FaTshirt, FaUtensils, FaTags, FaBars } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Burger Button */}
            <button
                className="md:hidden p-4 focus:outline-none"
                onClick={toggleSidebar}
            >
                <FaBars className="text-gray-700" />
            </button>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-100 shadow-md p-4`}>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <FaHammer className="text-gray-700" />
                        <a href="#" className="text-gray-700 hover:text-gray-900">Construction</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTshirt className="text-gray-700" />
                        <a href="#" className="text-gray-700 hover:text-gray-900">Clothes</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUtensils className="text-gray-700" />
                        <a href="#" className="text-gray-700 hover:text-gray-900">Food</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTags className="text-gray-700" />
                        <a href="#" className="text-gray-700 hover:text-gray-900">Other</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;