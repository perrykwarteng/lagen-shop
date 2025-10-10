"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import { useEffect, useState } from "react";
import { useAccount } from "@/context/AccountProvider";
import Modal from "@/components/modal/Modal";
import toast from "react-hot-toast";
import { Address } from "@/context/AccountProvider"; // ✅ Import Address type from context

interface AddressForm {
  address_type: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
}

export default function AddressesPage() {
  const {
    addresses,
    loading,
    error,
    message,
    getAddresses,
    saveAddress,
    updateAddress,
    deleteAddress,
  } = useAccount();

  const [isOpen, setIsOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null); // ✅ replaced any with Address | null
  const [formData, setFormData] = useState<AddressForm>({
    address_type: "",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    is_default: false,
  });

  useEffect(() => {
    getAddresses();
  }, [getAddresses]); // ✅ added dependency for proper lint

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  const handleOpenAdd = () => {
    setEditingAddress(null);
    setFormData({
      address_type: "",
      street_address: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      is_default: false,
    });
    setIsOpen(true);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      address_type: address.address_type,
      street_address: address.street_address,
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
      is_default: address.is_default,
    });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      await updateAddress(editingAddress.id, formData);
    } else {
      await saveAddress(formData);
    }
    setIsOpen(false);
    getAddresses();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;
    await deleteAddress(id);
    getAddresses();
  };

  const handleMakeDefault = async (id: string) => {
    const address = addresses.find((a) => a.id === id);
    if (!address) return;
    await updateAddress(id, { ...address, is_default: true });
    getAddresses();
  };

  return (
    <Layout>
      <AccountLayout>
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">ADDRESSES</h1>
            <button
              onClick={handleOpenAdd}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              ADD ADDRESS
            </button>
          </div>

          {loading && (
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="animate-pulse border p-4 rounded-md shadow-sm bg-gray-100"
                >
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          )}

          {!loading && addresses.length > 0
            ? addresses.map((address) => (
                <div
                  key={address.id}
                  className="mt-4 border p-4 rounded-md shadow-sm bg-white"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">
                      {address.is_default ? "DEFAULT ADDRESS" : "ADDRESS"}
                    </h3>
                    <button
                      onClick={() => handleEdit(address)}
                      className="text-sm text-blue-600"
                    >
                      Edit
                    </button>
                  </div>
                  <address className="text-sm not-italic mb-4">
                    {address.street_address}
                    <br />
                    {address.city}
                    <br />
                    {address.state} {address.postal_code}
                    <br />
                    {address.country}
                  </address>
                  <div className="flex gap-2">
                    {!address.is_default && (
                      <button
                        onClick={() => handleMakeDefault(address.id)}
                        className="text-blue-600"
                      >
                        MAKE DEFAULT
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(address.id)}
                      className="text-red-600"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              ))
            : !loading && (
                <p className="text-gray-500 mt-4">No addresses found.</p>
              )}
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold mb-2">
              {editingAddress ? "Edit Address" : "Add Address"}
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={formData.street_address}
                onChange={(e) =>
                  setFormData({ ...formData, street_address: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter street address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter state"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  value={formData.postal_code}
                  onChange={(e) =>
                    setFormData({ ...formData, postal_code: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter postal code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter country"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.is_default}
                onChange={(e) =>
                  setFormData({ ...formData, is_default: e.target.checked })
                }
                className="h-4 w-4"
              />
              <label className="ml-2 text-sm">Set as default</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : editingAddress
                ? "Update Address"
                : "Save Address"}
            </button>
          </form>
        </Modal>
      </AccountLayout>
    </Layout>
  );
}
