"use client";

import { Calendar, Clock, User, FileText, Award, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ booking, bookings, setBookings }) => {
  const [editingBooking, setEditingBooking] = useState(null);

  // ✅ Delete appointment
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this appointment?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.acknowledged) {
        toast.success("Appointment cancelled successfully!");
        setBookings(bookings.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log("Delete error:", error);
      toast.error("Failed to cancel appointment");
    }
  };

  // ✅ Update appointment using pure JS method
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedInfo = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/${editingBooking._id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(updatedInfo),
      });
      const data = await res.json();

      if (data.acknowledged) {
        toast.success("Appointment updated successfully!");
        setBookings(bookings.map((b) => (b._id === editingBooking._id ? { ...b, ...updatedInfo } : b)));
        setEditingBooking(null);
      }
    } catch (error) {
      console.log("Update error:", error);
      toast.error("Failed to update appointment");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-5 rounded-xl shadow-md space-y-4 max-w-sm w-full">
      {/* Doctor Name */}
      <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 text-xl tracking-tight">
        {booking.doctorName}
      </h3>

      {/* Details Area - Showing Patient, Gender, Date, Time */}
      <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 border-l-2 border-slate-100 dark:border-slate-800 pl-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-slate-400" />
          <span>Patient: <span className="text-slate-900 dark:text-slate-200 font-medium">{booking.patientName}</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-slate-400" />
          <span>Gender: <span className="text-slate-900 dark:text-slate-200 font-medium capitalize">{booking.gender}</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span>Date: <span className="text-slate-900 dark:text-slate-200 font-medium">{booking.date}</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-400" />
          <span>Time: <span className="text-slate-900 dark:text-slate-200 font-medium">{booking.time}</span></span>
        </div>
        {booking.reason && (
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-slate-400 mt-0.5" />
            <span>Reason: <span className="text-slate-900 dark:text-slate-200 font-medium">{booking.reason}</span></span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-start gap-2.5 pt-1">
        <button 
          onClick={() => setEditingBooking(booking)}
          className="flex items-center gap-1 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <Pencil className="h-3.5 w-3.5" /> Update
        </button>
        <button 
          onClick={() => handleDelete(booking._id)}
          className="flex items-center gap-1 px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
        >
          <Trash2 className="h-3.5 w-3.5" /> Delete
        </button>
      </div>

      {/* 🪟 White Form Modal Pop-up */}
      {editingBooking && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-slate-200 rounded-xl max-w-md w-full p-6 space-y-4 relative shadow-2xl">
            
            <button 
              onClick={() => setEditingBooking(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <h4 className="text-lg font-semibold text-slate-900">Update Appointment</h4>
            
            <form onSubmit={handleUpdateSubmit} className="space-y-4 text-sm">
              {/* Doctor Name - Read Only */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Doctor Name</label>
                <input 
                  type="text" 
                  value={editingBooking.doctorName} 
                  readOnly 
                  className="w-full px-3 py-2 border border-slate-200 bg-slate-50 text-slate-400 rounded-lg outline-none font-medium cursor-not-allowed select-none" 
                />
              </div>

              {/* Patient Name - Editable with User Info */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Patient Name</label>
                <input 
                  type="text" 
                  name="patientName" 
                  defaultValue={editingBooking.patientName} 
                  required 
                  className="w-full px-3 py-2 border border-slate-200 bg-white text-slate-900 rounded-lg outline-none focus:border-emerald-500" 
                />
              </div>

              {/* Gender Select - Editable with User Info */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Gender</label>
                <select 
                  name="gender" 
                  defaultValue={editingBooking.gender} 
                  required 
                  className="w-full px-3 py-2 border border-slate-200 bg-white text-slate-900 rounded-lg outline-none focus:border-emerald-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date & Time - Editable with User Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    defaultValue={editingBooking.date} 
                    required 
                    className="w-full px-3 py-2 border border-slate-200 bg-white text-slate-900 rounded-lg outline-none focus:border-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    defaultValue={editingBooking.time} 
                    required 
                    className="w-full px-3 py-2 border border-slate-200 bg-white text-slate-900 rounded-lg outline-none focus:border-emerald-500" 
                  />
                </div>
              </div>

              {/* Reason - Editable with User Info */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Reason / Symptoms</label>
                <input 
                  type="text" 
                  name="reason" 
                  defaultValue={editingBooking.reason} 
                  className="w-full px-3 py-2 border border-slate-200 bg-white text-slate-900 rounded-lg outline-none focus:border-emerald-500" 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all cursor-pointer shadow-sm"
              >
                Save Changes
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;