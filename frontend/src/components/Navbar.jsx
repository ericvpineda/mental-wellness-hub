import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-3xl font-bold">Logo</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:text-sky-700 transition duration-200">Home</Link></li>
                    <li><Link to="/about-us" className="text-white hover:text-sky-700 transition duration-200">About Us</Link></li>
                    <li><Link to="/resources" className="text-white hover:text-sky-700 transition duration-200">Resources</Link></li>
                    <li><Link to="/faq" className="text-white hover:text-sky-700 transition duration-200">Faq</Link></li>
                    <li><Link to="/contact-us" className="text-white hover:text-sky-700 transition duration-200">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
