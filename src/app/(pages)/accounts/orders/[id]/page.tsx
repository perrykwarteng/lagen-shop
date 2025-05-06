"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import Image from "next/image";

// Sample order data - in a real app, this would be fetched from an API
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
        <h1>{`ORDER ${id}`}</h1>
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <div>
            <p className="text-sm">ORDER DATE: {order.date}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm">ORDER STATUS:</p>
              <p>{order.status}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm">{order.totalItems} ITEMS</p>
            <p className="font-medium">{order.totalPrice}</p>
          </div>

          <div className="w-full sm:w-auto">
            <Link href={`/orders/${id}/track`}>
              <button className="w-full sm:w-auto">TRACK ORDER</button>
            </Link>
          </div>
        </div>
        {order.returnsEnded && (
          <p className="text-xs text-gray-500 mb-4 text-right">
            *The returns period for this order has ended
          </p>
        )}
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/6">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  {item.discount && <p>{item.discount}</p>}
                </div>

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

                <button>BUY AGAIN</button>
              </div>

              <div className="w-full sm:w-1/3">
                <div className="mb-4">
                  <h4 className="text-xs font-medium mb-1">SHIPPING ADDRESS</h4>
                  <address className="text-sm not-italic">
                    {order.shippingAddress.name}
                    <br />
                    {order.shippingAddress.line1}
                    <br />
                    {order.shippingAddress.line2}
                    <br />
                    {order.shippingAddress.city}
                    <br />
                    {order.shippingAddress.postalCode}
                    <br />
                    {order.shippingAddress.state}
                    <br />
                    {order.shippingAddress.country}
                  </address>
                </div>

                <div>
                  <h4 className="text-xs font-medium mb-1">SHIPPING METHOD</h4>
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
      </AccountLayout>
    </Layout>
  );
}
