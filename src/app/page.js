import BlogHighlights from "@/components/BlogHighlights";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimoials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <Hero></Hero>
      <TopRatedDoctors></TopRatedDoctors>
      <Testimonials></Testimonials>
      <BlogHighlights></BlogHighlights>
   </div>
  );
}
