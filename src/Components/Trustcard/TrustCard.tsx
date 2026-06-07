import React from "react"
import { FaShippingFast } from "react-icons/fa"
import { MdOutlineSupportAgent } from "react-icons/md"
import { RiUserSharedFill } from "react-icons/ri"
import { FaGift } from "react-icons/fa6"

const TrustCard = () => {
  const cards = [
    {
      icons: <FaShippingFast />,
      title: "Free Shipping",
      description: "When you spend ৳ 2K +",
    },
    {
      icons: <MdOutlineSupportAgent />,
      title: "Call Us Anytime",
      description: "+880-123222323",
    },
    {
      icons: <RiUserSharedFill />,
      title: "Cart With Us",
      description: "We offer 24 hour chat support",
    },
    {
      icons: <FaGift />,
      title: "Gift Cards",
      description: "For your loved one, in any amount",
    },
  ]

  return (
    <div className="my-16">

      <div className="container-custom">

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {cards.map((card) => (

            <div
              key={card.title}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xl">
                {card.icons}
              </div>

              {/* Text */}
              <div>
                <p className="text-base font-semibold text-black dark:text-white">
                  {card.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default TrustCard