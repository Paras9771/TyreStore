"use client";

import React from 'react';
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const {cart, decreaseQty, increaseQty, subtotal,  gst, dilivery,  total, totalitems
  } = useCart();

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

{/* ---------------------------------------------------- LEFT: CART ITEMS ------------------------------------ */}

          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg"
              >

                <div className="flex items-center gap-4 w-full sm:w-auto">

                  <img
                    src={item.thumb || "/tyre.png"}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-green-600 font-bold">
                      £{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">

                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      -
                    </button>

                    <span className="px-4">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>


          <div className="w-full border rounded-lg p-5 shadow-md bg-gray-100 h-fit">

            <h2 className="text-xl font-semibold mb-4">
              Bill Details ({totalitems} items)
            </h2>

            <div className="mb-4 space-y-1">
              {cart.map((items) => (
                <div key={items.id} className="flex justify-between text-sm">
                  <span>
                    {items.name} x {items.quantity}
                  </span>
                  <span>
                    £{(items.price * items.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-3" />
            
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>£{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>GST (18%)</span>
              <span>₹{gst.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>
                {dilivery === 0 ? "Free" : `£${dilivery.toLocaleString()}`}
              </span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>£{total.toLocaleString()}</span>
            </div>

            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition">
              Proceed to Payment
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default CartPage;