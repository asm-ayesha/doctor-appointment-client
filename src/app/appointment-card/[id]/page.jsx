import { Calendar, CheckCircle2, Clock, FileText, Mail, Phone, Stethoscope, User } from "lucide-react";



const AppointmentCard = () => {



    return (
        <div className='my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-5 px-2">Booking Appointment</h2>

            <div className="border border-blue-200 rounded-md p-10">
                <form className="space-y-4">

                {/* রো ১: ইউজার ইমেইল এবং ডাক্তারের নাম (Read Only) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 tracking-wide">User Email</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                <Mail className="h-4 w-4" />
                            </span>
                            <input
                                type="email"
                                //   value={userEmail}
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
                                //   value={doctorName}
                                readOnly
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-500 font-medium cursor-not-allowed outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* রো ২: পেশেন্টের নাম */}
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

                {/* রো ৩: জেন্ডার এবং ফোন নাম্বার */}
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
                                type="tel"
                                name="phone"
                                required
                                placeholder="01XXXXXXXXX"
                                pattern="[0-9]{11}"
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* রো ৪: তারিখ এবং সময় */}
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

                {/* রো ৫: রিজন/কারণ */}
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

                {/* সাবমিট বাটন */}
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