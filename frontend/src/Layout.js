import React from "react";
import {Outlet} from "react-router";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar className="z-0" />
      <Outlet className="z-0" />
      <footer className="z-0 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/about-us" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/resources" className="hover:underline me-4 md:me-6">Resources</a>
                </li>
                <li>
                    <a href="/faq" className="hover:underline me-4 md:me-6">Faq</a>
                </li>
                <li>
                    <a href="/contact-us" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    </div>
  );
}