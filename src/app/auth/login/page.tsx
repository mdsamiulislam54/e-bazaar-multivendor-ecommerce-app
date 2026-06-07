"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import React, { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { toast } from "react-toastify"
import Logo from "@/Components/Logo/Logo"
import { useSearchParams, useRouter } from "next/navigation"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  const handleUserLogin = () => {
    setEmail("mduserkhan@gmail.com")
    setPassword("12345678")
  }

  const handleAdminLogin = () => {
    setEmail("admin123@gmail.com")
    setPassword("12345678")
  }

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      toast.error("Email and password are required")
      setLoading(false)
      return
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.ok && !result.error) {
      toast.success("Login successful")
      router.push(callbackUrl)
    } else {
      toast.error("Invalid credentials")
    }

    setLoading(false)
  }

  const handleLoginWithGoogle = async () => {
    try {
      await signIn("google", { callbackUrl: "/" })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors">

      <div className="w-full max-w-xl p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <Logo />

          <div className="flex gap-2">

            <button
              type="button"
              onClick={handleUserLogin}
              className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              User
            </button>

            <button
              type="button"
              onClick={handleAdminLogin}
              className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Admin
            </button>

          </div>

        </div>

        {/* Form */}
        <form onSubmit={handleCredentialsLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Password */}
          <div className="relative">

            <label className="text-sm text-gray-600 dark:text-gray-400">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Google */}
        <button
          onClick={handleLoginWithGoogle}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-5 text-gray-500">
          Don’t have an account?{" "}
          <Link href="#" className="text-black dark:text-white underline">
            Create account
          </Link>
        </p>

      </div>

    </div>
  )
}

export default LoginPage