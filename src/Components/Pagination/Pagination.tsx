"use client";
import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageArray: number[];
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageArray,
}) => {
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-2">

        {/* Prev */}
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white disabled:opacity-40"
        >
          <IoIosArrowRoundBack size={20} />
        </button>

        {/* Pages */}
        <div className="flex items-center gap-2">
          {pageArray.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                w-10 h-10
                flex items-center justify-center
                rounded-full
                border
                transition-all
                duration-200

                ${
                  currentPage === page
                    ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white scale-110"
                    : "bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700 hover:scale-105"
                }
              `}
            >
              {page + 1}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          disabled={pageArray.length - 1 === currentPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white disabled:opacity-40"
        >
          <IoIosArrowRoundForward size={20} />
        </button>

      </nav>
    </div>
  );
};

export default Pagination;