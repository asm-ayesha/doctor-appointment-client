export const getAllDoctors = async ()=>{
    const res = await fetch("http://localhost:5000/doctors");
    const data = await res.json();
    return data;
}


export const getDoctorById = async (id) =>{
     const res = await fetch(`http://localhost:5000/doctors/${id}`)
    const data = await res.json()
    return data;
}