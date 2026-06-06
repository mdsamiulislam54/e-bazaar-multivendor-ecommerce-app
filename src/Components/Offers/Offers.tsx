import Image from "next/image";
import React from "react";
import Countdown from "./CountDown";
import Link from "next/link";

const Offers = () => {
    return (
        <div className="container-custom my-16">
            <div className="
                grid grid-cols-1 lg:grid-cols-2
                rounded-3xl overflow-hidden
                shadow-2xl
                border border-white/10
                bg-gradient-to-br from-white to-gray-100
                dark:from-gray-900 dark:to-black
            ">

                {/* LEFT SIDE IMAGE */}
                <div className="relative h-[420px] lg:h-auto">
                    <Image
                        src="https://i.postimg.cc/G2FT0xCn/fashion-portrait-two-smiling-brunette-women-models-summer-casual-hipster-overcoat-posing-gray-Photor.png"
                        alt="Fashion Offer"
                        fill
                        className="object-cover scale-105 hover:scale-110 transition duration-700"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="
                    flex flex-col justify-center items-center
                    text-center
                    gap-6
                    p-10 lg:p-16
                    bg-white/70 dark:bg-black/40
                    backdrop-blur-xl
                ">

                    {/* badge */}
                    <span className="
                        px-4 py-1 rounded-full
                        text-xs font-semibold tracking-[0.3em]
                        bg-yellow-500/10 text-yellow-600
                        border border-yellow-500/20
                    ">
                        LIMITED OFFER
                    </span>

                    {/* title */}
                    <h2 className="
                        text-3xl md:text-5xl font-extrabold
                        tracking-tight
                        text-gray-900 dark:text-white
                    ">
                        Summer Collection 2026
                    </h2>

                    {/* subtitle */}
                    <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
                        Up to <span className="text-yellow-500 font-bold">50% OFF</span> on premium fashion
                    </p>

                    {/* description */}
                    <p className="max-w-md text-sm md:text-base text-gray-500 dark:text-gray-400">
                        Upgrade your wardrobe with trending outfits, exclusive styles,
                        and seasonal essentials. Limited stock available — grab yours before it ends.
                    </p>

                    {/* countdown */}
                    <div className="mt-2">
                        <Countdown
                            targetDate="2026-08-06T23:59:59Z"
                            className=""
                            onComplete={() => alert("Offer Ended!")}
                        />
                    </div>

                    {/* CTA */}
                    <Link
                        href="/shopping"
                        className="
                            mt-4
                            px-10 py-3
                            rounded-full
                            bg-yellow-500
                            text-black font-bold
                            shadow-lg
                            hover:scale-105
                            transition
                        "
                    >
                        Shop Now
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Offers;