"use client"

import React, { useState } from "react"
import { toast } from "react-toastify"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      toast.error("Please enter your email address!")
      return
    }

    toast.success("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <section className="relative py-16 overflow-hidden">

      <div className="container-custom">

        <div className="p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm text-center space-y-6">

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white flex flex-col sm:flex-row items-center justify-center gap-2">

            Subscribe and get
            <span className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
              20% Off
            </span>

          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-6">
            Get exclusive discounts and updates on new products. Stay ahead with the latest offers.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition font-medium"
            >
              Join
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Subscribe