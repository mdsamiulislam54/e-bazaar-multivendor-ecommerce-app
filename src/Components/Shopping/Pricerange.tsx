"use client"

interface PageProps {
  setMinPrice: React.Dispatch<React.SetStateAction<number>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>
}

const Pricerange: React.FC<PageProps> = ({ setMinPrice, setMaxPrice }) => {
  return (
    <div className="w-full">

      <p className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
        Price Range
      </p>

      <div className="flex lg:flex-col gap-4 w-full">

        {/* Min Price */}
        <input
          onChange={(e) => setMinPrice(Number(e.target.value))}
          type="number"
          placeholder="Min Price.."
          className="input w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none"
        />

        {/* Max Price */}
        <input
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          type="number"
          placeholder="Max Price.."
          className="input w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none"
        />

      </div>
    </div>
  )
}

export default Pricerange