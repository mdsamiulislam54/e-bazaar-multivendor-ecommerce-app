"use client"
import { useRouter } from "next/navigation"
import { IoIosArrowRoundBack } from "react-icons/io"

const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-white/20 dark:border-white/10
        bg-white/20 dark:bg-black/30
        backdrop-blur-xl
        text-black dark:text-white
        hover:bg-white/30 dark:hover:bg-white/10
        transition-all duration-300
        shadow-sm
      "
    >
      <IoIosArrowRoundBack size={20} />
      <span className="text-sm font-medium">Back</span>
    </button>
  )
}

export default BackButton