import { Suspense } from "react";
import VerifyEmailClient from "../verifyForm/verifyForm";

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={<div className="flex justify-center p-10">Loading...</div>}
    >
      <VerifyEmailClient />
    </Suspense>
  );
}
