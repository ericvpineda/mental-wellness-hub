import { useState } from "react";
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

  return (
    <nav className="bg-slate-50 text-black border-b-2 py-4 px-2 w-full z-auto">
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
          <li>
            <Link
              to="/contact-us"
              className="text-black hover:text-sky-700 transition duration-200 hidden lg:block"
            >
              Contact
            </Link>
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
  );
};

export default Navbar;
