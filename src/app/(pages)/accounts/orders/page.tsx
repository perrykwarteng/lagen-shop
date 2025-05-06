import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { OrderList } from "@/components/orders/order-list";

export default function OrdersPage() {
  return (
    <Layout>
      <AccountLayout>
        <h1>HISTORY</h1>
        <OrderList />
      </AccountLayout>
    </Layout>
  );
}
