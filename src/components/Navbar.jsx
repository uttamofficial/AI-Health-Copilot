import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import Button from "./Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-primary font-bold text-lg hidden sm:block">
                AI Health Copilot
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Show when="signed-in">
              <Link
                to="/"
                className={`${isActive("/") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-100"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`${isActive("/dashboard") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-100"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                Dashboard
              </Link>
              <Link
                to="/body"
                className={`${isActive("/body") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-100"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                Body Map
              </Link>
              <Link
                to="/status"
                className={`${isActive("/status") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-100"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                Alerts
              </Link>
              <UserButton />
            </Show>
            <Show when="signed-out">
              <Link
                to="/"
                className={`${isActive("/") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-100"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                Home
              </Link>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-primary hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                How It Works
              </a>
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Get Started</Button>
              </SignUpButton>
            </Show>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Show when="signed-in">
              <Link
                to="/"
                className={`${isActive("/") ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`${isActive("/dashboard") ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/body"
                className={`${isActive("/body") ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Body Map
              </Link>
              <Link
                to="/status"
                className={`${isActive("/status") ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Alerts
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2 px-3">
                <UserButton />
              </div>
            </Show>
            <Show when="signed-out">
              <Link
                to="/"
                className={`${isActive("/") ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#features"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <div className="pt-2 flex flex-col gap-2">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full">Get Started</Button>
                </SignUpButton>
              </div>
            </Show>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
