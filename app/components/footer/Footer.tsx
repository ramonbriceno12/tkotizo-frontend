import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Quick Links */}
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4 md:mb-0 w-full md:w-auto">
                        {/* Logo */}
                        <div className="mb-4 md:mb-0 md:mr-8">
                            <Image src="/images/logos/logoazul.png" alt="Logo" width={150} height={150} />
                        </div>
                        {/* Quick Links */}
                        {/* <div>
                            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div> */}
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
                            <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
                            <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-700 text-white py-4">
                <div className="container mx-auto flex justify-center items-center space-x-2">
                    <FaCopyright />
                    <span>Todos los derechos reservados. Tkotizo 2024.</span>
                </div>
            </div>
        </>
    );
};

export default Footer;