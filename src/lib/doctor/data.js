export const getAllDoctors = async (searchTerm = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors?search=${searchTerm}`);
    const data = await res.json();
    return data;
}


export const getDoctorById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    })
    const data = await res.json()
    return data;
}