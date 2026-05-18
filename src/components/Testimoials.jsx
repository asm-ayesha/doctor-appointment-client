"use client";

import Image from "next/image";
import { Star, Quote, HeartHandshake } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahat Chowdhury",
    role: "Regular Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    feedback: "Booking an appointment through DocAppoint was incredibly fast. I managed to secure a slot with a top cardiologist within minutes. Highly recommended for busy professionals!",
  },
  {
    id: 2,
    name: "Sadia Islam",
    role: "Mother of 2",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    feedback: "The pediatric dashboard made tracking my children's digital prescriptions and past follow-ups so effortless. It feels amazing to have all our medical history in one clean space.",
  },
  {
    id: 3,
    name: "Dr. Zaman's Patient",
    role: "Chronic Care Patient",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    feedback: "Finding specialized care used to take days of phone calls. Here, everything is transparent—from doctor qualifications to real patient reviews. Excellent healthcare platform!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
            <HeartHandshake className="h-3.5 w-3.5" />
            Patient Feedback
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            Discover how DocAppoint is transforming the healthcare journey for thousands of users daily.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-500/10 dark:text-blue-400/5 stroke-[1.5]" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(item.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300 dark:text-slate-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed italic">
                  `{item.feedback}`
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-gray-200/50 dark:border-slate-700/50">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-blue-100 dark:border-slate-700 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-medium text-gray-400 dark:text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}