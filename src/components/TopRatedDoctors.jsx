"use client"
import Image from "next/image";
import {useRouter }from "next/navigation";
import { Star, ArrowRight, Award, CheckCircle2 } from "lucide-react";


const topDoctors = [
    {
        id: "doc-101",
        name: "Dr. Ariful Islam",
        specialty: "Cardiologist",
        rating: 4.9,
        reviews: 124,
        experience: "12+ Yrs Exp",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
        bio: "Specialized in interventional cardiology, advanced cardiovascular treatment, and preventative heart care management.",
    },                                         
    {
        id: "doc-102",
        name: "Dr. Nusrat Jahan",
        specialty: "Dermatologist",
        rating: 4.8,
        reviews: 98,
        experience: "8+ Yrs Exp",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
        bio: "Expertise in clinical dermatology, laser therapies, skincare diagnostics, and cosmetic anti-aging treatments.",
    },
    {
        id: "doc-103",
        name: "Dr. S. M. Rayhan",
        specialty: "Pediatrician",
        rating: 5.0,
        reviews: 142,
        experience: "15+ Yrs Exp",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
        bio: "Dedicated to comprehensive newborn care, adolescent growth tracking, and pediatric acute illness recovery.",
    },
];

const TopRatedDoctors = () => {
    const router = useRouter();
    const isLoggedIn = false;
    const handleViewDetails = (doctorId) => {
        if (isLoggedIn) {

            router.push(`/doctors/${doctorId}`);
        } else {

            router.push("/login");
        }
    };



    return (
        <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                        <Award className="h-3.5 w-3.5" />
                        Our Specialists
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
                        Meet Our Top Rated Doctors
                    </h2>
                    <p className="text-gray-500 dark:text-slate-400 text-base max-w-xl mx-auto">
                        Consult with highly qualified, verified medical professionals across multiple specialties rated exceptionally by our patient community.
                    </p>
                </div>

                {/* Responsive Grid Layout Wrapper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Profile Header Image and Badge Set */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 dark:border-slate-700 shrink-0">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            sizes="64px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                                                {doctor.name}
                                            </h3>
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 fill-emerald-500/10 shrink-0" title="Verified Professional" />
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-sm font-semibold text-[#2563EB] dark:text-blue-400">
                                                {doctor.specialty}
                                            </span>
                                            <span className="text-xs text-gray-400 dark:text-slate-500">•</span>
                                            <span className="text-xs font-medium text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                                {doctor.experience}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Patient Feedback Rating Row */}
                                <div className="flex items-center gap-1 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/40 dark:border-amber-900/20 px-3 py-2 rounded-xl mb-4 w-max">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
                                        {doctor.rating.toFixed(1)}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-slate-500 ml-1">
                                        ({doctor.reviews} patient reviews)
                                    </span>
                                </div>

                                {/* Short Bio Field */}
                                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {doctor.bio}
                                </p>
                            </div>

                            {/* Action Call-to-action Action Launcher */}
                            <button
                                onClick={() => handleViewDetails(doctor.id)}
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-[#2563EB] dark:bg-slate-800 dark:hover:bg-[#2563EB] text-gray-700 hover:text-white dark:text-slate-200 border border-gray-200 dark:border-slate-700 hover:border-[#2563EB] dark:hover:border-[#2563EB] font-semibold text-sm rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
                            >
                                View Details
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopRatedDoctors;


