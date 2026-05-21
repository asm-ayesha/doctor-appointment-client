"use client";

import { useState } from "react";
import { Avatar } from "@heroui/react";
import { Mail, Pencil, X, User, Image as ImageIcon } from "lucide-react";
import toast from "react-hot-toast";
import { updateUser } from "@/lib/doctor/data";

const ProfileCard = ({ user, onUpdateSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Updating profile...");

    try {
      const formData = new FormData(e.target);
      const updatedData = Object.fromEntries(formData.entries());

      const result = await updateUser(user?.email, updatedData, null); 
      toast.dismiss(loadingToast);

      if (result) {
        toast.success("Profile updated successfully!");
        setIsModalOpen(false);
        
        // 🎯 পেজ লোড ছাড়া ন্যাভবারকে জানানোর জন্য লোকাল স্টোরেজে ডেটা রাখা হলো
        localStorage.setItem("user_profile_name", updatedData.name);
        localStorage.setItem("user_profile_image", updatedData.image);
        
        // ন্যাভবারকে সাথে সাথে স্টেট আপডেট করতে বাধ্য করার ট্রিক
        window.dispatchEvent(new Event("storage"));

        // ড্যাশবোর্ডের স্টেট আপডেট করার জন্য
        if (onUpdateSuccess) onUpdateSuccess();

      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Form submit error:", error);
      toast.error("Something went wrong!");
    }
  };

  if (!user) return <div className="animate-pulse bg-slate-100 h-32 w-full rounded-2xl"></div>;

  return (
    <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm max-w-sm w-full">
      <div className="flex items-center gap-4 mb-6">
        <Avatar key={user?.image || user?.name}>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>{user.email}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-blue -600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
      >
        <Pencil className="w-4 h-4" /> Update Profile
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 cursor-pointer"><X size={20}/></button>
            <h4 className="font-bold text-lg">Update Profile</h4>
            
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><User size={12}/> Name</label>
                <input name="name" defaultValue={user.name} className="w-full p-2.5 border rounded-lg text-sm outline-teal-500" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><ImageIcon size={12}/> Photo URL</label>
                <input name="image" defaultValue={user.image} className="w-full p-2.5 border rounded-lg text-sm outline-teal-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 cursor-pointer transition-all">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;