"use client";

import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import MainLogo from "../../../../public/icons/main-logo.svg";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPassword() {
  const { resetPassword, loading } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const validate = () => {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!token) {
      toast.error("Invalid or missing reset token");
      return;
    }

    const res = await resetPassword(token, password);
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
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

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="w-full mt-4 px-10 md:px-32 flex items-center justify-center list-none">
          <li className="text-[25px] text-[#4A4844] font-semibold cursor-default">
            RESET PASSWORD
          </li>
        </div>
        <p className=" text-[#949494] mb-4">Enter your new password below</p>

        <div className="w-full md:w-[500px] flex flex-col items-center justify-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">New Password</label>
              <input
                className={`w-full py-2.5 px-2.5 border-2 rounded-md ${
                  errors.password ? "border-red-500" : "border-[#00000086]"
                }`}
                placeholder="New Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">
                Confirm Password
              </label>
              <input
                className={`w-full py-2.5 px-2.5 border-2 rounded-md ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-[#00000086]"
                }`}
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-7 bg-black text-white shadow-lg flex justify-center"
              >
                {loading ? (
                  <div className="spinner-white"></div>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>

            <div className="text-[14px] mt-3">
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
