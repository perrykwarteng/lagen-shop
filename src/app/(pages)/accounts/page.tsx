import Dashboard from "@/components/dashboard/dashboard";
import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";

export default function Accouts() {
  return (
    <>
      <Layout>
        <AccountLayout>
          <Dashboard />
        </AccountLayout>
      </Layout>
    </>
  );
}
