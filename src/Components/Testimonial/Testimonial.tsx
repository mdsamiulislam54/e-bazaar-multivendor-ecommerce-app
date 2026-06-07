"use client"

import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import Image from "next/image"

const testimonials = [
  {
    name: "Rahim Uddin",
    date: "2025-02-10",
    rating: 5,
    description:
      "Excellent service! The product quality was beyond my expectations. Delivery was also very fast.",
    location: "Dhaka, Bangladesh",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anika Sultana",
    date: "2025-01-28",
    rating: 4,
    description:
      "Really happy with the purchase. The packaging was secure and the product looks amazing.",
    location: "Chattogram, Bangladesh",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Shafiq Hasan",
    date: "2025-01-15",
    rating: 5,
    description:
      "Best online shopping experience so far. Customer support was very helpful and responsive.",
    location: "Sylhet, Bangladesh",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Mousumi Akter",
    date: "2025-01-05",
    rating: 4,
    description:
      "The product quality is great and the delivery was on time. Will definitely shop again!",
    location: "Khulna, Bangladesh",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Fahim Chowdhury",
    date: "2025-02-01",
    rating: 5,
    description:
      "I am extremely satisfied with my purchase. The product exceeded my expectations and the customer service was top-notch.",
    location: "Rajshahi, Bangladesh",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Nusrat Jahan",
    date: "2025-01-20",
    rating: 4,
    description:
      "The shopping experience was smooth and hassle-free. The product quality is good, and I received it within the expected delivery time.",
    location: "Barishal, Bangladesh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Arif Hossain",
    date: "2025-01-10",
    rating: 5,
    description:
      "I am very impressed with the quality of the product and the excellent customer service. I will definitely recommend this store to my friends and family.",
    location: "Rangpur, Bangladesh",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  }
]

const Testimonial = () => {
  return (
    <div className="py-16 bg-white dark:bg-black transition-colors">

      <div className="container-custom">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>

              {/* Card */}
              <div className="group relative h-65 my-10 p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-black dark:text-white overflow-hidden">

                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 dark:bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                {/* User */}
                <div className="flex items-center gap-3 mb-4">

                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-700"
                  />

                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.location}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{t.date}</p>
                  </div>

                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-6">
                  {t.description}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mt-4 text-black dark:text-white">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  )
}

export default Testimonial