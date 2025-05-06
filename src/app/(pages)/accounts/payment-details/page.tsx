"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";

export default function PaymentDetailsPage() {
  const handleAddCard = () => {
    console.log("Add new card");
  };

  return (
    <Layout>
      <AccountLayout>
        <h1>PAYMENT DETAILS</h1>

        <div>
          <div className="flex flex-col items-center justify-center py-8">
            {/* icon */}
            <button onClick={handleAddCard} className="w-full">
              ADD CARD
            </button>
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
}
