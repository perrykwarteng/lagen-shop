"use client";

import { AuthProvider } from "@/context/AuthContext";
import { AccountProvider } from "@/context/AccountProvider";
import { Toaster } from "react-hot-toast";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AccountProvider>
        <main className="min-h-screen">{children}</main>
        <Toaster position="top-right" />
      </AccountProvider>
    </AuthProvider>
  );
}
