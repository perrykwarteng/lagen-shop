"use client";

import Link from "next/link";

// Sample order data
const orders = [
  {
    id: "ANZ103082299",
    status: "IN PROGRESS",
    date: "12/7/23",
    total: "GHȼ 2100.00",
    returnsEnded: true,
  },
  {
    id: "ANZ103082298",
    status: "IN PROGRESS",
    date: "12/7/23",
    total: "GHȼ 2100.00",
    returnsEnded: true,
  },
  {
    id: "ANZ103082297",
    status: "COMPLETED",
    date: "1/7/23",
    total: "GHȼ 2100.00",
    returnsEnded: true,
  },
];

export function OrderList() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-wrap justify-between gap-2 mb-4">
            <div>
              <h3 className="font-medium">{order.id}</h3>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{order.total}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              <Link href={`/orders/${order.id}`}>
                <button>VIEW ORDER</button>
              </Link>
            </div>
          </div>

          {order.returnsEnded && (
            <p className="text-xs text-gray-500 mt-2 text-right">
              *The returns period for this order has ended
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
