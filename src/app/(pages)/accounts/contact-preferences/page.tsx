"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { useState } from "react";

export default function ContactPreferencesPage() {
  const [preferences, setPreferences] = useState({
    email: false,
    sms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreferences({ email: false, sms: false });
    console.log("Updated contact preferences", preferences);
  };

  return (
    <Layout>
      <AccountLayout>
        <h1>CONTACT PREFERENCES</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="flex-1">EMAIL</span>
                <input type="checkbox" checked={preferences.email} />
                <span className="text-sm text-gray-500">Opt In</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="flex-1">SMS</span>
                <input type="checkbox" checked={preferences.sms} />
                <span className="text-sm text-gray-500">Opt In</span>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                *By checking the SMS box, you are agreeing to receive texts from
                or on behalf of fashion and companies or services at the mobile
                number, including the telephone number you provide. These texts
                could be sent using an automated telephone system. Agreement is
                not a requirement of purchase and you are free to opt-out at any
                time.
              </p>
            </div>

            <button type="submit" className="w-full mt-6">
              UPDATE
            </button>
          </div>
        </form>
      </AccountLayout>
    </Layout>
  );
}
