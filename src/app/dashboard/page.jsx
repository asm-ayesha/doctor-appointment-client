"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, FileText, Pencil, Trash2 } from "lucide-react";
import { useSession } from "@/lib/auth-client";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings"); 
  



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto space-y-6">
        
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Dashboard
        </h2>

       
        <div className="flex items-center gap-2 bg-gray-200/60 dark:bg-slate-900 w-fit p-1 rounded-xl transition-colors">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "bookings"
                ? "bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            My Bookings
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "profile"
                ? "bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            My Profile
          </button>
        </div>

        </div> 

      </div>
    
  );
};

export default Dashboard;