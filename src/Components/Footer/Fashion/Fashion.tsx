"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Fashion = () => {
    const categories = [
        {
            name: "Men's Fashion",
            img: "https://img.freepik.com/free-photo/portrait-young-man-with-hat-sunglasses_23-2148466013.jpg",
        },
        {
            name: "Women's Fashion",
            img: "https://img.freepik.com/free-photo/smiley-woman-holding-her-hat_23-2148647651.jpg",
        },
        {
            name: "Electronics & Gadget",
            img: "https://img.freepik.com/free-photo/woman-using-modern-headphones-smartphone-device-home_23-2148793466.jpg",
        },
    ];

    return (
        <section className="py-16 ">

            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="
                                group relative overflow-hidden
                                rounded-2xl
                                shadow-xl
                                border border-base-300
                                bg-base-100
                                cursor-pointer
                                hover:shadow-2xl
                                transition
                            "
                        >

                            {/* IMAGE */}
                            <figure className="h-80 overflow-hidden">
                                <Image
                                    src={cat.img}
                                    alt={cat.name}
                                    width={600}
                                    height={400}
                                    className="
                                        w-full h-full object-cover
                                        group-hover:scale-110
                                        transition duration-700
                                        grayscale group-hover:grayscale-0
                                    "
                                />
                            </figure>

                            {/* OVERLAY */}
                            <div className="
                                absolute inset-0
                                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                                flex items-end
                                p-6
                                opacity-0 group-hover:opacity-100
                                transition
                                duration-500
                            ">

                                <div className="w-full">

                                    <h2 className="text-white text-xl font-bold mb-2 tracking-wide">
                                        {cat.name}
                                    </h2>

                                    <Link
                                        href="/shopping"
                                        className="border border-white text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-white hover:text-black transition"
                                    >
                                        Shop Now
                                    </Link>

                                </div>

                            </div>

                            {/* TOP BADGE */}
                            <div className="
                                absolute top-3 left-3
                                badge badge-neutral
                                opacity-80
                            ">
                                Category
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Fashion;