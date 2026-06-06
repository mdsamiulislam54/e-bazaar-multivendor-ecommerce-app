
export const  getCheckoutDataById = async (id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/${id}`);
    const data = await res.json();
    return data
}