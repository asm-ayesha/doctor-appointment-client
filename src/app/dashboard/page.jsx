
import { Suspense } from 'react';
import Dashboard from './Dashboard'; 

export async function generateMetadata({ searchParams }) {

  const params = await searchParams;
  const tab = params?.tab || "bookings";
  
  return {
    title: tab === "profile" ? "My Profile | Dashboard" : "My Bookings | Dashboard",
  };
}

const page = ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
};

export default page;