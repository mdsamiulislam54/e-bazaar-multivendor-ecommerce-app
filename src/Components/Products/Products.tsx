"use client";

import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
import Loader from "@/app/(main)/loading";

interface Product {
  _id: string;
  title: string;
  images: string[];
  price: number;
  discountPrice?: number;
  rating?: number;
  stock?: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/get-random-products`,
          { cache: "no-store" }
        );

        const data = await res.json();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Just For You
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}

        </div>

        {/* SEE MORE */}
        <div className="flex justify-center mt-10">
          <Link href="/shopping" className="btn btn-outline">
            See More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;