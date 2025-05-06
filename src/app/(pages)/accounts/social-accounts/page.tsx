"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";

export default function SocialAccountsPage() {
  const handleLinkFacebook = () => {
    console.log("Link Facebook account");
  };

  return (
    <Layout>
      <AccountLayout>
        <h1> SOCIAL ACCOUNTS</h1>

        <div>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-12 h-12 bg-[#1877F2] flex items-center justify-center rounded-lg mb-4">
              {/* Icon */}
            </div>
            <button
              onClick={handleLinkFacebook}
              className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90"
            >
              LINK FACEBOOK ACCOUNT
            </button>
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
}
