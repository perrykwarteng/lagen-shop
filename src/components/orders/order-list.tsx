"use client";

import Link from "next/link";

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
        <div
          key={order.id}
          className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div>
              <h3 className="font-medium">{order.id}</h3>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{order.total}</p>
              <p
                className={`text-xs mt-1 ${
                  order.status === "COMPLETED"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href={`/accounts/orders/${order.id}`}>
              <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
                VIEW ORDER
              </button>
            </Link>
          </div>

          {order.returnsEnded && (
            <p className="text-xs text-gray-500 mt-3 text-right italic">
              *The returns period for this order has ended
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
