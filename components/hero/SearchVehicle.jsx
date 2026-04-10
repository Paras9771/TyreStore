"use client";

import React, { useState } from "react";
import BodyShop from "./BodyShop";
import TyreService from "./TyreService";
import MotService from "./MotService";

const SearchService = () => {

  const [activeTab, setActiveTab] = useState("mot");

  return (
    <div className="w-full bg-white overflow-hidden border-2 border-blue-500/70 rounded-md shadow-[0_0_6px_rgba(59,130,246,0.4)]">

      <div className="flex text-white text-sm font-semibold">

        <button
          type="button"
          onClick={() => setActiveTab("mot")}
          className={`flex-1 py-3 ${
            activeTab === "mot" ? "bg-blue-700" : "bg-blue-900"
          }`}
        >
          MOT & Car
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tyre")}
          className={`flex-1 py-3 ${
            activeTab === "tyre" ? "bg-blue-700" : "bg-blue-900"
          }`}
        >
          Tyre
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("body")}
          className={`flex-1 py-3 ${
            activeTab === "body" ? "bg-blue-700" : "bg-blue-900"
          }`}
        >
          Body Shop
        </button>

      </div>

      <div className="p-5 min-h-[350px]">

        {activeTab === "mot" && <MotService />}
        {activeTab === "tyre" && <TyreService />}
        {activeTab === "body" && <BodyShop />}

      </div>

    </div>
  );
};

export default SearchService;