"use client"
import ProductsTable from '@/Components/Dashboard/ProductsTablea/ProductsTablea';
import Pagination from '@/Components/Pagination/Pagination';
import instance from '@/lib/axios';
import React, { useCallback, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageArray, setPageArray] = useState([]);
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')

    const getProductsData = useCallback(async () => {
        const res = await instance.get(`/admin/products/list?page=${currentPage}&sort=${sort}&search=${search}`, { withCredentials: true });
        const data = res?.data;
        setProducts(data?.products);
        setPageArray(data?.pageArray)
    }, [currentPage, sort, search])

    useEffect(() => {
        getProductsData()
    }, [getProductsData])

    const handleProductsDeletedById = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    const res = await instance.delete(`/admin/products/${id}`);
                    if (res.status === 200) {
                        toast.success("Your product has been deleted.");
                        getProductsData();
                    }
                } catch (error) {
                    console.error((error as Error).message)
                    Swal.fire("Error!", "Something went wrong while deleting.",);
                }
            }
        });
    };


    return (
        <div>
            <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-black dark:text-white">

                    {/* Search */}
                    <div className="relative w-full sm:w-1/2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 w-5 h-5" />
                    </div>

                    {/* Filter */}
                    <div className="w-full sm:w-auto">
                        <select
                            onChange={(e) => setSort(e.target.value)}
                            className="w-full sm:w-64 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        >
                            <option value="latest">Latest Products</option>
                            <option value="high-low">High Price Products</option>
                            <option value="low-high">Low Price Products</option>
                            <option value="out_of_stock">Out of Stock</option>
                            <option value="in_stock">In Stock</option>
                        </select>
                    </div>

                </div>

                <div className='bg-white dark:bg-gray-800 dark:text-white p-4'>
                    <ProductsTable products={products} onUpdate={getProductsData} onDelete={handleProductsDeletedById} />
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageArray={pageArray} />
                </div>
            </div>
        </div>
    )
}

export default ProductsList