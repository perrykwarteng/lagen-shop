"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import Link from "next/link";
import { useState } from "react";

export default function AccountDetailsPage() {
  const [formData, setFormData] = useState({
    email: "user@example.com",
    firstName: "Eugenia",
    lastName: "Massaquoi",
    gender: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated user details", formData);
  };

  const genderOptions = [
    { value: "", label: "Please Select" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ];

  return (
    <Layout>
      <AccountLayout>
        <h1>ACCOUNT DETAILS</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-semibold mb-4">YOUR DETAILS</h2>

            <h3 className="text-sm font-medium mb-3">LOGIN DETAILS</h3>
            <div className="mb-6">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-2"
              />
              <Link
                href="/change-password"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Change Password
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">PERSONAL DETAILS</h3>

            <div className="space-y-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                {genderOptions.map((value) => (
                  <option key={value.value} value={value.value}>
                    {value.value}
                  </option>
                ))}
              </select>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  DATE OF BIRTH
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleChange}
                    aria-label="Day"
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    name="birthMonth"
                    value={formData.birthMonth}
                    onChange={handleChange}
                    aria-label="Month"
                  >
                    <option value="">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month, index) => (
                      <option key={index + 1} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    aria-label="Year"
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  *You need to be 16 or over to have an account with us.
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-7 bg-black text-white shadow-lg"
          >
            UPDATE
          </button>

          <div>
            <h3 className="text-sm font-medium mb-4">YOUR DATA</h3>
            <button
              type="submit"
              className="w-full py-3 mt-7 bg-black text-white shadow-lg"
            >
              DOWNLOAD YOUR DATA
            </button>
            <button
              type="submit"
              className="w-full py-3 mt-7 border border-black text-black shadow-lg"
            >
              CLOSE ACCOUNT
            </button>
          </div>
        </form>
      </AccountLayout>
    </Layout>
  );
}
