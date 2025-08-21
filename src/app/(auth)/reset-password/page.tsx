import { Suspense } from "react";
import ResetPassword from "../resetForm/resetForm";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="flex justify-center p-10">Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}