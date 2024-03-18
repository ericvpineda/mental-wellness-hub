import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 text-black border-b-2 p-6 z-auto">
      <div className="container mx-auto flex text-black justify-between items-center">
        <Link to="/" className="text-black text-3xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-4">
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
              About Us
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
                <ul className="flex flex-col space-y-2 bg-white text-black absolute -translate-x-4 border-2 rounded-md p-2">
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
              to="/faq"
              className="text-black hover:text-sky-700 transition duration-200"
            >
              Faq
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-black hover:text-sky-700 transition duration-200"
            >
              Contact Us
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
