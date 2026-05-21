"use client";

import BookingCard from "@/components/bookingCard";
import ProfileCard from "@/components/ProfileCard";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; 

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "bookings"; 

  const { data: session, update: updateSession } = useSession();
  const user = session?.user;
  const [bookings, setBookings] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [dbUser, setDbUser] = useState(null);

 
  const handleTabChange = (newTab) => {
    router.push(`/dashboard?tab=${newTab}`);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings?email=${user?.email}`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Fetch bookings error:", error);
      }
    };

    if (user?.email && activeTab === "bookings") {
      fetchBookings();
    }
  }, [user?.email, activeTab]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user?.email) {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateUsers/profile?email=${user.email}`);
          if (res.ok) {
            const data = await res.json();
            if (data && data.name) {
              setDbUser(data);
            }
          }
        }
      } catch (error) {
        console.error("Dashboard profile fetch error:", error);
      }
    };
    
    fetchUser();
  }, [user?.email, refreshKey]);

  
  const handleRefreshUser = async () => {
    setRefreshKey(prev => prev + 1);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateUsers/profile?email=${user?.email}`);
      if (res.ok) {
        const latestData = await res.json();
      
        if (latestData && typeof updateSession === "function") {
          await updateSession({
            ...session,
            user: {
              ...session?.user,
              name: latestData.name,
              image: latestData.image
            }
          });
        }
      }
    } catch (e) {
      console.error("Session update error:", e);
    }
  };

  const currentUser = dbUser ? { ...user, name: dbUser.name, image: dbUser.image } : user;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Dashboard
        </h2>

       
        <div className="flex items-center gap-2 bg-gray-200/60 dark:bg-slate-900 w-fit p-1 rounded-xl transition-colors">
          <button onClick={() => handleTabChange("bookings")} className={`px-4 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${activeTab === "bookings" ? "bg-white dark:bg-slate-800 text-gray-900 shadow-sm" : "text-gray-500"}`}>My Bookings</button>
          <button onClick={() => handleTabChange("profile")} className={`px-4 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${activeTab === "profile" ? "bg-white dark:bg-slate-800 text-gray-900 shadow-sm" : "text-gray-500"}`}>My Profile</button>
        </div>

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
            <div className="mt-6">
              {bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
                  <h3 className="text-lg font-bold text-slate-800">No Appointments Found</h3>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bookings.map((booking) => (
                    <BookingCard key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings} />
                  ))}
                </div>
              )}
            </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="mt-6">
            <ProfileCard
               user={currentUser} 
               onUpdateSuccess={handleRefreshUser}
            />
          </div>
        )}
      </div> 
    </div>
  );
};

export default Dashboard;