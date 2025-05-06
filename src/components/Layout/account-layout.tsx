"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeliveryProcess } from "../DeliveryProcess/page";

interface SidebarItemProps {
  href: string;
  label: string;
}

const SidebarItem = ({ href, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-3 px-5 border-l-2 font-medium text-sm transition-colors ${
        isActive
          ? "border-l-black text-black font-semibold"
          : "border-l-transparent text-gray-600 hover:border-l-gray-300 hover:text-gray-900"
      }`}
    >
      {label}
    </Link>
  );
};

const navigationItems = [
  { href: "/accounts", label: "MY ACCOUNT" },
  { href: "#", label: "DASHBOARD" },
  { href: "/accounts/orders", label: "ORDER HISTORY" },
  { href: "/accounts/account-details", label: "ACCOUNT DETAILS" },
  { href: "/accounts/wishlist", label: "WISHLIST" },
  { href: "/accounts/change-password", label: "CHANGE PASSWORD" },
  { href: "/accounts/contact-preferences", label: "CONTACT PREFERENCES" },
  { href: "/accounts/addresses", label: "ADDRESSES" },
  { href: "/accounts/payment-details", label: "PAYMENT DETAILS" },
  { href: "/accounts/social-accounts", label: "SOCIAL ACCOUNTS" },
];

export function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Sidebar navigation */}
        <aside className="w-full md:w-64 border-r border-gray-200 bg-white">
          <nav className="py-5 flex flex-col h-full">
            {navigationItems.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1">
          <header className="flex justify-end p-4 h-[200px] border-b border-gray-200 bg-[url('/icons/dashboard-bg.png')] bg-cover">
            <Link
              href="/logout"
              className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
            >
              LOGOUT
            </Link>
          </header>
          <div className="p-6">{children}</div>
        </main>
      </div>
      <div className=" ">
        <DeliveryProcess />
      </div>
    </>
  );
}
