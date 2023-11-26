import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleButtonClick = (buttonName : string) => {
        setSelectedButton(buttonName);
    };

    return (
        <nav className="bg-slate-800 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white text-2xl font-bold">Aelys.me</span>
                        </div>
                        <div className=" md:block">  
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" onClick={() => handleButtonClick('Home')} className={`px-3 py-2 rounded-md text-sm transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ${selectedButton === 'Home' ? 'bg-purple-500 text-white' : 'text-gray-300  hover:text-white'}`}>Home</Link>
                                <Link to="/about" onClick={() => handleButtonClick('About')} className={`px-3 py-2 rounded-md text-sm transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ${selectedButton === 'About' ? 'bg-purple-500 text-white' : 'text-gray-300  hover:text-white'}`}>About</Link>
                                <Link to="/contact" onClick={() => handleButtonClick('Contact')} className={`px-3 py-2 rounded-md text-sm transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ${selectedButton === 'Contact' ? 'bg-purple-500 text-white' : 'text-gray-300  hover:text-white'}`}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="relative">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-600 opacity-100"></span>
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                            
                               More
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 z-50 bg-white rounded-md shadow-lg">
                                    <Link to="/curriculum" onClick={() => handleButtonClick('Curriculum')} className={`rounded-md block px-4 py-2 text-sm text-gray-700 ${selectedButton === 'Curriculum' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>Curriculum</Link>
                                    <Link to="/setup" onClick={() => handleButtonClick('Setup')} className={`rounded-md block px-4 py-2 text-sm text-gray-700 ${selectedButton === 'Setup' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>Setup</Link>
                                    <Link to="/future-goals" onClick={() => handleButtonClick('Future goals')} className={`rounded-md block px-4 py-2 text-sm text-gray-700 ${selectedButton === 'Future goals' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>Future goals</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}