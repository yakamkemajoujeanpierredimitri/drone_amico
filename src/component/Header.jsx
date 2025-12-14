import React from 'react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between lg:hidden z-10">
            <h1 className="font-bold text-lg text-blue-600 dark:text-blue-400">Drone Amico</h1>
            <button 
                onClick={onMenuClick} 
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Open menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
                </svg>
            </button>
        </header>
    );
};

export default Header;