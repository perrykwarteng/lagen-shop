"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { useState } from "react";

interface Address {
  id: string;
  isDefault: boolean;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      isDefault: true,
      line1: "390",
      line2: "Keilor Rd",
      city: "Niddrie",
      state: "VIC",
      postalCode: "3042",
      country: "AU",
    },
  ]);

  const handleAddAddress = () => {
    console.log("Add new address");
  };

  const handleMakeDefault = (id: string) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <Layout>
      <AccountLayout>
        <h1> ADDRESSES</h1>

        <div>
          <div className="flex flex-col items-center justify-center py-8">
            <button onClick={handleAddAddress} className="w-full">
              ADD ADDRESS
            </button>
          </div>
        </div>

        {addresses.map((address) => (
          <div key={address.id} className="mt-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium">
                {address.isDefault && "DEFAULT ADDRESS"}
              </h3>
              <button className="text-sm">Edit</button>
            </div>

            <address className="text-sm not-italic mb-4">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.city}
              <br />
              {address.state} {address.postalCode}
              <br />
              {address.country}
            </address>

            <div className="flex gap-2">
              {!address.isDefault && (
                <button onClick={() => handleMakeDefault(address.id)}>
                  MAKE DEFAULT
                </button>
              )}
              <button onClick={() => handleDelete(address.id)}>DELETE</button>
            </div>
          </div>
        ))}
      </AccountLayout>
    </Layout>
  );
}
