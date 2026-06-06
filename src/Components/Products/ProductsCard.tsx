"use client";

import { addToCart } from "@/redux/feature/addToCart/addToCart";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Product {
  _id: string;
  title: string;
  images: string[];
  price: number;
  rating?: number;
  stock?: number;
}

const ProductsCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.value);

  const handleCart = () => {
    const exist = cartItems.find((item) => item._id === product._id);

    if (exist) {
      toast.info("Already in cart");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      toast.success("Added to cart");
    }
  };

  return (
    <div
      className="
        card 
        border border-base-300 dark:border-gray-700
        shadow-md hover:shadow-xl
        transition duration-300
        group
      "
    >

      {/* IMAGE FIXED CONTAINER */}
      <figure className="relative w-full aspect-square overflow-hidden bg-base-200">

        <Image
          src={
            product.images?.[0] ||
            "https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
          }
          alt={product.title}
          fill
          className="
            object-cover
            group-hover:scale-110
            transition duration-500
          "
        />

        {/* QUICK CART BUTTON */}
        <button
          onClick={handleCart}
          className="
            absolute bottom-3 left-3
            btn btn-circle btn-sm btn-neutral
            opacity-90 hover:opacity-100
          "
        >
          <BsFillCartCheckFill />
        </button>

      </figure>

      {/* BODY */}
      <div className="card-body p-3 space-y-2">

        {/* TITLE */}
        <h2 className="font-semibold line-clamp-1 dark:text-white">
          {product.title}
        </h2>

        {/* PRICE + RATING */}
        <div className="flex justify-between items-center">

          <p className="text-lg font-bold dark:text-white">
            ৳ {product.price}
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {[...Array(Math.round(product.rating || 0))].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

        </div>

        {/* STOCK + CTA */}
        <div className="flex justify-between items-center">

          <p className="text-xs opacity-70 dark:text-white">
            {product.stock || 0} in stock
          </p>

          <Link
            href={`/checkout/${product._id}`}
            className="btn btn-xs btn-black dark:btn-white"
          >
            Buy Now
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductsCard;