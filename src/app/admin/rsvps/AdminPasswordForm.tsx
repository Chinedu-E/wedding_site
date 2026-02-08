"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function AdminPasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Invalid password");
        setLoading(false);
        return;
      }
      window.location.reload();
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-[#DDBEA9]/60 shadow-lg p-8">
        <h1 className="font-serif text-xl text-[#6B705C] mb-2">Admin</h1>
        <p className="text-sm text-slate-500 mb-6">Enter the password to view RSVPs.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="sr-only">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B705C]/50"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6B705C] text-white hover:bg-[#545843] rounded-lg py-3"
          >
            {loading ? "Checking…" : "Continue"}
          </Button>
        </form>
      </div>
    </div>
  );
}
