"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { SetStateAction, useState } from "react";

export default function ChangePasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setError("");

    // Validate password length
    if (password.length < 6) {
      setError("Password has to be at least 6 characters.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Submit form (in a real app, this would call an API)
    console.log("Password updated successfully");
    // Reset form
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Layout>
      <AccountLayout>
        <h1>CHANGE PASSWORD </h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
                className="pr-12"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={togglePasswordVisibility}
              ></button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Password has to be at least 6 characters.
            </p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-12"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={toggleConfirmPasswordVisibility}
              ></button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-50 text-red-500 text-sm">
              {error}
            </div>
          )}

          <button type="submit">UPDATE</button>
        </form>
      </AccountLayout>
    </Layout>
  );
}
