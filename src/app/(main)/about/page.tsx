"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

      {/* ---------- HERO BANNER ---------- */}
      <section className="relative h-[260px] flex items-center justify-center overflow-hidden">

        {/* background */}
        <div
          className="
            absolute inset-0
            bg-[url('https://images.unsplash.com/photo-1522202220-1f1f2b1f3a3c')]
            bg-cover bg-center grayscale
            scale-110
          "
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* content */}
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase">
            About Us
          </h1>
          <p className="text-sm text-gray-300 tracking-wide">
            Building the future of E-Commerce in Bangladesh
          </p>
        </div>
      </section>

      {/* ---------- CONTAINER ---------- */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* ---------- OUR STORY ---------- */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">
              Our Story
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              The Journey of E-Bazaar
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              E-Bazaar started with a simple vision — to make online shopping
              easier, safer, and more trustworthy for everyone in Bangladesh.
              What began as a small idea is now evolving into a full digital
              ecosystem.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From fashion to electronics, we focus on verified products,
              smooth delivery, and a seamless customer experience powered by
              modern technology.
            </p>

            {/* highlight cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">

              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-xs text-gray-500">Happy Customers</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <p className="text-2xl font-bold">5K+</p>
                <p className="text-xs text-gray-500">Products</p>
              </div>

            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <Image
              src="https://img.freepik.com/free-photo/young-trans-man-with-apron-working-as-waiter_23-2149409812.jpg"
              width={600}
              height={400}
              alt="story"
              className="
                rounded-3xl
                object-cover
                shadow-2xl
                grayscale hover:grayscale-0
                transition duration-500
              "
            />
          </div>
        </section>

        {/* ---------- MISSION ---------- */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="order-2 lg:order-1">
            <Image
              src="https://img.freepik.com/free-photo/people-sharing-ideas-while-studying_23-2147656100.jpg"
              width={400}
              height={400}
              alt="mission"
              className="
              
                rounded-3xl
                object-cover
                shadow-2xl
                grayscale hover:grayscale-0
                transition duration-500
              "
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6 order-1 lg:order-2">

            <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              What We Aim For
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our mission is to redefine e-commerce in Bangladesh with trust,
              quality, and innovation.
            </p>

            {/* bullets */}
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Build trust through verified products",
                "Empower local sellers digitally",
                "Ensure fast & reliable delivery",
                "Improve user experience with modern tech",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black dark:text-white">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>

      </div>
    </div>
  );
};

export default page;