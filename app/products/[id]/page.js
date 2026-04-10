"use client";
import Image from "next/image";
import { useState, use } from "react";
import carinfoData from "@/data/carinfoData";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ params }) {

  const resolvedParams = use(params);

  const car = carinfoData.find(
    (c) => c.id === Number(resolvedParams.id)
  );

  if (!car) return <p className="p-5">Car not found</p>;

  return <CarUI car={car} />;
}

function CarUI({ car }) {

  const [mainImage, setMainImage] = useState(car.images[0]);

  // ✅ cart context use karo
  const { addToCart } = useCart();

  // ✅ correct function
  const handleAddToCart = (item) => {
    console.log("clicked", item);
    addToCart(item);
    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl p-6">

        {/* LEFT - Images */}
        <div>
          <Image
            src={mainImage}
            alt={car.name}
            width={500}
            height={300}
            quality={100}
            className="object-contain rounded-xl"
            loading="lazy"
          />

          <div className="flex gap-3 mt-4">
            {car.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 flex items-center justify-center bg-white p-1 rounded-lg cursor-pointer border-2 
            ${mainImage === img ? "border-blue-500" : "border-gray-200"}`}
              >
                <Image
                  src={img}
                  alt="car"
                  width={80}
                  height={80}
                  quality={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <p className="text-gray-500">{car.brand} • {car.category}</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500">⭐ {car.rating}</span>
              <span className="text-gray-500 text-sm">
                ({car.revies} reviews)
              </span>
            </div>

            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">
                ₹{car.price.toLocaleString()}
              </span>
              <span className="ml-3 text-gray-400 line-through">
                ₹{car.oldPrice.toLocaleString()}
              </span>
              <span className="ml-3 text-green-500 font-semibold">
                {car.discount}
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-green-600">
              {car.available}
            </p>

            <p className="mt-4 text-gray-600">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <p><b>Speed:</b> {car.speed}</p>
              <p><b>Mileage:</b> {car.mileage}</p>
              <p><b>Fuel:</b> {car.fuel}</p>
              <p><b>Engine:</b> {car.engine}</p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-2">Features</h2>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {car.features.map((feture, i) => (
                  <li key={i} className="bg-gray-100 px-3 py-1 rounded-lg">
                    ✔ {feture}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Buttons fixed */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => handleAddToCart(car)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Add to Cart 🛒
            </button>

            <button
              onClick={() => handleAddToCart(car)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              Buy Now ⚡
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}