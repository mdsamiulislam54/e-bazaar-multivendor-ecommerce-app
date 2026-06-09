"use client"
import { Category } from '@/Components/Shopping/Category';
import ShoppingCard from '@/Components/Shopping/ShoppingCard';

import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import Sorting from '@/Components/Shopping/Sorting';
import Pricerange from '@/Components/Shopping/Pricerange';
import Pagination from '@/Components/Pagination/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from '@/Components/Loader/Loader';
import instance from '@/lib/axios';
const Shopping = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [sort, setSort] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const pageNumber = Math.ceil(count / 15) || 1
    const pageArray = [...Array(pageNumber).keys().map((i) => i + 1)];
    const [total, setTotal] = useState(0)



    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const params = new URLSearchParams();
            if (sort) params.set('sort', sort);
            if (selectedCategory) params.set('category', selectedCategory);
            if (minPrice) params.set('minPrice', minPrice.toString());
            if (maxPrice) params.set('maxPrice', maxPrice.toString());
            if (currentPage) params.set('page', currentPage.toString());
            params.set('limit', '9');
            if (search) params.set('search', search);

            const res = await instance.get(`/shopping?${params.toString()}`, {
                withCredentials: true
            });

            setProducts(res?.data?.product);
            setCount(res?.data?.total);
            setTotal(res?.data?.totalProducts);
            setCategory(res?.data?.allProducts)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }, [sort, selectedCategory, minPrice, maxPrice, currentPage, search]);


    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleReset = () => {
        setSort('');
        setSelectedCategory('');
        setMinPrice(0);
        setMaxPrice(0);
        setCurrentPage(1);
        const params = new URLSearchParams(searchParams.toString());

        params.delete('search');
        router.push(`/shopping?${params.toString()}`);

    };




    return (
        <div className='min-h-screen relative dark:text-white'>
            <nav className="relative h-[280px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url("https://preview.colorlib.com/theme/cozastore/images/bg-01.jpg.webp")` }} />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

                <div className="relative z-10 container-custom h-full flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[4px] text-white/70">
                        Home / Shop
                    </p>

                    <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        Shopping
                    </h1>

                    <p className="mt-3 max-w-xl text-white/80">
                        Discover premium products curated for your lifestyle.
                    </p>
                </div>

                <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-white">
                        New Collection Available
                    </span>
                </div>
            </nav>
            <div className="container-custom">

                <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-6">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-xl">

                        <Link
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            Home
                        </Link>

                        <span className="text-gray-400 dark:text-gray-600">/</span>

                        <Link
                            href="/shopping"
                            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                        >
                            Shopping
                        </Link>

                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4">

                        {/* Result badge */}
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">

                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Total Products:
                            </span>

                            <span className="font-semibold text-black dark:text-white">
                                {total}
                            </span>

                        </div>

                        {/* Sorting */}
                        <div className="px-3 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-xl">

                            <Sorting setSort={setSort} total={total} />

                        </div>

                    </div>

                </div>

            </div>

            <div className=' container-custom grid lg:grid-cols-5 gap-5 my-5 '>
                <div className='lg:col-span-1'>
                    <Category products={category} setSelectedCategory={setSelectedCategory} />
                    <Pricerange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

                    <button onClick={handleReset} className='btn btn-block dark:bg-gray-800 dark:text-white dark:border-gray-600 mt-4'>Reset Filter</button>

                </div>
                <div className='lg:col-span-4 min-h-screen '>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            products.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-72 text-center">

                                    <h2 className="text-xl font-semibold text-gray-700">
                                        No Products Found
                                    </h2>
                                    <p className="text-gray-500 mt-1">
                                        Try changing filters or search again.
                                    </p>
                                </div>
                            ) : (
                                <div >
                                    {
                                        <ShoppingCard products={products} />
                                    }
                                    {/* Pagination */}
                                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageArray={pageArray} />
                                </div>
                            )
                        )
                    }





                </div>
            </div>
        </div>

    )
}

export default Shopping