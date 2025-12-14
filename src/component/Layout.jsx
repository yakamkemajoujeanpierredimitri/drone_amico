import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header onMenuClick={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
