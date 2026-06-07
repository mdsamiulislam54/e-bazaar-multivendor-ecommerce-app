import Image from 'next/image';
import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

interface products {
    _id: string;
    description: string;
    reviews: { user: string; rating: number; comment: string }[];
    tags: string;
    images: string[];
}

type CheckoutDetailsProps = {
    products: products;
};

const CheckoutDescription: React.FC<CheckoutDetailsProps> = ({ products }) => {
    return (
        <div className="rubik my-10  ">
            {/* Product Description */}
            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
            <p className="text-gray-700 dark:text-gray-100 leading-7">{products?.description}</p>

            <div className='my-10 '>
                <Image
                    src={products?.images?.[2] || '/placeholder.png'}
                    width={100}
                    height={10}
                    alt="Product Image"
                    priority

                    className="w-full h-auto mb-6 rounded-lg object-cover"
                />
            </div>

            {/* Reviews Section */}
            <div className="mt-10">


                <div className="mb-8 rounded-3xl border border-base-300 dark:bg-gray-900  p-6 backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold dark:text-white">
                                Customer Reviews
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Based on {products.reviews.length} reviews
                            </p>
                        </div>

                        <div className="text-right">
                            <h3 className="text-4xl font-bold text-primary">
                                {products.reviews.length > 0
                                    ? (
                                        products.reviews.reduce((acc, review) => acc + review.rating, 0) / products.reviews.length
                                    ).toFixed(1)
                                    : 'No ratings yet'}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Average Rating
                            </p>
                        </div>
                    </div>
                </div>

                {products?.reviews?.length > 0 ? (
                    <div className="grid gap-6 lg:grid-cols-3">
                        {products.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-base-300
          bg-base-100/70
          backdrop-blur-xl
          p-6
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-2xl
          hover:border-primary/40
          dark:bg-gray-900
          dark:text-white
        "
                            >
                                {/* Gradient Blur Effect */}
                                <div
                                    className="
            absolute
            -top-20
            -right-20
            h-40
            w-40
            rounded-full
            bg-primary/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-primary
                  to-secondary
                  text-lg
                  font-bold
                  text-white
                  shadow-lg
                "
                                            >
                                                {review.user.charAt(0).toUpperCase()}
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-lg ">
                                                    {review.user}
                                                </h3>

                                                <p className="text-sm ">
                                                    Verified Purchase
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="
                badge
                badge-primary
                badge-lg
                font-semibold
                px-3
              "
                                        >
                                            {review.rating}/5
                                        </div>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex items-center gap-1 mt-5">
                                        {[...Array(5)].map((_, i) => (
                                            <MdOutlineStar
                                                key={i}
                                                size={20}
                                                className={
                                                    i < Math.floor(review.rating)
                                                        ? "text-warning fill-warning"
                                                        : "text-base-300"
                                                }
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p
                                        className="
              mt-5
              leading-7
                text-gray-700 dark:text-gray-300
              text-[15px]
            "
                                    >
                                        "{review.comment}"
                                    </p>

                                    {/* Footer */}
                                    <div
                                        className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-base-300
              pt-4
            "
                                    >
                                        <span className="text-xs ">
                                            Customer Review
                                        </span>

                                        <span
                                            className="
                badge
                badge-outline
                badge-success
              "
                                        >
                                            Recommended
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-dashed
      border-base-300
      bg-base-200/50
      py-16
      text-center
    "
                    >
                        <h3 className="text-xl font-semibold">
                            No Reviews Yet
                        </h3>

                        <p className="mt-2 text-base-content/60">
                            Be the first customer to share your experience.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutDescription;
