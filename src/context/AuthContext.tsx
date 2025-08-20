"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  loading: boolean;
  message: string;
  error: string;
  isAuthenticated: boolean;
  requestPasswordReset: (email: string) => Promise<void>;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  register: (
    formData: RegisterPayload
  ) => Promise<{ success: boolean; message: string }>;
  verifyEmail: (token: string) => Promise<{ message: string }>;
  resetPassword: (
    token: string,
    newPassword: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAuthenticated(!!localStorage.getItem("token"));
    }
  }, []);

  const requestPasswordReset = async (email: string) => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch(`${baseUrl}/auth/password-reset/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Password reset link sent to your email.");
      } else {
        setError(data.message || "Failed to send reset link.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Login successful.");
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          setIsAuthenticated(true);
        }
        return { success: true, message: "Login successful." };
      } else {
        setError(data.detail || "Invalid email or password.");
        return {
          success: false,
          message: data.detail || "Invalid email or password.",
        };
      }
    } catch {
      setError("Something went wrong. Please try again.");
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData: RegisterPayload) => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Registration successful.");
        return {
          success: true,
          message: data.message || "Registration successful.",
        };
      } else {
        setError(data.message || "Failed to register.");
        return {
          success: false,
          message: data.message || "Failed to register.",
        };
      }
    } catch {
      setError("Something went wrong. Please try again.");
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch(`${baseUrl}/auth/verify-email?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message ? data.message : "Email verification failed");
        return {
          message: data.message ? data.message : "Email verification failed",
        };
      }

      setMessage(data.message ? data.message : "Email verified successfully");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      return {
        message: data.message ? data.message : "Email verified successfully",
      };
    } catch {
      setLoading(false);
      setError("Something went wrong. Try again later.");
      return { message: "Something went wrong. Try again later." };
    }
  };

  const resetPassword = async (
    token: string,
    new_password: string
  ): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${baseUrl}/auth/password-reset/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password }),
      });

      const data: { message?: string } = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message ?? "Failed to reset password",
        };
      }

      return {
        success: true,
        message: data.message ?? "Password reset successful",
      };
    } catch (err: unknown) {
      let message = "Failed to reset password";
      if (err instanceof Error) {
        message = err.message;
      }
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        message,
        error,
        isAuthenticated,
        requestPasswordReset,
        login,
        register,
        verifyEmail,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
