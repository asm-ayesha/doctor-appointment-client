"use client"

import { authClient, useSession } from "@/lib/auth-client";
import { getDoctorById } from "@/lib/doctor/data";
import { Calendar, CheckCircle2, Clock, FileText, Mail, Phone, Stethoscope, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



const AppointmentCard = () => {

    const { data: session } = useSession();
    const user = session?.user;
    const { id } = useParams();
    const router = useRouter();
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const token = session?.session?.token || session?.session?.id || null;
                if (id) {
                    const data = await getDoctorById(id, token);
                    if (data) {
                        setDoctor(data);
                    }
                }
            } catch (error) {
                console.error("Doctor fetch failed:", error);
            }
        };
        if (id && session) {
            fetchDoctor();
        }
    }, [id, session]);





    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const bookingData = Object.fromEntries(formData.entries());


        const bookingInfo = {
            ...bookingData,
            doctorId: id,
            doctorName: doctor?.name || "",
            userEmail: user?.email || "",
            createdAt: new Date()
        };



        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingInfo)
            });

            const data = await res.json();


            if (data && data.acknowledged) {
                toast.success("Appointment Booked Successfully!");
                e.target.reset();
                setTimeout(() => {
                    router.push("/dashboard")
                }, 800)
            } else {
                toast.error("Failed to book appointment. Please try again.");
            }
        } catch (error) {
            console.log("Submit error:", error);
            toast.error("Something went wrong! Connection failed.");
        }


    };


    // console.log(session)

    return (
        <div className='my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-5 px-2">Booking Appointment</h2>

            <div className="border border-blue-200 rounded-md shadow-lg p-10">
                <form className="space-y-4" onSubmit={handleSubmit}>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-600 tracking-wide">User Email</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-500 font-medium cursor-not-allowed outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-600 tracking-wide">Doctor Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Stethoscope className="h-4 w-4" />
                                </span>
                                <input
                                    type="text"
                                    value={doctor?.name || ""}
                                    readOnly
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-500 font-medium cursor-not-allowed outline-none"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wide">
                            Patient Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                <User className="h-4 w-4" />
                            </span>
                            <input
                                type="text"
                                name="patientName"
                                required
                                placeholder="Enter patient's full name"
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 tracking-wide">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="gender"
                                required
                                className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all cursor-pointer"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 tracking-wide">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <input
                                    type="number"
                                    name="phone"
                                    required
                                    placeholder="01XXXXXXXXX"
                                    pattern="[0-9]{11}"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 tracking-wide">
                                Date <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Calendar className="h-4 w-4" />
                                </span>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 tracking-wide">
                                Time <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Clock className="h-4 w-4" />
                                </span>
                                <input
                                    type="time"
                                    name="time"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wide">
                            Reason <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                            <span className="absolute top-3.5 left-3.5 text-slate-400">
                                <FileText className="h-4 w-4" />
                            </span>
                            <textarea
                                name="reason"
                                rows="3"
                                placeholder="Brief reason for your visit..."
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                            ></textarea>
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 mt-4 px-4 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        Confirm Booking
                    </button>

                </form>
            </div>

        </div>
    );
};

export default AppointmentCard;