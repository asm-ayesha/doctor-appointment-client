import DoctorsCard from '@/components/DoctorsCard';
import SearchBar from '@/components/SearchBar';
import { getAllDoctors } from '@/lib/doctor/data';


export const metadata = {
    title: "All Appointment | DocAppoint",
    
};

const AllAppointmentPage =async (searchParams) => {
    const sParams = await searchParams;
    console.log(sParams)
    const doctorsData = await getAllDoctors(sParams?.searchTerm || "");
    
    return (
        <div className='my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight flex justify-center mb-5 " >All Appointment</h2>
                <SearchBar></SearchBar>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-10' >
                {
                    doctorsData.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor} >
                        <p>{doctor.name}</p>
                    </DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentPage;