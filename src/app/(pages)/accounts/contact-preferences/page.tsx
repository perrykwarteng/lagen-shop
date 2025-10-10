"use client";

import { AccountLayout } from "@/components/Layout/account-layout";
import Layout from "@/components/Layout/layout";
import Modal from "@/components/modal/Modal";
import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useAccount } from "@/context/AccountProvider";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@/components/spinner/page";

type Preference = {
  preference_id: string;
  preference_type: string;
  is_enabled: boolean;
};

export default function ContactPreferencesPage() {
  const {
    preferences,
    getPreferences,
    savePreference,
    updatePreference,
    deletePreference,
    loading,
    message,
    error,
  } = useAccount();

  const [isOpen, setIsOpen] = useState(false);
  const [editingPref, setEditingPref] = useState<Preference | null>(null);
  const [preferenceType, setPreferenceType] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  useEffect(() => {
    getPreferences();
  }, [getPreferences]);

  const handleAdd = () => {
    setEditingPref(null);
    setPreferenceType("");
    setIsEnabled(true);
    setIsOpen(true);
  };

  const handleEdit = (pref: Preference) => {
    setEditingPref(pref);
    setPreferenceType(pref.preference_type);
    setIsEnabled(pref.is_enabled);
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferenceType.trim()) {
      toast.error("Preference type is required!");
      return;
    }

    if (editingPref) {
      await updatePreference(editingPref.preference_id, {
        preference_type: preferenceType,
        is_enabled: isEnabled,
      });
    } else {
      await savePreference({
        preference_type: preferenceType,
        is_enabled: isEnabled,
      });
    }

    setIsOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this preference?")) return;
    await deletePreference(id);
  };

  return (
    <Layout>
      <AccountLayout>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-semibold">CONTACT PREFERENCES</h1>
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Add Contact
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Spinner />
              <p className="text-gray-500">Loading preferences...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {preferences?.length ? (
                preferences.map((pref: Preference) => (
                  <div
                    key={pref.preference_id}
                    className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={pref.is_enabled}
                        readOnly
                        className="h-4 w-4"
                      />
                      <span className="font-medium">
                        {pref.preference_type}
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEdit(pref)}
                        className="text-black hover:text-gray-900"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(pref.preference_id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No preferences found.</p>
              )}
            </div>
          )}
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold mb-2">
              {editingPref ? "Edit Preference" : "Add Preference"}
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preference Type
              </label>
              <input
                type="text"
                value={preferenceType}
                onChange={(e) => setPreferenceType(e.target.value)}
                placeholder="Enter preference type"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isEnabled}
                onChange={(e) => setIsEnabled(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">Is Enabled</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : editingPref
                ? "Update Preference"
                : "Save Preference"}
            </button>
          </form>
        </Modal>
      </AccountLayout>
    </Layout>
  );
}
