"use client";

import Image from "next/image";
import { MapPin, Briefcase, DollarSign, ArrowRight, Star } from "lucide-react";

const DoctorsCard = ({ doctor }) => {
    const {
        id,
        name,
        specialty,
        image,
        rating, 
        
        experience,
        description,
        hospital,
        location,
        fee
    } = doctor;

    const handleViewDetails = () => {
        console.log(`Navigating to doctor: ${id}`);
    };

    return (
        <div className="max-w-sm w-full mx-auto bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">

            <div>
                {/* ১. টপ সেকশন: প্রফেশনাল ইমেজ এবং নাম/স্পেশালিস্ট */}
                <div className="flex items-center gap-4 mb-5">
                    {/* গোল প্রোফাইল ইমেজ (পারফেক্ট বর্ডারসহ) */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-50 dark:border-slate-700 shrink-0 shadow-inner">
                        <Image
                            src={image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"}
                            alt={name}
                            fill
                            sizes="80px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    {/* নাম, স্পেশালিস্ট ও হাসপাতাল */}
                    <div className="space-y-1.5 grow">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100/30">
                            {specialty}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                            {name}
                        </h3>
                        <p className="text-xs font-medium text-gray-400 dark:text-slate-400">
                            {hospital}
                        </p>
                    </div>
                </div>

                {/* ⭐️ ২. নতুন প্রিমিয়াম স্টার রেটিং লেআউট */}
                <div className="space-y-1 mb-5">
                    {/* ৫টি স্টারের ডাইনামিক রো */}
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => {
                            const isFilled = index < Math.floor(Number(rating));
                            return (
                                <Star
                                    key={index}
                                    className={`h-4 w-4 shrink-0 ${
                                        isFilled 
                                            ? "fill-amber-400 text-amber-400" 
                                            : "text-gray-200 dark:text-slate-700"
                                    }`}
                                />
                            );
                        })}
                    </div>
                    {/* রেটিং স্কোর এবং টোটাল রিভিউ কাউন্ট */}
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                        <span className="font-bold text-gray-900 dark:text-white">
                            {Number(rating).toFixed(1)}
                        </span>
                        
                    </div>
                </div>

                {/* ৩. মিডল সেকশন: ডেসক্রিপশন */}
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {description}
                </p>

                {/* ৪. ইনফো গ্রিড: আইকন ও টেক্সটের পারফেক্ট অ্যালাইনমেন্ট */}
                <div className="space-y-3 border-t border-b border-gray-100 dark:border-slate-800/60 py-5 mb-6 text-sm text-gray-600 dark:text-slate-300">

                    {/* এক্সপেরিয়েন্স */}
                    <div className="flex items-center gap-3">
                        <Briefcase className="h-4 w-4 text-gray-400 dark:text-slate-500 shrink-0" />
                        <span className="font-medium">
                            Experience: <span className="font-semibold text-gray-800 dark:text-slate-200">{experience}</span>
                        </span>
                    </div>

                    {/* লোকেশন */}
                    <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-gray-400 dark:text-slate-500 shrink-0" />
                        <span className="font-medium text-gray-700 dark:text-slate-300 line-clamp-1">
                            {location}
                        </span>
                    </div>

                    {/* ভিジット ফি */}
                    <div className="flex items-center gap-3">
                        <DollarSign className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="font-medium">
                            Fee: <span className="font-bold text-emerald-600 dark:text-emerald-400">৳ {fee} BDT</span>
                        </span>
                    </div>

                </div>
            </div>

            {/* ৫. বটম সেকশন: ফুল-উইথ ভিউ ডিটেইলস বাটন */}
            <button
                onClick={handleViewDetails}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#2563EB] hover:bg-white text-white hover:text-[#2563EB] border border-[#2563EB] font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-300 active:scale-[0.98] cursor-pointer pointer-events-auto "
            >
                View Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

        </div>
    );
};

export default DoctorsCard;