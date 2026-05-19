"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, User } from "lucide-react"; // User আইকন যোগ করা হয়েছে
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 💡 useSession থেকে সরাসরি ডেটা ও পেন্ডিং স্টেট নেওয়া হলো
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const linkClass = (path, isMobile = false) => {
    const baseClass = isMobile 
      ? "block py-2 text-base font-medium transition-colors" 
      : "transition-colors font-medium";
    const activeClass = pathname === path
      ? "text-[#2563EB] font-bold"
      : "text-gray-700 hover:text-[#2563EB]";
    return `${baseClass} ${activeClass}`;
  };

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

  const handleSignOut = async () => {
    await signOut(); 
    router.push('/');
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/assets/logo.png" alt="DocAppoint Logo" width={36} height={36} className="object-contain" />
            <span className="text-[#2563EB] font-bold text-xl tracking-tight">DocAppoint</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link className={linkClass("/")} href="/">Home</Link></li>
            <li><Link className={linkClass("/all-appointment")} href="/all-appointment">All Appointment</Link></li>
           
             <li><Link className={linkClass("/dashboard")} href="/dashboard">Dashboard</Link></li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="h-8 w-20 bg-gray-100 animate-pulse rounded-lg"></div> 
            ) : user ? (
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full ">
                  {user?.image ? (
                    <Image 
                      src={user?.image} 
                      alt={user?.name} 
                      width={28} 
                      height={28} 
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="p-1 bg-gray-200 rounded-full text-gray-600">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                  <span className="text-sm font-semibold text-gray-700 max-w-30 truncate">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              // 💡 লগআউট থাকলে লগইন ও রেজিস্টার বাটন দেখাবে
              <>
                <Link className={authClass("/login")} href="/login">Login</Link>
                <Link className={authClass("/register")} href="/register">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-1 shadow-inner">
          <div className="space-y-1 py-2">
            <Link onClick={() => setOpen(false)} href="/" className={linkClass("/", true)}>Home</Link>
            <Link onClick={() => setOpen(false)} href="/all-appointment" className={linkClass("/all-appointment", true)}>All Appointment</Link>
             <Link onClick={() => setOpen(false)} href="/dashboard" className={linkClass("/dashboard", true)}>Dashboard</Link>
          </div>

          <hr className="border-gray-200 my-2" />

          <div className="pt-2 space-y-2">
            {isPending ? (
              <div className="h-10 bg-gray-100 animate-pulse rounded-lg"></div>
            ) : user ? (
              // 💡 মোবাইলের জন্য ইউজার প্রোফাইল এবং লগআউট বাটন
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-2 py-1">
                  {user?.image ? (
                    <Image src={user?.image} alt={user?.name} width={36} height={36} className="rounded-full object-cover" />
                  ) : (
                    <div className="p-2 bg-gray-100 rounded-full text-gray-600">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-gray-800">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => { handleSignOut(); setOpen(false); }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link onClick={() => setOpen(false)} href="/login" className={authClass("/login", true)}>Login</Link>
                <Link onClick={() => setOpen(false)} href="/register" className={authClass("/register", true)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;