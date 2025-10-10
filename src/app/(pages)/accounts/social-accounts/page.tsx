"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { useEffect, useState, JSX } from "react";
import { useAccount } from "@/context/AccountProvider";
import { FaFacebookF, FaGoogle, FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { Spinner } from "@/components/spinner/page";

type Platform = "facebook" | "google" | "twitter" | "snapchat";

interface SocialAccount {
  platform: Platform;
  account_name: string;
  account_url: string;
  is_connected: boolean;
  account_id: string;
}

interface ModalState {
  type: "add" | "unlink" | "delete" | null;
  account?: SocialAccount | null;
}

const PLATFORM_CONFIG: Record<
  Platform,
  { name: string; color: string; icon: JSX.Element }
> = {
  facebook: {
    name: "Facebook",
    color: "#1877F2",
    icon: <FaFacebookF size={20} />,
  },
  google: { name: "Google", color: "#EA4335", icon: <FaGoogle size={20} /> },
  twitter: {
    name: "Twitter / X",
    color: "#000",
    icon: <FaXTwitter size={20} />,
  },
  snapchat: {
    name: "Snapchat",
    color: "#FFFC00",
    icon: <FaSnapchat size={22} />,
  },
};

export default function SocialAccountsPage() {
  const {
    socialAccounts: rawAccounts,
    getSocialAccounts,
    addSocialAccount,
    updateSocialAccount,
    deleteSocialAccount,
    loading,
  } = useAccount();

  const socialAccounts: SocialAccount[] = rawAccounts.map((account) => ({
    ...account,
    platform: account.platform as Platform,
  }));

  const [modal, setModal] = useState<ModalState>({ type: null, account: null });
  const [form, setForm] = useState({
    platform: "facebook" as Platform,
    account_name: "",
    account_url: "",
  });

  useEffect(() => {
    getSocialAccounts();
  }, [getSocialAccounts]);

  const resetModal = () => {
    setModal({ type: null, account: null });
    setForm({ platform: "facebook", account_name: "", account_url: "" });
  };

  const handleAddAccount = async () => {
    await addSocialAccount({
      platform: form.platform,
      account_name: form.account_name,
      account_url: form.account_url,
      account_id: "",
    });
    resetModal();
  };

  const handleUpdateAccount = async (
    account: SocialAccount,
    is_connected: boolean
  ) => {
    await updateSocialAccount(account.account_id, { ...account, is_connected });
    resetModal();
  };

  const handleDeleteAccount = async (account: SocialAccount) => {
    await deleteSocialAccount(account.account_id);
    resetModal();
  };

  return (
    <Layout>
      <AccountLayout>
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-xl font-semibold">SOCIAL ACCOUNTS</h1>
            <button
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
              onClick={() => setModal({ type: "add", account: null })}
            >
              + Add Account
            </button>
          </div>
          {loading && (
            <div className="flex flex-col items-center justify-center">
              <Spinner />
              <p className="text-gray-500">Loading Socials...</p>
            </div>
          )}
          {!loading && socialAccounts.length === 0 && (
            <p className="text-gray-500 text-center mt-10">
              No accounts linked yet.
            </p>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialAccounts.map((account) => {
              const cfg = PLATFORM_CONFIG[account.platform];
              return (
                <div
                  key={account.account_id}
                  className="border rounded-lg shadow-sm p-6 flex flex-col items-center bg-white"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg mb-4"
                    style={{ backgroundColor: cfg.color, color: "white" }}
                  >
                    {cfg.icon}
                  </div>
                  <h3 className="font-medium mb-1">{cfg.name}</h3>
                  <p className="text-sm text-gray-600">
                    {account.account_name}
                  </p>
                  <a
                    href={account.account_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 underline mt-1"
                  >
                    {account.account_url}
                  </a>
                  {account.is_connected ? (
                    <div className="flex gap-2 mt-4 w-full">
                      <button
                        className="flex-1 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => setModal({ type: "unlink", account })}
                      >
                        Unlink
                      </button>
                      <button
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        onClick={() => setModal({ type: "delete", account })}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button
                      disabled={loading}
                      className="w-full px-4 py-2 bg-green-500 text-white rounded-md mt-3 hover:bg-green-600"
                      onClick={() => handleUpdateAccount(account, true)}
                    >
                      {loading ? "Linking..." : "Link Again"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {modal.type && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
              {modal.type === "add" && (
                <>
                  <h2 className="text-lg font-semibold mb-4">
                    Add Social Account
                  </h2>
                  <select
                    value={form.platform}
                    onChange={(e) =>
                      setForm({ ...form, platform: e.target.value as Platform })
                    }
                    className="w-full border rounded-md p-2 mb-3"
                  >
                    {Object.keys(PLATFORM_CONFIG).map((p) => (
                      <option key={p} value={p}>
                        {PLATFORM_CONFIG[p as Platform].name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Account Name"
                    value={form.account_name}
                    onChange={(e) =>
                      setForm({ ...form, account_name: e.target.value })
                    }
                    className="w-full border rounded-md p-2 mb-3"
                  />
                  <input
                    type="url"
                    placeholder="https://profile-link.com"
                    value={form.account_url}
                    onChange={(e) =>
                      setForm({ ...form, account_url: e.target.value })
                    }
                    className="w-full border rounded-md p-2 mb-3"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={resetModal}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={loading}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
                      onClick={handleAddAccount}
                    >
                      {loading ? "Adding..." : "Add"}
                    </button>
                  </div>
                </>
              )}

              {modal.type === "unlink" && modal.account && (
                <>
                  <h2 className="text-lg font-semibold mb-4">
                    Unlink {PLATFORM_CONFIG[modal.account.platform].name}?
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Are you sure you want to unlink this account?
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={resetModal}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={loading}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleUpdateAccount(modal.account!, false)}
                    >
                      {loading ? "Unlinking..." : "Unlink"}
                    </button>
                  </div>
                </>
              )}

              {modal.type === "delete" && modal.account && (
                <>
                  <h2 className="text-lg font-semibold mb-4">
                    Delete {PLATFORM_CONFIG[modal.account.platform].name}?
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    This action cannot be undone. Do you really want to delete
                    this account?
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={resetModal}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={loading}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleDeleteAccount(modal.account!)}
                    >
                      {loading ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </AccountLayout>
    </Layout>
  );
}
