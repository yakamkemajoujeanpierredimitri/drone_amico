import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <aside 
                className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-5">
                    <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-8"></h2>
                    <nav className="flex flex-col space-y-3">
                        <Link to="/" onClick={onClose} className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-base font-semibold">Home</Link>
                        <Link to="/profile" onClick={onClose} className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-base font-semibold">Profilo</Link>
                        <Link to="/livestream" onClick={onClose} className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-base font-semibold">Live</Link>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;