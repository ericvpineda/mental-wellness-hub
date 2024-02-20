import React from "react";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-between p-4 bg-green-500 text-white">
                <ul className="flex">
                    <li className="mx-4"><a href="/">Home</a></li>
                    <li className="mx-4"><a href="/resources">Resources</a></li>
                    <li className="mx-4"><a href="/about-us">About Us</a></li>
                    <li className="mx-4"><a href="/login">Login</a></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar
