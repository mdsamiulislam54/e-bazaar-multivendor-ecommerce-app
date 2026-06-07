"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { MdPrint } from "react-icons/md"
import BackButton from "@/Components/Button/BackButton/BackButton"
import { useReactToPrint } from "react-to-print"
import axios from "axios"
import { Order } from "@/lib/orders"

const OrderInvoice = () => {
  const [order, setOrder] = useState<Order | null>(null)
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({ contentRef })

  const getOrderById = useCallback(async () => {
    if (!id) return
    const res = await axios.get(`http://localhost:5000/user/order/${id}`)
    if (res.status === 200) setOrder(res.data)
  }, [id])

  useEffect(() => {
    getOrderById()
  }, [getOrderById])

  return (
    <div className="container-custom my-10 min-h-screen text-black dark:text-white">

      <BackButton />

      {/* Invoice */}
      <div ref={contentRef} className="flex justify-center mt-6">

        <div className="relative w-full md:w-[700px] p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl overflow-hidden">

          {/* Background watermark */}
          <p className="absolute inset-0 flex items-center justify-center text-[10vw] font-bold opacity-5">
            E-Bazaar
          </p>

          {/* Header */}
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-4">

            <div>
              <h1 className="text-2xl font-bold">INVOICE</h1>

              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p><strong>Bill No:</strong> {Math.floor(Math.random() * 10000)}</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="text-sm text-right text-gray-600 dark:text-gray-400">
              <p className="font-medium text-black dark:text-white">E-Bazaar Ltd.</p>
              <p>Reliable Tech Store</p>
              <p>Dhaka, Bangladesh</p>
            </div>

          </div>

          {/* Customer */}
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Customer Info</h2>

            <div className="grid grid-cols-2 gap-2 text-sm border border-gray-200 dark:border-gray-800 rounded-xl p-3">

              <p className="text-gray-500">Name</p>
              <p>{order?.customer?.name}</p>

              <p className="text-gray-500">Email</p>
              <p>{order?.customer?.email}</p>

              <p className="text-gray-500">Phone</p>
              <p>{order?.customer?.phone || "N/A"}</p>

              <p className="text-gray-500">Address</p>
              <p>{order?.customer?.address || "N/A"}</p>

              <p className="text-gray-500">Delivery</p>
              <p>{order?.customer?.deliveryAddress || "N/A"}</p>

            </div>
          </div>

          {/* Product */}
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Products</h2>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">

              <table className="w-full text-sm">

                <thead className="bg-gray-100 dark:bg-white/5">
                  <tr>
                    <th className="p-3 text-left">Image</th>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-left">Qty</th>
                    <th className="p-3 text-left">Total</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t border-gray-200 dark:border-gray-800">

                    <td className="p-3">
                      <Image
                        src={order?.product?.image || ""}
                        width={40}
                        height={40}
                        alt="product"
                        className="rounded-md object-cover"
                      />
                    </td>

                    <td className="p-3">{order?.product?.name}</td>
                    <td className="p-3">{order?.product?.quantity || 1}</td>
                    <td className="p-3 font-semibold">
                      {order?.product?.totalPrice}
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>
          </div>

          {/* Total */}
          <div className="mt-5 flex justify-end">
            <div className="text-right">
              <p className="text-lg font-semibold">
                Total: {order?.product?.totalPrice} {order?.product?.currency || "BDT"}
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-10 flex justify-between text-sm text-gray-500 dark:text-gray-400">

            <div>
              <p>Signature</p>
              <p className="text-black dark:text-white font-semibold">
                Md Shamiul Islam
              </p>
            </div>

            <div className="text-right">
              <p>Thank you for shopping!</p>
            </div>

          </div>

        </div>

      </div>

      {/* Print Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={reactToPrintFn}
          className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 hover:opacity-80 transition"
        >
          <MdPrint size={18} />
          Print
        </button>
      </div>

    </div>
  )
}

export default OrderInvoice