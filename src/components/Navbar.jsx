"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Helper for main navigation links
  const linkClass = (path, isMobile = false) => {
    const baseClass = isMobile 
      ? "block py-2 text-base font-medium transition-colors" 
      : "transition-colors font-medium";
    
    const activeClass = pathname === path
      ? "text-[#2563EB] font-bold"
      : "text-gray-700 hover:text-[#2563EB]";

    return `${baseClass} ${activeClass}`;
  };

  // Helper for Auth buttons
  const authClass = (path, isMobile = false) => {
    const isActive = pathname === path;
    const baseClass = "inline-block text-center rounded-lg font-medium transition-all duration-200";
    
    if (isMobile) {
      return isActive
        ? `${baseClass} w-full bg-[#2563EB] text-white px-4 py-2.5 shadow-sm`
        : `${baseClass} w-full bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5`;
    }

    return isActive
      ? `${baseClass} bg-[#2563EB] text-white px-4 py-2 shadow-sm hover:bg-[#1d4ed8]`
      : `${baseClass} text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 px-4 py-2`;
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* Centered bounding box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="DocAppoint Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-[#2563EB] font-bold text-xl tracking-tight">
              DocAppoint
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link className={linkClass("/")} href="/">Home</Link>
            </li>
            <li>
              <Link className={linkClass("/all-appointment")} href="/all-appointment">
                All Appointment
              </Link>
            </li>
            <li>
              <Link className={linkClass("/dashboard")} href="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Desktop Authentication Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link className={authClass("/login")} href="/login">
              Login
            </Link>
            <Link className={authClass("/register")} href="/register">
              Register
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-1 shadow-inner">
          <div className="space-y-1 py-2">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className={linkClass("/", true)}
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/all-appointment"
              className={linkClass("/all-appointment", true)}
            >
              All Appointment
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/dashboard"
              className={linkClass("/dashboard", true)}
            >
              Dashboard
            </Link>
          </div>

          <hr className="border-gray-200 my-2" />

          {/* Mobile Auth actions stacked vertically */}
          <div className="pt-2 space-y-2">
            <Link
              onClick={() => setOpen(false)}
              href="/login"
              className={authClass("/login", true)}
            >
              Login
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/register"
              className={authClass("/register", true)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;