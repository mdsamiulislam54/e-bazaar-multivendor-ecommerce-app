'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
import { decrementQuantity, incrementQuantity, removeAllFromCart, removeFromCart } from '@/redux/feature/addToCart/addToCart'
import Button from '@/Components/Button/Button'
import { MdArrowRightAlt } from "react-icons/md"
import { RootState } from '@/redux/store'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import BackButton from '@/Components/Button/BackButton/BackButton'
import { useRouter } from 'next/navigation'

interface CartItem {
  _id: string
  title: string
  brand: string
  price: number
  discountPrice: number
  quantity: number
  images: string[]
}

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.value as CartItem[])
  const dispatch = useDispatch()
  const router = useRouter()

  const subTotal = () =>
    cartItems.reduce((acc, cart) => acc + cart.price * cart.quantity, 0)

  const discount = () =>
    cartItems.reduce((acc, cart) => acc + cart.discountPrice * cart.quantity, 0)

  const handleDeleteCartItem = (id: string) => {
    dispatch(removeFromCart(id))
    toast.success("Removed from cart")
  }

  const handleDeleteAllCartItem = () => {
    Swal.fire({
      title: "Remove all items?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#666",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAllFromCart())
        toast.success("Cart cleared")
      }
    })
  }

  const handleCheckout = () => {
    router.push(`/checkout/${cartItems[0]._id}`)
  }

  const handleCheckoutItem = (_id: string) => {
    router.push(`/checkout/${_id}`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* Hero */}
      {/* Hero */}
      <div
        className="h-[220px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/cozastore/images/bg-01.jpg.webp")`,
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* content */}
        <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 gap-4">

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Your Shopping Cart
          </h1>

          <div className="text-white/80 text-sm">
            Manage your items before checkout
          </div>

          <BackButton />

        </div>
      </div>

      <div className="container-custom py-10">

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            Cart is empty —{" "}
            <Link href="/shop" className="underline text-black dark:text-white">
              Go Shopping
            </Link>
          </div>
        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">

              {/* Header */}
              <div className="flex justify-between items-center p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b]">
                <h2 className="font-bold">Cart Items</h2>

                <button
                  onClick={handleDeleteAllCartItem}
                  className="text-sm text-gray-500 hover:text-red-500 transition"
                >
                  Clear All
                </button>
              </div>

              {/* Items */}
              <div className="space-y-4">

                {cartItems.map((cart) => (

                  <div
                    key={cart._id}
                    className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] hover:shadow-lg transition"
                  >

                    {/* Product */}
                    <div
                      onClick={() => handleCheckoutItem(cart._id)}
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <Image
                        src={cart.images?.[0] || cart.images?.[1]}
                        width={60}
                        height={60}
                        alt={cart.title}
                        className="rounded-xl object-contain bg-white dark:bg-black"
                      />

                      <div>
                        <p className="font-medium line-clamp-1">{cart.title}</p>
                        <p className="text-xs text-gray-500">{cart.brand}</p>
                        <p className="text-sm font-semibold">৳ {cart.discountPrice}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">

                      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden">

                        <button
                          onClick={() => dispatch(decrementQuantity(cart._id))}
                          className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                          -
                        </button>

                        <span className="px-3">{cart.quantity}</span>

                        <button
                          onClick={() => dispatch(incrementQuantity(cart._id))}
                          className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => handleDeleteCartItem(cart._id)}
                        className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-red-500 hover:text-white transition"
                      >
                        <MdDeleteForever size={18} />
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT SUMMARY */}
            <div className="lg:col-span-1">

              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] space-y-4">

                <h2 className="font-bold text-lg">Order Summary</h2>

                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>৳ {subTotal()}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Discount</span>
                  <span>৳ {subTotal() - discount()}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Delivery</span>
                  <span>৳ 100</span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>৳ {discount() + 100}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
                >
                  Go to Checkout <MdArrowRightAlt />
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default ShoppingCart