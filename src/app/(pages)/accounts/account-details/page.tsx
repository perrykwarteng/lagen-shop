"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

const dummyUser = {
  id: "12345",
  first_name: "Eugenia",
  last_name: "Massaquoi",
  email: "user@example.com",
  created_at: "2023-09-15T12:34:56Z",
  avatar_url: "https://ui-avatars.com/api/?name=Eugenia+Massaquoi",
};

export default function AccountDetailsPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    email: "",
    current_password: "",
    new_password: "",
  });

  useEffect(() => {
    // Prefill form with dummy user data
    setFormData({
      email: dummyUser.email,
      firstName: dummyUser.first_name,
      lastName: dummyUser.last_name,
      gender: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
    });

    setPasswordData((prev) => ({ ...prev, email: dummyUser.email }));
  }, []);

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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password Change Payload", passwordData);
    setShowPasswordModal(false);
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
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <h1 className="text-2xl font-bold mb-8">Account Details</h1>
          <div className="flex items-center space-x-4 mb-10">
            <Image
              src={dummyUser.avatar_url}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <p className="font-semibold">
                {dummyUser.first_name} {dummyUser.last_name}
              </p>
              <p className="text-gray-600 text-sm">{dummyUser.email}</p>
              <p className="text-xs text-gray-400">
                Joined {new Date(dummyUser.created_at).toDateString()}
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-10 w-full text-sm text-gray-700"
          >
            <section>
              <h2 className="text-lg font-semibold mb-4">Login Details</h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(true)}
                  className="text-xs text-black hover:underline mt-2 inline-block"
                >
                  Change Password
                </button>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-black"
                  >
                    {genderOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Date of Birth
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      name="birthDay"
                      value={formData.birthDay}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-2"
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
                      className="border rounded-md px-2 py-2"
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
                      className="border rounded-md px-2 py-2"
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
                </div>
              </div>
            </section>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-md font-medium hover:opacity-80 transition"
            >
              Update Details
            </button>
          </form>
          <section className="mt-12 space-y-3 w-full">
            <h2 className="text-lg font-semibold mb-3">Your Data</h2>
            <button className="w-full py-3 bg-gray-100 border rounded-md hover:bg-gray-200 transition">
              Download Your Data
            </button>
            <button className="w-full py-3 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition">
              Close Account
            </button>
          </section>
        </div>

        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  value={passwordData.email}
                  readOnly
                  className="w-full border rounded-md px-3 py-2 bg-gray-100"
                />
                <input
                  type="password"
                  name="current_password"
                  placeholder="Current Password"
                  value={passwordData.current_password}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-md px-3 py-2"
                />
                <input
                  type="password"
                  name="new_password"
                  placeholder="New Password"
                  value={passwordData.new_password}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-md px-3 py-2"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowPasswordModal(false)}
                    className="px-4 py-2 border rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </AccountLayout>
    </Layout>
  );
}
