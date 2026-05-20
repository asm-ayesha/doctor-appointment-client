"use client"


import { useRouter } from 'next/navigation';



const AppointmentBtn = ({data}) => {
    const router = useRouter();
    const handleAppointment = () => {
        router.push(`/appointment-card/${data._id}`);
    };
    return (
        <div>
            <button
                onClick={handleAppointment}
                className="px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 active:scale-[0.98] cursor-pointer shrink-0 w-full sm:w-auto text-center"
            >
                Book Appointment
            </button>
        </div>

    );
};

export default AppointmentBtn;