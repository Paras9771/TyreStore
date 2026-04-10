"use client"
import Link from "next/link";
import { useState } from "react";

export default function LoginRegister() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const users = [
    { email: "admin@gmail.com", password: "1234" },
    { email: "paras@gmail.com", password: "1111" }
  ]

  const handleLogin = () => {

    const user = users.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      alert("Login Success")
    } else {
      alert("Invalid Login")
    }

  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      <div className="absolute inset-0 bg-[url('/images/backgroundImage/bgr.jpg')] bg-cover bg-center opacity-10 -z-10"></div>

      <div className="relative bg-white w-[420px] p-8 rounded-lg shadow-2xl">

        <h2 className="text-center text-3xl font-bold bg-blue-200 py-3 rounded-md mb-6">
          Login or Register
        </h2>

        <label className="font-semibold">
          Email Address / Phone <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          className="w-full mt-2 mb-4 p-2 border-2 border-black rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="font-semibold">
          Password <span className="text-red-500">*</span>
        </label>

        <input
          type="password"
          className="w-full mt-2 mb-4 p-2 border-2 border-blue-300 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded mb-3 font-semibold hover:bg-gray-800"
        >
          Login
        </button>

        <Link href="/clients/register">
          <button className="w-full bg-blue-900 text-white py-2 rounded mb-4 font-semibold hover:bg-blue-800">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}