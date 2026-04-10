"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Results() {
    const [tyres, setTyres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart({
            ...item,
            id: item.id || item.product_id || Math.random(),
            quantity: 1,
            image: item.image || "/tyre.png",
        });

        setMessage("Added to cart successfully ✅");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    useEffect(() => {
        const fetchTyres = async () => {
            try {
                console.log("🚀 API CALL START");

                let formData = new FormData();
                formData.append("userid", "byp@ss#@01");
                formData.append("search_data", "225/50 R17 V");
                formData.append("order_type", "fullyfitted");
                formData.append("start", "0");
                formData.append("limit", "100000");

                let res = await fetch(
                    "https://mstrain.agngarages.co.uk/apici/getTyreFitting",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                console.log("📡 RESPONSE STATUS:", res.status);

                let result = await res.json();

                console.log("🔥 FULL API RESULT:", result);
                console.log("🔥 DATA FIELD:", result?.data);


                let list = [];

                if (Array.isArray(result?.data)) {
                    list = result.data;
                    console.log("✅ Direct Array Found");
                } else if (typeof result?.data === "object") {
                    list =
                        Object.values(result.data).find((item) =>
                            Array.isArray(item)
                        ) || [];
                    console.log("✅ Nested Array Found");
                }

                console.log("🎯 FINAL LIST:", list);

                setTyres(list);

            } catch (err) {
                console.log("❌ ERROR:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTyres();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4">

            <div className="bg-black text-white p-4 rounded-xl shadow mb-6">
                <h1 className="text-2xl font-bold">Tyre Results</h1>
                <p className="text-sm text-gray-300">Best tyres for your vehicle</p>
            </div>

            {message && (
                <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
                    {message}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-lg font-semibold animate-pulse">
                        Loading tyres...
                    </p>
                </div>
            ) : tyres.length > 0 ? (

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {tyres.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between"
                        >

                            <img
                                src={item.thumb}
                                alt="tyre"
                                className="w-full h-40 object-contain mb-3"
                            />

                            <div>
                                <h2 className="text-lg font-bold text-gray-800">
                                    {item.name || item.pattern || "Tyre"}
                                </h2>

                                <h2 className="text-lg font-bold text-gray-800">
                                    Tyre ID: {item.product_id}
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    {item.brand || item.manufacturer}
                                </p>

                                <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                    ⭐⭐⭐⭐☆
                                    <span className="text-gray-400 ml-2">(4.2)</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-xl font-bold text-green-600">
                                    £{item.price || item.retail_price}
                                </p>

                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

            ) : (
                <div className="text-center mt-10">
                    <p className="text-gray-500 text-lg">No tyres found 😕</p>
                </div>
            )}

        </div>
    );
}