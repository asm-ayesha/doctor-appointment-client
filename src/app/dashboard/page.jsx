"use client";

import BookingCard from "@/components/bookingCard";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings"); 
  const { data: session } = useSession();
  const user = session?.user;
  const [bookings, setBookings] = useState([]);

  // ডাটাবেজ থেকে বুকিংগুলো আনার নিয়ম
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings?email=${user?.email}`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    if (user?.email && activeTab === "bookings") {
      fetchBookings();
    }
  }, [user?.email, activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto space-y-6">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Dashboard
        </h2>

        {/* 🔄 ট্যাব সিলেকশন বাটন এরিয়া (এখানে শুধু বাটন দুটি পাশাপাশি থাকবে) */}
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

        {/* 📋 বুকিং লিস্ট ট্যাব (বাটন এরিয়ার বাইরে, নিচে আলাদাভাবে থাকবে) */}
        {activeTab === "bookings" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {bookings.length === 0 ? (
              <p className="text-gray-500 text-sm p-2">No appointments found.</p>
            ) : (
              bookings.map((booking) => (
                <BookingCard 
                  key={booking._id} 
                  booking={booking} 
                  bookings={bookings}
                  setBookings={setBookings}
                />
              ))
            )}
          </div>
        )}

        {/* 👤 প্রোফাইল ট্যাব (যদি ভবিষ্যতে কখনো কাজ করতে চান) */}
        {activeTab === "profile" && (
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm text-sm text-gray-900 dark:text-white mt-6">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        )}

      </div> 
    </div>
  );
};

export default Dashboard;