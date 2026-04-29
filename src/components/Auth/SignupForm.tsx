"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";

export default function SignupForm() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (data.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);

      // Auto-redirect after short delay
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1500);
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-lg bg-green-light-7 px-6 py-8 text-center dark:bg-green-dark/10">
        <div className="mb-3 text-4xl">✓</div>
        <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
          Account Created!
        </h3>
        <p className="text-dark-5 dark:text-dark-6">
          Redirecting you to the dashboard...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 rounded-lg bg-red-light-5 px-4 py-3 text-sm text-red-dark dark:bg-red-dark/10 dark:text-red-light-2">
          {error}
        </div>
      )}

      <InputGroup
        type="email"
        label="Email"
        className="mb-4 [&_input]:py-[15px]"
        placeholder="Enter your email"
        name="email"
        handleChange={handleChange}
        value={data.email}
        icon={<EmailIcon />}
      />

      <InputGroup
        type="password"
        label="Password"
        className="mb-4 [&_input]:py-[15px]"
        placeholder="Create a password"
        name="password"
        handleChange={handleChange}
        value={data.password}
        icon={<PasswordIcon />}
      />

      <InputGroup
        type="password"
        label="Confirm Password"
        className="mb-5 [&_input]:py-[15px]"
        placeholder="Confirm your password"
        name="confirmPassword"
        handleChange={handleChange}
        value={data.confirmPassword}
        icon={<PasswordIcon />}
      />

      <div className="mb-4.5">
        <button
          type="submit"
          disabled={loading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          Create Account
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
          )}
        </button>
      </div>
    </form>
  );
}
