
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, logout } from "../../lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function checkLogin() {
      try {
        const user = await getCurrentUser();

        if (!active) return;

        if (!user?.authenticated) {
          router.replace("/login");
          return;
        }

        setUsername(user.user.username);
      } catch {
        if (active) {
          setError("Unable to connect to the authentication server.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    checkLogin();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      router.replace("/login");
    } catch {
      setError("Logout failed. Please try again.");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f0]">
        <p className="text-lg text-[#123b32]">Checking your login...</p>
      </main>
    );
  }

  if (error && !username) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f0] px-4">
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <p className="text-red-700">{error}</p>
          <button
            onClick={() => router.replace("/login")}
            className="mt-4 rounded-lg bg-[#123b32] px-5 py-3 text-white hover:bg-[#1b5145]"
          >
            Return to Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f0] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-[#123b32]">
              Sakshama
            </h1>
            <p className="mt-1 text-gray-600">Kottayam District</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-[#123b32] px-5 py-2 font-medium text-[#123b32] transition hover:bg-[#123b32] hover:text-white"
          >
            Log Out
          </button>
        </header>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a65308]">
            Dashboard
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#123b32]">
            Welcome, {username}!
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            You have successfully logged in to the Sakshama dashboard.
          </p>

          {error && (
            <p role="alert" className="mt-4 text-red-700">
              {error}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
