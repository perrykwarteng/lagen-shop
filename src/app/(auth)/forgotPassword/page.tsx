"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import MainLogo from "../../../../public/icons/main-logo.svg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { loading, requestPasswordReset } = useAuth();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      await requestPasswordReset(email);
      toast.success("Password reset link sent to your email");
      setEmail("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong, try again");
      }
    }
  };

  return (
    <section className="px-10 py-10 min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src={MainLogo}
            alt="Main Logo"
            className="w-[250px] md:w-[250px] lg:w-[300px] mb-7 md:mb-10"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-semibold text-[#4A4844] mb-2">
          Forgot Password
        </h1>
        <p className="text-[#949494] mb-6 text-center max-w-md">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <div className="w-full md:w-[500px] flex flex-col items-center justify-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">
                Email Address
              </label>
              <input
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-7 bg-black text-white shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <div className="spinner-white"></div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>

            <div className="text-[14px] mt-3 text-center">
              Remembered your password?{" "}
              <Link href="/login" className="font-medium">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
