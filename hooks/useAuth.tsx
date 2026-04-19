"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Login failed");
        return null;
      }

      localStorage.setItem("token", data.token);

      toast.success("Welcome back 👋");

      return data;

    } catch (err) {
      toast.error("Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Register failed");
        return null;
      }

      toast.success("Account created 🎉");

      return data;

    } catch (err) {
      toast.error("Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading };
};
