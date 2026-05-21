"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, ArrowRight, Award, CheckCircle2, Loader2 } from "lucide-react";
import { getAllDoctors } from "@/lib/doctor/data"; 
import { useSession } from "@/lib/auth-client";

const TopRatedDoctors = () => {
    const router = useRouter();
    const [topDoctors, setTopDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const isLoggedIn = !!session?.user;
    
    useEffect(() => {
        const fetchTopDoctors = async () => {
            try {
                setLoading(true);
                const allDoctors = await getAllDoctors();
                const sortedTopThree = (allDoctors || [])
                    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
                    .slice(0, 3);

                setTopDoctors(sortedTopThree);
            } catch (error) {
                // console.error("Failed to load top doctors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopDoctors();
    }, []);

    const handleViewDetails = (doctorId) => {
        if (isLoggedIn) {
            router.push(`/all-appointment/${doctorId}`);
        } else {
             router.push(`/login?callbackUrl=/all-appointment/${doctorId}`);
        }
    };

    return (
        <section  className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                        <Award className="h-3.5 w-3.5" />
                        Our Specialists
                    </span>
                    <h2  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Meet Our Top Rated Doctors
                    </h2>
                    <p  className="text-sm sm:text-base text-gray-500 dark:text-slate-400 max-w-xl mx-auto px-2">
                        Consult with highly qualified, verified medical professionals across multiple specialties rated exceptionally by our patient community.
                    </p>
                </div>

                
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-2">
                        <Loader2 className="h-8 w-8 text-[#2563EB] animate-spin" />
                        <p className="text-sm text-gray-500 dark:text-slate-400">Loading top specialists...</p>
                    </div>
                ) : topDoctors.length > 0 ? (
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {topDoctors.map((doctor) => (
                            <div
                                key={doctor._id || doctor.id}
                                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                   
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 dark:border-slate-700 shrink-0">
                                            <Image
                                                src={doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"}
                                                alt={doctor.name}
                                                fill
                                                sizes="64px"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1 min-w-0">
                                                <h3 className="flex-1 truncate text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
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

                                    <div className="flex items-center gap-1 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/40 dark:border-amber-900/20 px-3 py-2 rounded-xl mb-4 w-max">
                                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
                                            {Number(doctor.rating || 0).toFixed(1)}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-slate-500 ml-1">
                                            ({doctor.reviews || 0} reviews)
                                        </span>
                                    </div>

                                 
                                    <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {doctor.bio || doctor.description}
                                    </p>
                                </div>

                               

                                
                                
                                <button
                                    onClick={() => handleViewDetails(doctor._id || doctor.id)}
                                   className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#2563EB] hover:bg-white text-white hover:text-[#2563EB] border border-[#2563EB] font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-300 active:scale-[0.98] cursor-pointer pointer-events-auto"
                                >
                                    View Details
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                                
                            </div>
                        ))}
                    </div>
                ) : (
                   
                    <div className="text-center py-12 text-gray-500 dark:text-slate-400">
                        No specialists found.
                    </div>
                )}

            </div>
        </section>
    );
};

export default TopRatedDoctors;