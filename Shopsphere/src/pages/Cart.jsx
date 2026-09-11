import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // ================= CART STATE =================
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ================= SAVE CART =================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ================= INCREASE QUANTITY =================
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          // Agar stock available hai to stock tak allow karo
          const newQuantity = item.stock
            ? Math.min(item.quantity + 1, item.stock)
            : item.quantity + 1;

          return {
            ...item,
            quantity: newQuantity,
          };
        }

        return item;
      })
    );
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= REMOVE ITEM =================
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // ================= SUBTOTAL =================
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ================= DISCOUNT =================
  const discount = cart.reduce((total, item) => {
    const itemDiscount =
      (item.price * item.discountPercentage) / 100;

    return total + itemDiscount * item.quantity;
  }, 0);

  // ================= DELIVERY =================
  const delivery = subtotal >= 499 ? 0 : 49;

  // ================= FINAL TOTAL =================
  const total = subtotal - discount + delivery;

  // ================= EMPTY CART =================
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-4">
        <div className="text-6xl mb-5">🛒</div>

        <h1 className="text-2xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-2 text-center">
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link
          to="/Products"
          className="mt-6 bg-blue-950 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ================= RETURN =================
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        {/* ================= HEADING ================= */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            My Cart
          </h1>

          <p className="text-gray-500 mt-2">
            {cart.length} Items in your cart
          </p>
        </div>

        {/* ================================================= */}
        {/* ================= DESKTOP ======================== */}
        {/* ================================================= */}

        <div className="hidden lg:grid grid-cols-3 gap-6">

          {/* ================= PRODUCT LIST ================= */}
          <div className="col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b font-semibold text-gray-600">
              <div className="col-span-2">
                Product
              </div>

              <div>
                Price
              </div>

              <div>
                Quantity
              </div>

              <div>
                Total
              </div>
            </div>

            {/* Products */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 items-center px-6 py-5 border-b"
              >

                {/* Product */}
                <div className="col-span-2 flex items-center gap-4">

                  <img
                    src={item.image || item.thumbnail}
                    alt={item.name || item.title}
                    className="w-20 h-20 object-contain bg-gray-50 rounded-lg"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.name || item.title}
                    </h3>

                    <p className="text-sm text-green-600 mt-1">
                      In Stock
                    </p>
                  </div>

                </div>

                {/* Price */}
                <p className="font-semibold">
                  ₹{item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center border rounded-lg w-fit">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="px-3 font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                {/* Total + Delete */}
                <div className="flex items-center justify-between gap-3">

                  <p className="font-bold">
                    ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑
                  </button>

                </div>

              </div>
            ))}
          </div>

          {/* ================= DESKTOP ORDER SUMMARY ================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">

            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              {/* Delivery */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Delivery
                </span>

                <span
                  className={`font-semibold ${
                    delivery === 0
                      ? "text-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery.toFixed(2)}`}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Discount
                </span>

                <span className="text-red-500 font-semibold">
                  -₹{discount.toFixed(2)}
                </span>
              </div>

            </div>

            <hr className="my-5" />

            {/* Total */}
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                ₹{total.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Inclusive of all taxes
            </p>

            {/* Checkout */}
            <button
              className="w-full bg-blue-950 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-blue-800 transition"
            >
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <Link
              to="/Products"
              className="block w-full text-center text-blue-600 font-semibold mt-4"
            >
              Continue Shopping
            </Link>

          </div>
        </div>

        {/* ================================================= */}
        {/* ================= MOBILE ========================= */}
        {/* ================================================= */}

        <div className="lg:hidden">

          {/* Products */}
          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4"
              >

                <div className="flex gap-4">

                  {/* Image */}
                  <img
                    src={item.image || item.thumbnail}
                    alt={item.name || item.title}
                    className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                  />

                  {/* Details */}
                  <div className="flex-1">

                    <div className="flex justify-between gap-2">

                      <h3 className="font-semibold text-sm">
                        {item.name || item.title}
                      </h3>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        🗑
                      </button>

                    </div>

                    <p className="text-green-600 text-xs mt-1">
                      In Stock
                    </p>

                    <p className="font-bold text-lg mt-2">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg w-fit mt-3">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1"
                      >
                        −
                      </button>

                      <span className="px-3">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* ================= MOBILE SUMMARY ================= */}
          <div className="bg-white rounded-xl shadow-sm p-5 mt-5">

            <h2 className="text-xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">

              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              {/* Delivery */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Delivery
                </span>

                <span
                  className={`font-semibold ${
                    delivery === 0
                      ? "text-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery.toFixed(2)}`}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Discount
                </span>

                <span className="text-red-500 font-semibold">
                  -₹{discount.toFixed(2)}
                </span>
              </div>

            </div>

            <hr className="my-5" />

            {/* Total */}
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                ₹{total.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button
              className="w-full bg-blue-950 text-white py-3 rounded-lg mt-6 font-semibold"
            >
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <Link
              to="/Products"
              className="block w-full text-center text-blue-600 font-semibold mt-4"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Cart;