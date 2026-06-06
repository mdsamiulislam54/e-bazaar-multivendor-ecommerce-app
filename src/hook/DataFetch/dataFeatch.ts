import axios from "axios"

export const fetchData = async (endpoint :  string)=>{
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`);
        return res?.data;
    } catch (error) {
        console.error((error as Error).message)
    }
}