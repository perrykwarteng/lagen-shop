import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { OrderList } from "@/components/orders/order-list";

export default function OrdersPage() {
  return (
    <Layout>
      <AccountLayout>
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <h1>HISTORY</h1>
          <OrderList />
        </div>
      </AccountLayout>
    </Layout>
  );
}
