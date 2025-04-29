import Image from "next/image";
import Link from "next/link";
import GoogleImage from "../../../../public/icons/google.svg";
import MainLogo from "../../../../public/icons/main-logo.svg";

export default function Login() {
  return (
    <section className="px-10 py-10 min-h-screen overflow-hidden">
      <div className=" flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src={MainLogo}
            alt="Main Logo"
            className="w-[250px] md:w-[250px] lg:w-[300px] mb-7 md:mb-10"
          />
        </Link>
        <div className="w-full md:w-[650px] border-b-2 border-black">
          <div className="w-full mt-4 px-10 md:px-32 pb-4 flex items-center justify-between list-none">
            <li className=" text-[18px] text-[#4A4844]  hover:text-gray-700 cursor-pointer">
              <Link href="/login">LOGIN</Link>
            </li>
            <li className="text-[18px] text-[#4A4844]  hover:text-gray-700 cursor-pointer">
              <Link href="/register">REGISTER</Link>
            </li>
          </div>
        </div>

        <div className="my-10 flex justify-center items-center text-[#4A4844] rounded-md shadow-lg gap-3 w-full md:w-[400px] cursor-pointer">
          <Image src={GoogleImage} alt=""></Image>
          <p>Log in with google</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-[500px] flex items-center gap-2">
          <div className="w-full h-0.5 bg-[#E6E6E6]"></div>
          <div className="text-[#C4C4C4]">or</div>
          <div className="w-full h-0.5 bg-[#E6E6E6]"></div>
        </div>
        <p className="mt-4 text-[#949494]">
          Enter your credentials to access your account
        </p>
        <div className="w-full md:w-[500px] flex flex-col items-center justify-center">
          <form className="w-full">
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">
                Email Address
              </label>
              <input
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <div className="my-3">
              <label className="text-[16px] text-[#4A4844]">Password</label>
              <input
                className="w-full py-2.5 px-2.5 border-2 border-[#00000086] rounded-md"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="" id="keepSignedIn" />
                <label className="text-sm" htmlFor="keepSignedIn">
                  Keep me signed in
                </label>
              </div>
              <div className="">
                <Link className="text-sm" href="">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 mt-7 bg-black text-white shadow-lg"
              >
                Sign In
              </button>
            </div>
            <div className="text-[14px] mt-3">
              Not a member?
              <Link href="/register" className="font-medium">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
