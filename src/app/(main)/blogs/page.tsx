"use client"
import { Blog } from '@/Components/Blogs/blogsInterface';
import BlogsPageCard from '@/Components/Blogs/BlogsPageCard';
import Pagination from '@/Components/Pagination/Pagination';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

const Blogpage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageArray, setPageArray] = useState([]);

  const getBlogsData = useCallback(async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?page=${currentPage}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setBlogs(data.blogs);
      setPageArray(data.pageArray);
    } catch (error) {
      console.error("Fetch Error:", (error as Error).message);
    }
  }, [currentPage]);

  useEffect(() => {
    getBlogsData();
  }, [getBlogsData]);

  return (
    <div className="min-h-screen dark:text-white ">

      <nav
        className="
        relative w-full h-[220px]
        flex items-center justify-center
        overflow-hidden
        bg-black text-white
    "
      >
        {/* background image */}
        <div
          className="
            absolute inset-0
            bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322')]
            bg-cover bg-center
            grayscale
            scale-110
        "
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase">
            Blogs
          </h2>

          <p className="text-sm text-gray-300 mt-2 tracking-wide">
            Insights, Stories & Updates
          </p>
        </div>

        {/* subtle bottom line */}
        <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
      </nav>


      <div className="container-custom py-8 px-3 sm:px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">

          <div className="lg:col-span-4 w-full">
            <BlogsPageCard blogs={blogs} />

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageArray={pageArray} />
          </div>


          <aside className="lg:col-span-2 w-full space-y-6">

            {/* SEARCH */}
            <div className="
        p-4 rounded-2xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-black/10 dark:border-white/10
        shadow-sm
    ">
              <label className="relative block">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                </svg>

                <input
                  type="search"
                  placeholder="Search blogs..."
                  className="
                    w-full pl-10 pr-4 py-3
                    rounded-xl
                    bg-white dark:bg-black
                    text-black dark:text-white
                    border border-black/10 dark:border-white/10
                    outline-none
                    focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                    transition
                "
                />
              </label>
            </div>

            {/* CATEGORIES */}
            <div className="
        p-5 rounded-2xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-black/10 dark:border-white/10
    ">
              <h2 className="text-lg font-bold mb-4 tracking-tight">
                Categories
              </h2>

              <ul className="space-y-2 text-sm">
                {[
                  "Women’s Fashion",
                  "Men’s Style & Grooming",
                  "Trends & Lifestyle",
                  "Accessories & Styling Tips",
                  "Sustainable Fashion",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                        px-3 py-2 rounded-lg
                        cursor-pointer
                        text-gray-700 dark:text-gray-300
                        hover:bg-black/5 dark:hover:bg-white/10
                        hover:translate-x-1
                        transition
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* LATEST BLOGS */}
            <div className="
        p-5 rounded-2xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-black/10 dark:border-white/10
    ">
              <h2 className="text-lg font-bold mb-4 tracking-tight">
                Latest Posts
              </h2>

              <div className="space-y-4">
                {blogs?.slice(0, 5).map((blog) => (
                  <div
                    key={blog._id}
                    className="flex gap-3 group"
                  >
                    <Image
                      src={blog.image}
                      width={70}
                      height={70}
                      alt={blog.title}
                      className="
                            w-16 h-16
                            rounded-xl
                            object-cover
                            group-hover:scale-105
                            transition duration-300
                        "
                    />

                    <div className="flex-1">
                      <p className="text-sm line-clamp-2 text-gray-700 dark:text-gray-300">
                        {blog.shortDescription}
                      </p>

                      <button className="
                            mt-1 text-xs font-medium
                            text-black dark:text-white
                            hover:opacity-60
                            transition
                        ">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TAGS */}
            <div className="
        p-5 rounded-2xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-black/10 dark:border-white/10
    ">
              <h2 className="text-lg font-bold mb-4 tracking-tight">
                Popular Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  "#StreetStyle",
                  "#Summer",
                  "#Minimal",
                  "#Luxury",
                  "#OOTD",
                  "#Trends",
                  "#Vintage",
                  "#Fashion",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                        px-3 py-1 text-xs font-medium
                        rounded-full
                        border border-black/10 dark:border-white/10
                        bg-white dark:bg-black
                        text-black dark:text-white
                        hover:scale-105
                        hover:bg-black hover:text-white
                        dark:hover:bg-white dark:hover:text-black
                        transition
                        cursor-pointer
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
