"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarX, ArrowLeft, Home, PhoneCall } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <div className="text-center max-w-xl mx-auto">
        
        {/* Animated Medical Icon Area */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute inset-0 bg-blue-100 rounded-full scale-125 opacity-40 animate-pulse"></div>
          <div className="relative bg-white p-6 rounded-full shadow-md border border-blue-50 text-[#2563EB]">
            <CalendarX className="h-16 w-16 stroke-[1.5]" />
          </div>
        </div>

        {/* Error Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 mb-4 border border-red-100">
          Error Code: 404 Not Found
        </span>

        {/* Text Content */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          অ্যাপয়েন্টমেন্ট পেজটি খুঁজে পাওয়া যায়নি!
        </h1>
        <p className="text-base text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          দুঃখিত, আপনি যে লিংকটি খুঁজছেন সেটি হয়তো পরিবর্তন করা হয়েছে অথবা অস্তিত্ব নেই। অনুগ্রহ করে সঠিক ইউআরএল (URL) চেক করুন।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:text-[#2563EB] transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" />
            পেছনে ফিরে যান
          </button>

          {/* Go Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-medium hover:bg-[#1d4ed8] transition-all shadow-sm active:scale-95 shadow-blue-100"
          >
            <Home className="h-5 w-5" />
            হোমপেজে যান
          </Link>

        </div>

        {/* Support Section Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200/60 text-sm text-gray-500">
          <p className="flex items-center justify-center gap-2">
            <PhoneCall className="h-4 w-4 text-[#2563EB]" />
            জরুরী কোনো সমস্যা হলে আমাদের <Link href="/support" className="text-[#2563EB] underline hover:text-[#1d4ed8]">সাপোর্ট টিমের</Link> সাথে যোগাযোগ করুন।
          </p>
        </div>

      </div>
    </div>
  );
}