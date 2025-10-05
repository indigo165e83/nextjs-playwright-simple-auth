"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="px-6 pt-6">
      <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
      <form onSubmit={onSubmit} className="p-6 space-y-5">
        <label>
          Email: 
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 space-y-5"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 space-y-5"
          />
        </label>
        <br />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}