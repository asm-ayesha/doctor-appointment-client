"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: "post-1",
    title: "10 Essential Habits for Maintaining a Healthy Heart",
    description: "Cardiovascular health is vital for longevity. Learn simple daily dietary changes, optimal hydration setups, and exercise adjustments to optimize your heart vitality.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop", // Healthy setup lifestyle
    date: "May 15, 2026",
    author: "Dr. Asif Rahman",
    category: "Cardio Health",
    slug: "/blog/healthy-heart-habits",
  },
  {
    id: "post-2",
    title: "The Ultimate Guide to Managing Seasonal Allergies",
    description: "Don't let seasonal changes ruin your workflow. Explore highly effective over-the-counter remedies, allergen tracking configurations, and preventative lifestyle tips.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop", // Medical diagnostics/pills setting
    date: "May 12, 2026",
    author: "Dr. Afrin Sultana",
    category: "Dermatology",
    slug: "/blog/managing-seasonal-allergies",
  },
  {
    id: "post-3",
    title: "Understanding Digital Eye Strain in the SaaS Era",
    description: "Staring at screens for frontend development or office roles causes severe fatigue. Implement the 20-20-20 rule and optimize your workstation layout safely today.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", // Modern screen workspace interaction
    date: "May 10, 2026",
    author: "Medical Support Team",
    category: "Wellness",
    slug: "/blog/digital-eye-strain-guide",
  },
];

export default function BlogHighlights() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
            <BookOpen className="h-3.5 w-3.5" />
            Knowledge Base
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Latest Health Tips & Articles
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            Stay informed with verified medical insights, wellness guides, and expert health tips written by our certified specialists.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              
              {/* Image Container with Hover Zoom */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[#2563EB] dark:text-blue-400 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Text Layout Block */}
              <div className="p-6 flex flex-col justify-between grow">
                <div className="space-y-3">
                  
                  {/* Meta Details Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={post.slug}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Short Excerpt */}
                  <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Read More Link Trigger */}
                <div className="pt-5 mt-4 border-t border-gray-100 dark:border-slate-800/60">
                  <Link 
                    href={post.slug}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] dark:text-blue-400 hover:text-[#1d4ed8] dark:hover:text-blue-300 transition-colors w-max group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}