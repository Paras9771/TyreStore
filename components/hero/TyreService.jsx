"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TyreService = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [tyres, setTyres] = useState([]); // (future use ke liye rehne de)

  useEffect(() => {
    fetch("https://mstrain.agngarages.co.uk/apici/getTyreFilterData")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {

    router.push("/results");
  };

  return (
    <div className="text-sm">

      <div className="bg-black text-white px-3 py-2 font-semibold rounded">
        Search Tyres by Reg. No.
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-3">

        <div className="flex border rounded overflow-hidden w-full">
          <div className="bg-blue-800 text-white px-3 flex items-center text-xs">
            GB
          </div>

          <input
            type="text"
            placeholder="VEHICLE REG. NO."
            className="bg-yellow-300 px-3 py-2 w-full outline-none font-medium"
          />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
        >
          Search
        </button>

      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="service" />
          Mail Order
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="service" defaultChecked />
          Fully Fitted
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="service" />
          Mobile Fitted
        </label>
      </div>

      <div className="bg-black text-white px-3 py-2 font-semibold mt-5 rounded">
        Search by Tyre Size
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">

        <select className="border px-3 py-2 rounded">
          <option>Select Width</option>
          {data.Width?.map((item, index) => (
            <option key={index} value={item.tyre_width}>
              {item.tyre_width}
            </option>
          ))}
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Select Profile</option>
          {data.Profile?.map((item, index) => (
            <option key={index} value={item.tyre_profile}>
              {item.tyre_profile}
            </option>
          ))}
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Select Size</option>
          {data.Size?.map((item, index) => (
            <option key={index} value={item.tyre_diameter}>
              {item.tyre_diameter}
            </option>
          ))}
        </select>

        <select className="border px-3 py-2 rounded">
          <option>Select Speed</option>
          {data.Speed?.map((item, index) => (
            <option key={index} value={item.tyre_speed}>
              {item.tyre_speed}
            </option>
          ))}
        </select>

      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="service2" />
          Mail Order
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="service2" defaultChecked />
          Fully Fitted
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="service2" />
          Mobile Fitted
        </label>
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="bg-black text-white w-full py-2 mt-5 rounded hover:bg-gray-800"
      >
        Search
      </button>

    </div>
  );
};

export default TyreService;