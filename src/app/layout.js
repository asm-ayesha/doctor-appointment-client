import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppointment",
  description: "Doctor Appointment maneger",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
     

          <Navbar></Navbar>
          <main> {children}</main>
          <Toaster />
          <Footer></Footer>

        
      </body>
    </html>
  );
}
