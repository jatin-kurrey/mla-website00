"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // credentials come from env exposed to client (NEXT_PUBLIC_*)
    if (user === process.env.NEXT_PUBLIC_ADMIN_USER && pass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Username" className="w-full p-2 border rounded" />
          <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button className="w-full py-2 bg-[#000080] text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
