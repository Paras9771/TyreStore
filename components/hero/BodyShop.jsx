import React from "react";

const BodyShop = () => {
  return (
    <div className="text-sm">

      <div className="bg-black text-white px-3 py-2 font-semibold rounded">
        Body Repair By Reg No.
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-3">

        <input
          type="text"
          placeholder="ENTER REG"
          className="flex-1 px-3 py-2 bg-yellow-300 outline-none rounded"
        />

        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>

      </div>

      <div className="bg-black text-white px-3 py-2 font-semibold mt-4 rounded">
        Search by Vehicle
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">

        <select className="border px-3 py-2 rounded">
          <option>Make</option>
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Model</option>
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Year</option>
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Engine</option>
        </select>

      </div>

      <button
        type="button"
        className="bg-black text-white w-full py-2 mt-4 rounded hover:bg-gray-800"
      >
        Search
      </button>

    </div>
  );
};

export default BodyShop;