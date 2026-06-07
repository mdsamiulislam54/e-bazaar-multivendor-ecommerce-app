"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { Tag, PackagePlus } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import instance from "@/lib/axios";

interface ProductFormInputs {
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  currency: string;
  category: string;
  subCategory: string;
  brand: string;
  rating: number;
  stock: number;
  featured: boolean;
  sizes: string;
  images: string;
  tags: string;
}

const ProductForm = () => {
  const { register, handleSubmit } = useForm<ProductFormInputs>();

  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    try {
      const payload = {
        ...data,
        sizes: data.sizes?.split(",").map((s) => s.trim()),
        images: data.images?.split(",").map((i) => i.trim()),
        tags: data.tags?.split(",").map((t) => t.trim()),
      };

      const res = await instance.post("/admin/add-products", payload, {
        withCredentials: true,
      });

      Swal.fire({
        icon: "success",
        title: res.data.message || "Product Added Successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Add Product!",
      });
    }
  };

  const input =
    "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100 dark:bg-black">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-6 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl space-y-6"
      >

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
          <PackagePlus /> Add New Product
        </h2>

        {/* Inputs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          <input {...register("title", { required: true })} placeholder="Title" className={input} />

          <input {...register("price")} type="number" placeholder="Price" className={input} />

          <input {...register("discountPrice")} type="number" placeholder="Discount Price" className={input} />

          <input {...register("currency")} placeholder="Currency" className={input} />

          <input {...register("category")} placeholder="Category" className={input} />

          <input {...register("subCategory")} placeholder="Sub Category" className={input} />

          <input {...register("brand")} placeholder="Brand" className={input} />

          <input {...register("rating")} type="number" step="0.1" placeholder="Rating" className={input} />

          <input {...register("stock")} type="number" placeholder="Stock" className={input} />

        </div>

        {/* Description */}
        <textarea
          {...register("description")}
          rows={4}
          placeholder="Product Description"
          className={`${input} resize-none`}
        />

        {/* Extra Fields */}
        <div className="grid md:grid-cols-3 gap-4">

          <input {...register("sizes")} placeholder="Sizes (M, L, XL)" className={input} />

          <div className="relative">
            <CiImageOn className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("images")}
              placeholder="Image URLs"
              className="pl-10 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-white"
            />
          </div>

          <div className="relative">
            <Tag className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("tags")}
              placeholder="Tags"
              className="pl-10 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-white"
            />
          </div>

        </div>

        {/* Featured */}
        <label className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <input type="checkbox" {...register("featured")} className="checkbox" />
          Featured Product
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Submit Product
        </button>

      </form>
    </div>
  );
};

export default ProductForm;