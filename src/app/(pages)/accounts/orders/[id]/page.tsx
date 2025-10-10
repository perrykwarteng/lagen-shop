"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import Image from "next/image";

const orderData = {
  id: "ANZ103082299",
  date: "12/7/23",
  status: "IN PROGRESS",
  items: [
    {
      id: 1,
      name: "OVERSIZED TEDDY FAUX FUR BOMBER JACKET",
      color: "brown",
      size: "L",
      quantity: 1,
      originalPrice: "GHȼ 2500.00",
      price: "GHȼ 2000.00",
      discount: "20% OFF",
      image:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "OVERSIZED TEDDY FAUX FUR BOMBER JACKET",
      color: "brown",
      size: "L",
      quantity: 1,
      originalPrice: "GHȼ 2500.00",
      price: "GHȼ 2000.00",
      discount: "55% OFF",
      image:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  totalItems: 5,
  totalPrice: "GHȼ 2500.00",
  shippingAddress: {
    name: "Eugenia Massaquoi",
    line1: "390",
    line2: "Keilor Rd",
    city: "Niddrie",
    postalCode: "3042",
    state: "VIC",
    country: "AU",
  },
  shippingMethod: [
    {
      name: "Ghana",
      price: "GHȼ 2500.00",
    },
    {
      name: "Credit Card",
      price: "",
    },
  ],
  returnsEnded: true,
};

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order] = useState(orderData);

  return (
    <Layout>
      <AccountLayout>
        <div className="bg-white border border-black rounded-[15px] p-6 shadow-sm">
          <h1 className="text-lg font-semibold mb-4">{`ORDER ${id}`}</h1>

          <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
            <div>
              <p className="text-sm">ORDER DATE: {order.date}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm">STATUS:</p>
                <span
                  className={`text-sm font-medium ${
                    order.status === "COMPLETED"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm">{order.totalItems} ITEMS</p>
              <p className="font-semibold">{order.totalPrice}</p>
            </div>

            <div className="w-full sm:w-auto">
              <Link href={`/orders/${id}/track`}>
                <button className="w-full sm:w-auto px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
                  TRACK ORDER
                </button>
              </Link>
            </div>
          </div>

          {order.returnsEnded && (
            <p className="text-xs text-gray-500 mb-4 text-right italic">
              *The returns period for this order has ended
            </p>
          )}

          <div className="space-y-6">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 border-t pt-4"
              >
                {/* Product Image */}
                <div className="w-full sm:w-1/6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  {item.discount && (
                    <p className="text-xs text-red-500 mb-1 font-semibold">
                      {item.discount}
                    </p>
                  )}
                  <h3 className="font-medium text-sm mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-4 h-4 rounded-full bg-amber-800 border border-gray-300"
                      aria-label={`Color: ${item.color}`}
                    ></div>
                    <span className="text-xs uppercase">{item.size}</span>
                  </div>
                  <p className="text-sm mb-2">QTY: {item.quantity}</p>
                  <div className="mb-4">
                    <p className="text-sm line-through text-gray-500">
                      {item.originalPrice}
                    </p>
                    <p className="font-medium text-red-500">{item.price}</p>
                  </div>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">
                    BUY AGAIN
                  </button>
                </div>

                {/* Shipping Details */}
                <div className="w-full sm:w-1/3 bg-gray-50/40 rounded-xl p-4">
                  <div className="mb-4">
                    <h4 className="text-xs font-medium mb-1">
                      SHIPPING ADDRESS
                    </h4>
                    <address className="text-sm not-italic leading-tight">
                      {order.shippingAddress.name}
                      <br />
                      {order.shippingAddress.line1},{" "}
                      {order.shippingAddress.line2}
                      <br />
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state}{" "}
                      {order.shippingAddress.postalCode}
                      <br />
                      {order.shippingAddress.country}
                    </address>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium mb-1">
                      SHIPPING METHOD
                    </h4>
                    <p className="text-sm">
                      {item.id === 1
                        ? order.shippingMethod[0].name
                        : order.shippingMethod[1].name}
                      <br />
                      {item.id === 1 && order.shippingMethod[0].price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
}
