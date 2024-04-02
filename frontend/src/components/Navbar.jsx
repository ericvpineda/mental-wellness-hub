import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block lg:block xl:block relative z-50 bg-slate-50 text-black border-b-2 py-4 px-2 w-full">
        <div className="container mx-auto flex text-sm md:text-base lg:text-base text-black justify-center md:justify-between items-center">
          <Link to="/" className="text-black font-bold hidden md:block">
            <img
              src={Logo}
              className="w-12 h-12"
              style={{ transform: "scaleX(-1)" }}
            />
          </Link>
          <ul className="flex space-x-2 md:space-x-6">
            <li>
              <Link
                to="/"
                className="text-black hover:text-sky-700 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-black hover:text-sky-700 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-black hover:text-sky-700 transition duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="rounded-md"
              >
                <button className="text-black hover:text-sky-700 transition duration-200 z-50">
                  Services
                </button>
                {isOpen && (
                  <ul className="flex flex-col space-y-2 bg-white text-black absolute -translate-x-10 border-2 border-gray-100 rounded-md px-8 py-2">
                    <li>
                      <Link
                        to="/cbt"
                        className="text-black hover:text-sky-700 transition duration-200 p-1 border-b-2 w-full"
                      >
                        CBT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/meditation"
                        className="text-black hover:text-sky-700 transition duration-200 p-1 border-b-2"
                      >
                        Meditation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/resources"
                        className="text-black hover:text-sky-700 transition duration-200 p-1 border-b-2"
                      >
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/journal"
                        className="text-black w-full hover:text-sky-700 transition duration-200 p-1"
                      >
                        Journal
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="block md:hidden relative z-50 bg-slate-50 text-black border-b-2 py-4 px-2 w-full">
        <div className="container mx-auto flex text-sm text-black justify-between items-center">
          <Link to="/" className="text-black font-bold block md:hidden">
            <img
              src={Logo}
              className="w-12 h-12"
              style={{ transform: "scaleX(-1)" }}
            />
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {hamburgerOpen && (
          <div className="md:hidden pt-12 pb-12">
            <ul className="flex flex-col text-xl font-medium gap-6 ml-12">
              <li>
                <Link
                  to="/"
                  className="text-black hover:text-sky-700 transition duration-200 w-full"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-black hover:text-sky-700 transition duration-200"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-black hover:text-sky-700 transition duration-200"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="rounded-md"
                >
                  <button className="text-black hover:text-sky-700 transition duration-200 z-50">
                    Services
                  </button>
                  {isOpen && (
                    <ul className="flex flex-col space-y-2 ml-8 py-2 font-light text-base">
                      <li>
                        <Link
                          to="/cbt"
                          className="text-black hover:text-sky-700 transition duration-200 p-1 w-full"
                          onClick={() => {
                            setHamburgerOpen(!hamburgerOpen);
                            setIsOpen(false);
                          }}
                        >
                          CBT
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/meditation"
                          className="text-black hover:text-sky-700 transition duration-200 p-1"
                          onClick={() => {
                            setHamburgerOpen(!hamburgerOpen);
                            setIsOpen(false);
                          }}
                        >
                          Meditation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resources"
                          className="text-black hover:text-sky-700 transition duration-200 p-1"
                          onClick={() => {
                            setHamburgerOpen(!hamburgerOpen);
                            setIsOpen(false);
                          }}
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/journal"
                          className="text-black w-full hover:text-sky-700 transition duration-200 p-1"
                          onClick={() => {
                            setHamburgerOpen(!hamburgerOpen);
                            setIsOpen(false);
                          }}
                        >
                          Journal
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
