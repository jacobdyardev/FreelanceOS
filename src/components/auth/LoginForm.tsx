"use client";

// Login form for credentials-based authentication

import { useState } from "react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    // NextAuth handles CSRF/session flow through signIn
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password");
      return;
    }

    window.location.href = "/";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-sm"
    >
      <div>
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-1 text-sm text-gray-500">
          Sign in to your FreelanceOS account.
        </p>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Email</span>
        <input
          className="rounded-md border border-gray-300 px-3 py-2"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Password</span>
        <input
          className="rounded-md border border-gray-300 px-3 py-2"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 font-medium text-white"
      >
        Sign in
      </button>
    </form>
  );
}