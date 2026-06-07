"use client"

interface PageProps {
  setSort: (value: string) => void
  total: number
}

const Sorting: React.FC<PageProps> = ({ setSort, total }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-5 w-full md:w-auto relative z-[1]">
      
      <p className="flex gap-1 text-sm text-base-content/70">
        Showing <span className="font-semibold text-primary">{total}</span> Results
      </p>

      <select
        defaultValue="latest"
        onChange={(e) => setSort(e.target.value)}
        className="select select-bordered w-full sm:w-56 md:w-64 lg:w-72 bg-base-100/60 dark:bg-[#0b0b0b] backdrop-blur-xl rounded-full p-2 text-sm font-semibold focus:outline-none"
      >
        <option value="latest">Latest</option>
        <option value="older">Older</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>

    </div>
  )
}

export default Sorting