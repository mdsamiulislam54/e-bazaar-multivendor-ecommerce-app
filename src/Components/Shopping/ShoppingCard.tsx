'use client'

import { addToCart } from '@/redux/feature/addToCart/addToCart'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

interface Products {
  title: string
  price: number
  discountPrice: number
  rating: number
  stock: number
  images: string[]
  category: string
  _id: string
}

type ProductsProps = { products: Products[] }

const ShoppingCard: React.FC<ProductsProps> = ({ products }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.value)

  const handledTwoCartItem = (product: Products) => {
    const exist = cartItems.find((item) => item._id === product._id)
    if (exist) toast.info('Already in cart')
    else {
      dispatch(addToCart({ ...product, quantity: 1 }))
      toast.success('Added to cart')
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">

      {products.map((product) => (

        <div
          key={product._id}
          className="group relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >

          {/* Image */}
          <Link href={`checkout/${product._id}`} className="block h-64 bg-white dark:bg-black overflow-hidden">
            <Image
              src={product.images[0] || 'https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg'}
              width={400}
              height={400}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Cart Button */}
          <button
            onClick={() => handledTwoCartItem(product)}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white hover:bg-white hover:text-black border border-white/20 transition"
          >
            <BsFillCartCheckFill size={14} />
          </button>

          {/* Content */}
          <div className="p-4 space-y-3">

            {/* Title */}
            <h2 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
              {product.title}
            </h2>

            {/* Price + Rating */}
            <div className="flex items-center justify-between">

              <p className="text-lg font-bold text-black dark:text-white">
                ৳ {product.price}
              </p>

              <div className="flex items-center gap-1 text-black dark:text-white">
                {[...Array(Math.round(product.rating))].map((_, i) => (
                  <FaStar key={i} size={12} />
                ))}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                  {product.rating}
                </span>
              </div>

            </div>

            {/* Stock + Buy */}
            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {product.stock} in stock
              </p>

              <Link
                href={`checkout/${product._id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
              >
                Buy Now
              </Link>

            </div>

          </div>

        </div>

      ))}

    </div>
  )
}

export default ShoppingCard