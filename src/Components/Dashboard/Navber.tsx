import { DarkModetoggle } from "@/hook/DarkModeToggle/darkMode";
import Link from "next/link";
import React from "react";
import { FaBell, FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { Moon } from "lucide-react";

type NavbarProps = {
  onhandleSidebarOpen: () => void;
  sidebarOpen: boolean;
};

const Navber: React.FC<NavbarProps> = ({ onhandleSidebarOpen, sidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white shadow-sm">

      {/* Search */}
      <div className="hidden sm:flex w-full max-w-md">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">

        {/* Dark Mode */}
        <button
          onClick={DarkModetoggle}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:scale-105 transition"
        >
          <Moon size={18} />
        </button>

        {/* Home */}
        <Link
          href="/"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <FaHome size={18} />
        </Link>

        {/* Notification */}
        <button className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          <FaBell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <Link
          href="/dashboard/admin-profile"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <FaUserCircle size={18} />
        </Link>

        {/* Sidebar Toggle */}
        <button
          onClick={onhandleSidebarOpen}
          className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {sidebarOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>

      </div>
    </header>
  );
};

export default Navber;