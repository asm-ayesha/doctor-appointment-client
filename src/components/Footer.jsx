"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reusable styling classes
  const linkClass = "text-gray-600 hover:text-[#2563EB] transition-colors duration-200 text-sm font-medium";
  const socialIconClass = "p-2 bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-[#2563EB] rounded-lg transition-all duration-200 border border-gray-100";

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Description (Takes 5 grid cols on large screens) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2 group w-max">
              <Image
                src="/assets/logo.png"
                alt="docAppoint Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-[#2563EB] font-bold text-xl tracking-tight">
                DocAppoint
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Your trusted partner in modern healthcare management. Book online doctor appointments seamlessly, manage your health dashboard, and consult with top specialists anytime, anywhere.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Facebook">
                <FaFacebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Twitter">
                <FaTwitter className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="LinkedIn">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (Takes 3 grid cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-gray-900 font-semibold text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/all-appointment" className={linkClass}>All Appointments</Link></li>
              <li><Link href="/dashboard" className={linkClass}>Dashboard</Link></li>
              <li><Link href="/login" className={linkClass}>Login</Link></li>
              <li><Link href="/register" className={linkClass}>Register</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Support Info (Takes 4 grid cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-gray-900 font-semibold text-sm tracking-wider uppercase">
              Contact & Support
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>123 Medical Center Road, Healthcare Plaza, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="h-4 w-4 text-[#2563EB] shrink-0" />
                <a href="tel:+880123456789" className="hover:text-[#2563EB] transition-colors">+880 1234-56789</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="h-4 w-4 text-[#2563EB] shrink-0" />
                <a href="mailto:support@docappoint.com" className="hover:text-[#2563EB] transition-colors">support@docappoint.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} <span className="font-semibold text-gray-700">docAppoint</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" /> for better health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;