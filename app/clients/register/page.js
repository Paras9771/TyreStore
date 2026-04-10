"use client"

import React, { useState } from "react";

const Page = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (

    <div className="flex justify-center bg-gray-100 pt-6">

      <form className="bg-white shadow-lg rounded-xl p-8 w-[950px]">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 w-full border-2 border-black rounded-lg bg-blue-400 mt-2">
          Register Account
        </h1>

        <div className="grid grid-cols-4 gap-5 mb-6">

          <div className="flex flex-col">
            <label className="font-medium mb-1">First Name <span className="text-red-700">*</span></label>
            <input type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Last Name <span className="text-red-700">*</span></label>
            <input type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Company</label> 
            <input type="text"
              placeholder="Company"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">City</label>
            <input type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        <div className="grid grid-cols-4 gap-5 mb-6">

          <div className="flex flex-col">
            <label className="font-medium mb-1">Country</label>
            <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Country</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Email <span className="text-red-700">*</span></label>
            <input type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Phone <span className="text-red-700">*</span></label>
            <input type="tel"
              placeholder="Phone number"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Postcode</label>
            <input type="text"
              placeholder="Postcode"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        <div className="grid grid-cols-2 gap-5 mb-4">

          <div className="flex flex-col relative">
            <label className="font-medium mb-1">Password <span className="text-red-700">*</span></label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <div className="flex flex-col relative">
            <label className="font-medium mb-1">Repeat Password <span className="text-red-700">*</span></label>

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Repeat password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>

          </div>

        </div>

        {password !== confirmPassword && confirmPassword !== "" && (
          <p className="text-red-500 text-sm mb-4">
            Passwords do not match
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Create Account
        </button>

      </form>

    </div>
  );
};

export default Page;