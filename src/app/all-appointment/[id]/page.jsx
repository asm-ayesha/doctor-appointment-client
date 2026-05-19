
const DoctorDetails = async({params}) => {
    const  {id} =await params;
    const res = await fetch(`http://localhost:5000/doctors/${id}`)
    const data = await res.json()
    console.log(data)


    return (
        <div>
            <h2>Dcotor Details</h2>
            
        </div>
    );
};

export default DoctorDetails;