"use client";
import React, { useState } from "react";
import { Blog } from "./blogsInterface";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

type BlogsType = {
    blogs: Blog[];
};

const BlogsPageCard: React.FC<BlogsType> = ({ blogs }) => {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const handleToggle = (id: string) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="grid gap-10">
            {blogs?.map((blog) => {
                const isExpanded = expanded[blog._id];

                return (
                    <div
                        key={blog._id}
                        className="
                            group
                            rounded-3xl
                            overflow-hidden
                            border border-black/10 dark:border-white/10
                            bg-white dark:bg-black
                            shadow-sm hover:shadow-xl
                            transition-all duration-300
                        "
                    >
                        {/* IMAGE */}
                        <div className="relative overflow-hidden h-[320px]">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="
                                    object-cover
                                    group-hover:scale-110
                                    transition duration-700
                                "
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 md:p-8 space-y-4">

                            {/* meta */}
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-2">
                                    <CgProfile /> {blog.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <CiCalendarDate /> {blog.date}
                                </span>
                            </div>

                            {/* title */}
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
                                {blog.title}
                            </h2>

                            {/* short desc */}
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {blog.shortDescription}
                            </p>

                            {/* expandable content */}
                            <div
                                className={`
                                    text-sm leading-relaxed text-gray-700 dark:text-gray-400
                                    overflow-hidden transition-all duration-500
                                    ${isExpanded ? "max-h-[1000px]" : "max-h-24"}
                                `}
                            >
                                {blog.content.map((p, index) => (
                                    <p key={index} className="mb-3">
                                        {p.paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* button */}
                            <button
                                onClick={() => handleToggle(blog._id)}
                                className="
                                    flex items-center gap-2
                                    text-sm font-medium
                                    text-black dark:text-white
                                    hover:opacity-70 transition
                                "
                            >
                                {isExpanded ? "Show Less" : "Read More"}
                                <MdKeyboardArrowDown
                                    className={`transition-transform duration-300 ${
                                        isExpanded ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BlogsPageCard;