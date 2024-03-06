import React from "react";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-end p-4 bg-blue-500 text-white">
                <ul className="flex">
                    <li className="mx-4 hover:bg-sky-700"><a href="/">Home</a></li>
                    <li className="mx-4 hover:bg-sky-700"><a href="/about-us">About Us</a></li>
                    <li className="mx-4 hover:bg-sky-700"><a href="/resources">Resources</a></li>
                    <li className="mx-4 hover:bg-sky-700"><a href="/faq">Faq</a></li>
                    <li className="mx-4 hover:bg-sky-700"><a href="/contact-us">Contact Us</a></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar