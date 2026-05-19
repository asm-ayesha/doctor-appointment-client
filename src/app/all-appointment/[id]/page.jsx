
import { getDoctorById } from "@/lib/doctor/data";
import Image from "next/image";
import { Star, Briefcase, Building2, MapPin, CalendarDays, Wallet, CheckCircle2 } from "lucide-react";

const DoctorDetails = async ({ params }) => {
    const { id } = await params;
    const data = await getDoctorById(id)
    const { name,
        specialty,
        image,
        experience,
        hospital,
        location,
        fee,
        rating,
        total_reviews,
        description } = data;

    const handleBookAppointment = () => {
        console.log("Booking appointment...");
    };
    const {
        availability = []
    } = data;


    return (
        <div className="max-w-5xl w-full mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-5 px-2" >Dcotor Details</h2>



            <div className=" bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50 dark:shadow-none transition-all duration-300 my-15">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">


                    <div className="relative w-full md:w-70 h-80 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-blue-100 dark:border-blue-800">
                        <Image
                            src={image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"}
                            alt={name}
                            fill
                            priority

                            className="object-cover"
                        />
                    </div>

                    <div className="grow flex flex-col justify-between space-y-5">

                        <div className="space-y-2">
                            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100/30">
                                {specialty}
                            </span>
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                    {name}
                                </h2>
                                <CheckCircle2 className="h-5 w-5 text-emerald-500 fill-emerald-500/10 shrink-0" />
                            </div>

                            <div className="flex items-center gap-1.5 text-sm">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 dark:text-slate-700"}`}
                                        />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-800 dark:text-slate-200">{Number(rating).toFixed(1)}</span>
                                <span className="text-gray-400 dark:text-slate-500 text-xs">({total_reviews} patient reviews)</span>
                            </div>
                        </div>


                        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                            {description}
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                            <div className="flex items-center gap-3.5 px-4 py-3 bg-gray-50/60 dark:bg-slate-950/40 border border-gray-100 dark:border-slate-800/60 rounded-xl">
                                <Briefcase className="h-5 w-5 text-blue-500 shrink-0" />
                                <div>
                                    <p className="text-[11px] font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wider">Experience</p>
                                    <p className="text-sm font-bold text-gray-800 dark:text-slate-200">{experience}</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3.5 px-4 py-3 bg-gray-50/60 dark:bg-slate-950/40 border border-gray-100 dark:border-slate-800/60 rounded-xl">
                                <Building2 className="h-5 w-5 text-purple-500 shrink-0" />
                                <div>
                                    <p className="text-[11px] font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wider">Hospital</p>
                                    <p className="text-sm font-bold text-gray-800 dark:text-slate-200 line-clamp-1">{hospital}</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3.5 px-4 py-3 bg-gray-50/60 dark:bg-slate-950/40 border border-gray-100 dark:border-slate-800/60 rounded-xl">
                                <MapPin className="h-5 w-5 text-rose-500 shrink-0" />
                                <div>
                                    <p className="text-[11px] font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-bold text-gray-800 dark:text-slate-200 line-clamp-1">{location}</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3.5 px-4 py-3 bg-gray-50/60 dark:bg-slate-950/40 border border-gray-100 dark:border-slate-800/60 rounded-xl">
                                <Wallet className="h-5 w-5 text-emerald-500 shrink-0" />
                                <div>
                                    <p className="text-[11px] font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wider">Consultation Fee</p>
                                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">৳ {fee} BDT</p>
                                </div>
                            </div>

                        </div>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider">
                                <CalendarDays className="h-4 w-4 text-[#2563EB]" />
                                <span>Availability</span>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">

                                <div className="flex flex-wrap gap-2">
                                    {availability?.map((slot, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-blue-50/60 dark:bg-blue-950/30 text-[#2563EB] dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/30 font-semibold text-xs rounded-lg shadow-sm"
                                        >
                                            {slot}
                                        </span>
                                    ))}
                                </div>


                                <button
                                    // onClick={handleBookAppointment}
                                    className="px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 active:scale-[0.98] cursor-pointer shrink-0 w-full sm:w-auto text-center"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;






