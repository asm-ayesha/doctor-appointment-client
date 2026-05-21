export const getAllDoctors = async (searchTerm = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors?search=${searchTerm}`);
    const data = await res.json();
    return data;
}


export const getDoctorById = async (id, token) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`, {
            method: "GET",
            headers: headers,
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Fetch failed with status: ${res.status}`);
            return null;
        }

        const result = await res.json();
        return result?.data ? result.data : result;

    } catch (error) {
        console.error("Fetch doctor error:", error);
        return null;
    }
};


export const updateUser = async (email, updatedData, token) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateUsers/update`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, 
                ...updatedData
            }),
        });

        
        const data = await res.json();

        if (!res.ok) {
            console.error("Server Error Response:", data);
            throw new Error(data.message || "Failed to update");
        }

        return data; 
    } catch (error) {
        console.error("Update error:", error);
        throw error;
    }
};