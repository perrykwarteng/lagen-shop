"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";

export interface Preference {
  preference_id: string;
  preference_type: string;
  is_enabled: boolean;
}

export interface Address {
  id: string;
  address_type: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface SocialAccount {
  platform: string;
  account_name: string;
  account_url: string;
  is_connected: boolean;
  account_id: string;
}

export interface Payment {
  id: string;
  payment_type: string;
  card_type: string;
  last_four_digits: string;
  expiry_month: string;
  expiry_year: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

interface AccountContextType {
  preferences: Preference[];
  addresses: Address[];
  socialAccounts: SocialAccount[];
  payments: Payment[];
  loading: boolean;
  message: string;
  error: string;

  // Preferences
  getPreferences: () => Promise<void>;
  savePreference: (payload: Omit<Preference, "preference_id">) => Promise<void>;
  updatePreference: (
    id: string,
    payload: Omit<Preference, "preference_id">
  ) => Promise<void>;
  deletePreference: (id: string) => Promise<void>;

  // Addresses
  getAddresses: () => Promise<void>;
  saveAddress: (
    payload: Omit<Address, "id" | "created_at" | "updated_at">
  ) => Promise<void>;
  updateAddress: (
    id: string,
    payload: Omit<Address, "id" | "created_at" | "updated_at">
  ) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;

  // Social Accounts
  getSocialAccounts: () => Promise<void>;
  addSocialAccount: (
    payload: Omit<SocialAccount, "is_connected">
  ) => Promise<void>;
  updateSocialAccount: (
    platform: string,
    payload: Partial<SocialAccount>
  ) => Promise<void>;
  deleteSocialAccount: (platform: string) => Promise<void>;

  // Payments
  getPayments: () => Promise<void>;
  savePayment: (
    payload: Omit<Payment, "id" | "created_at" | "updated_at">
  ) => Promise<void>;
  updatePayment: (
    id: string,
    payload: Omit<Payment, "id" | "created_at" | "updated_at">
  ) => Promise<void>;
  deletePayment: (id: string) => Promise<void>;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [preferences, setPreferences] = useState<Preference[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const authHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  // ------------------ Helpers ------------------
  const handleResponse = async (res: Response) => {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg =
        data?.detail?.[0]?.msg ||
        data?.detail ||
        data?.message ||
        "Something went wrong";
      throw new Error(msg);
    }
    return data;
  };

  const resetState = () => {
    setMessage("");
    setError("");
  };

  // ------------------ Preferences ------------------
  const getPreferences = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/contact-preferences`, {
        headers: authHeaders,
      });
      const data = await handleResponse(res);
      setPreferences(data || []);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to load preferences";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const savePreference = async (payload: Omit<Preference, "preference_id">) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/contact-preferences`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Preference saved successfully");
      await getPreferences();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to save preference";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const updatePreference = async (
    id: string,
    payload: Omit<Preference, "preference_id">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/contact-preferences${id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Preference updated successfully");
      await getPreferences();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to update preference";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const deletePreference = async (id: string) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/contact-preferences${id}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      await handleResponse(res);

      setMessage("Preference deleted successfully");
      await getPreferences();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to delete preference";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Addresses ------------------
  const getAddresses = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/addresses`, {
        headers: authHeaders,
      });
      const data = await handleResponse(res);

      setAddresses(data || []);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to load addresses";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const saveAddress = async (
    payload: Omit<Address, "id" | "created_at" | "updated_at">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/addresses`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Address saved successfully");
      await getAddresses();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to save address";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async (
    id: string,
    payload: Omit<Address, "id" | "created_at" | "updated_at">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/addresses/${id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Address updated successfully");
      await getAddresses();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to update address";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const deleteAddress = async (id: string) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/addresses/${id}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      await handleResponse(res);

      setMessage("Address deleted successfully");
      await getAddresses();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to delete address";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Social Accounts ------------------
  const getSocialAccounts = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/social-accounts`, {
        headers: authHeaders,
      });
      const data = await handleResponse(res);

      setSocialAccounts(data || []);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to load social accounts";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const addSocialAccount = async (
    payload: Omit<SocialAccount, "is_connected">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/social-accounts`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({ ...payload, is_connected: true }),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Social account linked successfully");
      await getSocialAccounts();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to add social account";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const updateSocialAccount = async (
    platform: string,
    payload: Partial<SocialAccount>
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(
        `${baseUrl}/api/user/social-accounts/${platform}`,
        {
          method: "PUT",
          headers: authHeaders,
          body: JSON.stringify(payload),
        }
      );
      const data = await handleResponse(res);

      setMessage(data.message || "Social account updated successfully");
      await getSocialAccounts();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to update social account";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const deleteSocialAccount = async (platform: string) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(
        `${baseUrl}/api/user/social-accounts${platform}`,
        {
          method: "DELETE",
          headers: authHeaders,
        }
      );
      await handleResponse(res);

      setMessage("Social account deleted successfully");
      await getSocialAccounts();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to delete social account";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Payments ------------------
  const getPayments = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/payment-details`, {
        headers: authHeaders,
      });
      const data = await handleResponse(res);

      setPayments(data || []);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to load payments";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const savePayment = async (
    payload: Omit<Payment, "id" | "created_at" | "updated_at">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/payment-details`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Payment method added successfully");
      await getPayments();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to save payment";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const updatePayment = async (
    id: string,
    payload: Omit<Payment, "id" | "created_at" | "updated_at">
  ) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/payment-details/${id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const data = await handleResponse(res);

      setMessage(data.message || "Payment method updated successfully");
      await getPayments();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to update payment";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const deletePayment = async (id: string) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch(`${baseUrl}/api/user/payment-details/${id}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      await handleResponse(res);

      setMessage("Payment method deleted successfully");
      await getPayments();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to delete payment";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        preferences,
        addresses,
        socialAccounts,
        payments,
        loading,
        message,
        error,
        getPreferences,
        savePreference,
        updatePreference,
        deletePreference,
        getAddresses,
        saveAddress,
        updateAddress,
        deleteAddress,
        getSocialAccounts,
        addSocialAccount,
        updateSocialAccount,
        deleteSocialAccount,
        getPayments,
        savePayment,
        updatePayment,
        deletePayment,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = (): AccountContextType => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
};
