'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();

    const tabs = [
        { name: 'Home', href: 'https://www.crakcode.in/' },
        { name: 'Community', href: 'https://www.crakcode.in/community' },
        { name: 'Hackathon', href: 'https://www.crakcode.in/hackathon' },
        { name: 'AI Chatbot', href: '/' },
    ];

    return (
        <nav className="w-full flex items-center justify-between px-4 py-4 shadow-md bg-white">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <img src="https://www.crakcode.in/crakCodeLogoImg.svg" alt="Crack-code Logo" className="h-10 w-10 object-contain" />
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-8">
                {tabs.map((tab, index) => {
                    const isActive = pathname === tab.href;

                    return (
                        <a
                            key={index}
                            href={tab.href}
                            className={`group relative text-md font-sans font-bold transition-colors duration-300 ${
                                isActive ? 'text-[#1BA538]' : 'text-gray-700 hover:text-[#1BA538]'
                            }`}
                        >
                            {tab.name}
                            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#1BA538] transition-all duration-300 ${
                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </a>
                    );
                })}
            </div>

            {/* Notification & Profile */}
            <div className="flex items-center space-x-6">
                <img src="https://www.crakcode.in/Navbar/notification.svg" alt="notification icon" className="h-8.5 w-8.5" />
                <User className="h-10 w-10 p-1 text-gray-700 border-2 border-black rounded-full" />
            </div>
        </nav>
    );
};

export default Navbar;
