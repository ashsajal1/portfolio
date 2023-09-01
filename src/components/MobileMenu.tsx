
import { FaTimes, FaHome, FaUserPlus, FaBriefcase, FaRegClock, FaPhone } from 'react-icons/fa';

import { NavLink } from 'react-router-dom'

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-white z-10 transform dark:bg-gray-900 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}
        >
            <div className="px-4 py- text-white flex justify-between items-center navbar bg-gradient-to-r from-green-500 to-blue-500 dark:text-white">
                <h2 className="text-2xl font-semibold">Menu</h2>
                <FaTimes onClick={onClose} className="focus:outline-none text-xl" />
            </div>
            <div className="py-4 px-4 overflow-auto dark:text-slate-50">
                <ul className="space-y-2">
                    <NavLink to={'/'}>
                        <li className="flex items-center shadow p-3 rounded dark:bg-gray-800">
                            <FaHome className="mr-2" />
                            Home
                        </li>
                    </NavLink>

                    <li className="flex items-center shadow p-3 rounded dark:bg-gray-800">
                        <FaUserPlus className="mr-2" />
                        Sign Up
                    </li>
                    <li className="flex items-center shadow p-3 rounded dark:bg-gray-800">
                        <FaBriefcase className="mr-2" />
                        Services
                    </li>
                    <li className="flex items-center shadow p-3 rounded dark:bg-gray-800">
                        <FaRegClock className="mr-2" />
                        Free Trial
                    </li>
                    <li className="flex items-center shadow p-3 rounded dark:bg-gray-800">
                        <FaPhone className="mr-2" />
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
