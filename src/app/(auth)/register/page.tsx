"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../../public/icons/main-logo.svg";
import GoogleImage from "../../../../public/icons/google.svg";
import {
  FaUserPen,
  FaClipboardList,
  FaRegCreditCard,
  FaPaperPlane,
  FaListCheck,
} from "react-icons/fa6";

export default function Register() {
  const { register, loading } = useAuth();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: "male",
    newsletter_subscription: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!form.last_name.trim()) newErrors.last_ame = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (Object.keys(errorMsg).length > 0) {
      setErrors(errorMsg);
      toast.error("Please fix the highlighted errors");
      return;
    }

    const result = await register(form);

    if (result.success) {
      toast.success(result.message);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        date_of_birth: "",
        gender: "",
        newsletter_subscription: false,
      });
    } else {
      toast.error(result.message);
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
        <div className="w-full md:w-[650px] border-b-2 border-black">
          <div className="w-full mt-4 px-10 md:px-32 pb-4 flex items-center justify-between list-none">
            <li className="text-[18px] text-[#4A4844]  hover:text-gray-700 cursor-pointer">
              <Link href="/login">LOGIN</Link>
            </li>
            <li className="text-[18px] text-[#4A4844]  hover:text-gray-700 cursor-pointer">
              <Link href="/register">REGISTER</Link>
            </li>
          </div>
        </div>
        <div className="my-10 flex justify-center items-center text-[#4A4844] rounded-md shadow-lg gap-3 w-full md:w-[400px] cursor-pointer">
          <Image src={GoogleImage} alt=""></Image>
          <p>Sign Up with google</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-[500px] flex items-center gap-2">
          <div className="w-full h-0.5 bg-[#E6E6E6]"></div>
          <div className="text-[#C4C4C4]">or</div>
          <div className="w-full h-0.5 bg-[#E6E6E6]"></div>
        </div>
        <p className="mt-4 text-[#949494]">
          Enter your credentials to register an account
        </p>
        <div className="w-full md:w-[500px] flex flex-col items-center justify-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <div className="my-3 w-full">
                <label className="text-[16px] text-[#4A4844]">
                  First name*
                </label>
                <input
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                  placeholder="Enter your first name"
                  type="text"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm">{errors.first_name}</p>
                )}
              </div>
              <div className="my-3 w-full">
                <label className="text-[16px] text-[#4A4844]">Last name*</label>
                <input
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                  placeholder="Enter your last name"
                  type="text"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">E-mail*</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                placeholder="Enter your email address"
                type="text"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">Password*</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                placeholder="Enter your password"
                type="password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">Birthday</label>
              <input
                name="date_of_birth"
                value={form.date_of_birth}
                onChange={handleChange}
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                type="date"
              />
            </div>

            <div className="my-3">
              <label htmlFor="gender" className="text-[16px] text-[#4A4844]">
                Gender
              </label>
              <div className="">
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-1 mt-2">
              <input
                type="checkbox"
                id="subscrip"
                name="newsletter_subscription"
                checked={form.newsletter_subscription}
                onChange={handleChange}
              />
              <label htmlFor="subscrip" className="text-[#4A4844]">
                Subscribe to receive email updates about La’Gen products
                launches, promotions and exclusion discount.
              </label>
            </div>

            <div className="text-[14px] text-[#4A4844] mt-6">
              By submitting this form, you accept the
              <Link href="/register" className="font-medium underline">
                Terms & Conditions
              </Link>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-7 bg-black text-white shadow-lg flex items-center justify-center"
              >
                {loading ? <div className="spinner-white"></div> : "REGISTER"}
              </button>
            </div>
            <div className="text-[14px] mt-4">
              Already a member?
              <Link href="/login" className="font-medium">
                Sign in
              </Link>
            </div>
          </form>
          <div className="mt-6">
            <h3 className="text-[25px] font-medium  mb-5">
              Creating an account <br /> enables you to:
            </h3>

            <div className="flex items-center gap-4 my-2.5">
              <FaUserPen />
              <p className="text-sm text-[#343434]">
                Enrol in our loyalty system
              </p>
            </div>
            <div className="flex items-center gap-4 my-2.5">
              <FaPaperPlane className="text-[25px]" />
              <p className="text-sm text-[#343434]">
                Receive the newsletter and obtain access to the latest news,
                release information and unique discount codes before anyone else
              </p>
            </div>
            <div className="flex items-center gap-4 my-2.5">
              <FaClipboardList />
              <p className="text-sm text-[#343434]">
                Be able to view your full order history and order tracking
                details.
              </p>
            </div>
            <div className="flex items-center gap-4 my-2.5">
              <FaRegCreditCard />
              <p className="text-sm text-[#343434]">
                Save your payment details, to make checking out quicker and
                easier.
              </p>
            </div>
            <div className="flex items-center gap-4 my-2.5">
              <FaListCheck />
              <p className="text-sm text-[#343434]">
                Add products to your wishlist for viewing or purchasing at a
                later date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
