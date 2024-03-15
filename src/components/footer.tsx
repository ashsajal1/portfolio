import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-primaryLow to-secondaryLow py-4 px-12 text-primary">
            <div className="container w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p>Email: ashsajal@yahoo.com</p>
                    <p>Phone: +8801608478333</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Social Media</h3>
                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com/ashsajal1" className="hover:text-gray-400">
                            <FaGithub />
                        </Link>
                        <Link href="https://linkedin.com/in/ashsajal" className="hover:text-gray-400">
                            <FaLinkedin />
                        </Link>
                        <Link href="https://x.com/ashsajal1" className=" hover:text-gray-400">
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Projects</h3>
                    <ul>
                        <li><Link href="#" className=" hover:text-gray-400">Project 1</Link></li>
                        <li><Link href="#" className=" hover:text-gray-400">Project 2</Link></li>
                        <li><Link href="#" className="hover:text-gray-400">Project 3</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-2">
                <p>&copy; 2024 ashsajal. All rights reserved.</p>
            </div>
        </footer>
    );
}
