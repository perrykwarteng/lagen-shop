"use client";

import { useAuth } from "@/context/AuthContext";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailClient() {
  const { verifyEmail, loading, error, message } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasVerified = useRef(false);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token && !hasVerified.current) {
      hasVerified.current = true;

      const verify = async () => {
        const res = await verifyEmail(token);
        if (res.message && !error) {
          toast.success(res.message || "Email verified successfully");
        } else if (error) {
          toast.error(error || "Email verification failed. Try again.");
        }
      };

      verify();
    }
  }, [searchParams, verifyEmail, error, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Email Verification</h1>

        {loading && (
          <>
            <p className="text-gray-700 mb-6">
              Verifying your email, please wait...
            </p>
            <div className="spinner-black mx-auto"></div>
          </>
        )}

        {!loading && message && !error && (
          <>
            <p className="text-green-600 font-semibold mb-4">{message}</p>
            <p className="text-gray-500">Redirecting you to login...</p>
          </>
        )}

        {!loading && error && (
          <>
            <p className="text-red-500 font-semibold mb-4">{error}</p>
            <button
              onClick={() => router.push("/resend-verification")}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Resend Verification Email
            </button>
          </>
        )}
      </div>
    </div>
  );
}
