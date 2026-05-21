"use client"
import { authClient, signIn, useSession } from '@/lib/auth-client';
import { title } from 'framer-motion/client';
import { ArrowRight, Eye, EyeOff, Link2, Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';



const LoginFrom = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session } = useSession();
    const callbackUrl = searchParams.get("callbackUrl") ||
        searchParams.get("callbackUrl") ||
        "/";

    const [showPassword, setShowPassword] = useState(false)



    useEffect(() => {
        if (session?.user) {
            router.push(callbackUrl);
        }
    }, [session, callbackUrl, router]);


    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());


        const { data, error } = await signIn.email({
            email: loginData.email,
            password: loginData.password,
            callbackUrl: callbackUrl,
        });



        if (error) {
            // console.log(error)
            toast.error('Login failed');
            return;
        }
        toast.success("Login Success")
        router.push(callbackUrl)
    }

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: callbackUrl,
        })
    }

    return (
        <main className="min-h-[85vh] bg-gray-50  flex items-center justify-center px-4 py-12 transition-colors duration-300">


            <div className="max-w-md w-full bg-white border border-gray-100  rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">


                <div className="text-center flex flex-col items-center mb-8">
                    <div className="p-3 mb-4">
                        <Image
                            src="/assets/logo.png"
                            alt="docAppoint Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Login
                    </h1>
                    <p className="text-xs text-gray-400 dark:text-slate-400 mt-1">
                        Welcome back to DocAppoint
                    </p>
                </div>

                {/* 📝 ফর্ম সেকশন */}
                <form onSubmit={handleLogin} className="space-y-4">

                    {/* নাম ইনপুট */}
                    <div className="space-y-1.5">


                    </div>

                    {/* ইমেইল ইনপুট */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-slate-300 tracking-wide">
                            Email
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                                <Mail className="h-4 w-4" />
                            </span>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="example@gmail.com"
                                // value={formData.email}
                                // onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* পাসওয়ার্ড ইনপুট */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-slate-300 tracking-wide">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                                <Lock className="h-4 w-4" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                            />
                            {/* পাসওয়ার্ড শো/হাইড বাটন */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {/* সাবমিট রেজিস্টার বাটন */}
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                        Login
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </form>

                {/* ➖ OR ডিভাইডার ➖ */}
                <div className="relative my-6 flex items-center justify-center">
                    <div className="border-t border-gray-100 dark:border-slate-800 w-full"></div>
                    <span className="absolute bg-white dark:bg-slate-900 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        OR
                    </span>
                </div>


                <button
                    onClick={handleGoogleSignin}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-white dark:bg-slate-950 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 font-semibold text-sm rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >

                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                        <path
                            fill="#EA4335"
                            d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.48 0-6.305-2.825-6.305-6.305s2.825-6.305 6.305-6.305c1.517 0 2.89.54 3.96 1.437l3.056-3.056C19.123 2.502 15.86 1.2 12.24 1.2 6.22 1.2 1.32 6.1 1.32 12.12s4.9 10.92 10.92 10.92c6.284 0 10.457-4.416 10.457-10.63 0-.713-.08-1.41-.215-2.125H12.24Z"
                        />
                    </svg>
                    Continue with Google
                </button>


                <p className="text-center text-xs text-gray-500 dark:text-slate-400 mt-6 font-medium">
                    Don`t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-[#2563EB] dark:text-blue-400 font-bold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </main>
    );
};

export default LoginFrom;