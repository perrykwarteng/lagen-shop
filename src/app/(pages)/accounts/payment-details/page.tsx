"use client";

import { useEffect, useState } from "react";
import { X, Trash2, Pencil } from "lucide-react";
import Layout from "@/components/Layout/layout";
import { AccountLayout } from "@/components/Layout/account-layout";
import { useAccount } from "@/context/AccountProvider";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@/components/spinner/page";

export default function PaymentDetailsPage() {
  const {
    payments,
    getPayments,
    savePayment,
    updatePayment,
    deletePayment,
    loading,
  } = useAccount();

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getPayments().catch(() => {
      // toast.error("Failed to fetch payment methods.");
    });
  }, [getPayments]);

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 3) {
      return clean.slice(0, 2) + "/" + clean.slice(2);
    }
    return clean;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    const [month, year] = expiry.split("/");
    if (
      !month ||
      !year ||
      month.length !== 2 ||
      year.length !== 2 ||
      Number(month) < 1 ||
      Number(month) > 12
    ) {
      newErrors.expiry = "Expiry must be MM/YY with valid month";
    }

    if (cvv.length < 3 || cvv.length > 4) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newCard = {
      payment_type: "card",
      card_type: "Visa",
      last_four_digits: cardNumber.replace(/\s/g, "").slice(-4),
      expiry_month: expiry.split("/")[0],
      expiry_year: expiry.split("/")[1],
      is_default: isDefault,
    };

    try {
      if (editingId) {
        await updatePayment(editingId, newCard);
        // toast.success("Card updated successfully.");
      } else {
        await savePayment(newCard);
        // toast.success("Card added successfully.");
      }
      setShowModal(false);
      resetForm();
    } catch {
      // toast.error("Something went wrong while saving the card.");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setIsDefault(false);
    setErrors({});
  };

  const handleEditCard = (card: (typeof payments)[0]) => {
    setEditingId(card.id);
    setCardNumber("************" + card.last_four_digits); // masked
    setExpiry(`${card.expiry_month}/${card.expiry_year}`);
    setIsDefault(card.is_default);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePayment(id);
      toast.success("Card deleted successfully.");
    } catch {
      toast.error("Failed to delete card.");
    }
  };

  return (
    <Layout>
      <AccountLayout>
        <Toaster position="top-right" />
        <div className="bg-white border border-black rounded-[15px] p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              Payment Details
            </h1>
            <button
              className="px-4 bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg text-sm font-medium hover:opacity-80 transition"
              onClick={() => {
                resetForm();
                setShowModal(true);
              }}
            >
              + Add New Card
            </button>
          </div>

          {/* Loader */}
          {loading && (
            <div className="flex justify-center items-center py-6">
              <Spinner />
            </div>
          )}

          {!loading && (
            <div className="grid gap-3 mb-6">
              {payments.length > 0 ? (
                payments.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-gray-200 shadow-sm p-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium">{card.card_type}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        **** **** **** {card.last_four_digits}
                      </p>
                      <p className="text-xs text-gray-500">
                        Exp: {card.expiry_month}/{card.expiry_year}
                      </p>
                      {card.is_default && (
                        <p className="text-xs text-green-600 font-medium">
                          Default Card
                        </p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditCard(card)}
                        className="text-blue-600 hover:text-blue-400 transition"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(card.id)}
                        disabled={loading}
                        className="text-red-600 hover:text-red-400 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  No cards saved yet.
                </p>
              )}
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-5 w-full max-w-sm relative text-black dark:text-gray-100">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={18} />
              </button>
              <h2 className="text-lg font-semibold mb-4">
                {editingId ? "Update Card" : "Add New Card"}
              </h2>
              <form onSubmit={handleSaveCard} className="grid gap-3">
                {/* Card Number */}
                <div>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value))
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-black text-black dark:text-white focus:ring-1 focus:ring-blue-500 text-sm"
                    required
                  />
                  {errors.cardNumber && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      maxLength={5}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-black text-black dark:text-white focus:ring-1 focus:ring-blue-500 text-sm"
                      required
                    />
                    {errors.expiry && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.expiry}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="***"
                      value={cvv}
                      maxLength={4}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-black text-black dark:text-white focus:ring-1 focus:ring-blue-500 text-sm"
                      required
                    />
                    {errors.cvv && (
                      <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    checked={isDefault}
                    onChange={(e) => setIsDefault(e.target.checked)}
                  />
                  <span className="text-sm">Set as Default</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-3 bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg text-sm font-medium hover:opacity-80 transition flex items-center justify-center"
                >
                  {loading ? (
                    <Spinner />
                  ) : editingId ? (
                    "Update Card"
                  ) : (
                    "Save Card"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </AccountLayout>
    </Layout>
  );
}
