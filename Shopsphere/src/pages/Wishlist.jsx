import React from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaTrash,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Temporary data for UI
  // Later replace this with your Wishlist Context
  const wishlist = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "Beauty",
      price: 9.99,
      oldPrice: 12.99,
      discountPercentage: 23,
      rating: 4.5,
      reviews: 120,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      category: "Beauty",
      price: 19.99,
      oldPrice: 25.99,
      discountPercentage: 23,
      rating: 4.2,
      reviews: 89,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
    {
      id: 3,
      title: "Powder Canister",
      category: "Beauty",
      price: 14.99,
      oldPrice: 18.99,
      discountPercentage: 21,
      rating: 4.4,
      reviews: 75,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    },
    {
      id: 4,
      title: "Red Nail Polish",
      category: "Beauty",
      price: 8.99,
      oldPrice: 11.99,
      discountPercentage: 25,
      rating: 4.6,
      reviews: 150,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    },
  ];

  const removeFromWishlist = (id) => {
    console.log("Remove:", id);
  };

  const addToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <div className="min-h-screen bg-[#dbeafe] px-3 sm:px-5 lg:px-8 py-6">

      {/* ================= HEADER ================= */}
      <div className="max-w-[1500px] mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm sm:text-base mb-3">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <span className="mx-2">-</span>

          <span className="text-blue-600">
            Wishlist
          </span>
        </div>


        {/* Wishlist Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              My Wishlist
            </h1>

            <p className="text-gray-700 mt-1">
              Save your favorite products for later
            </p>
          </div>


          {/* Wishlist count */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm w-fit">
            <FaHeart className="text-red-500" />

            <span className="font-semibold">
              {wishlist.length} Items
            </span>
          </div>

        </div>


        {/* ================= EMPTY WISHLIST ================= */}

        {wishlist.length === 0 ? (

          <div className="bg-white rounded-xl shadow-sm py-16 px-5 text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <FaRegHeart className="text-4xl text-blue-500" />
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-600 mt-2">
              Save your favorite products and find them here later.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>

          </div>

        ) : (

          <>
            {/* ================= DESKTOP TOOLBAR ================= */}

            <div className="hidden sm:flex bg-white rounded-lg px-5 py-3 mb-5 items-center justify-between shadow-sm">

              <p className="font-semibold text-gray-700">
                {wishlist.length} Products in your wishlist
              </p>

              <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                Sort By: Recently Added
              </button>

            </div>


            {/* ================= PRODUCT GRID ================= */}

        <div className="max-w-[1450px] mx-auto">

        {/* ================= DESKTOP / TABLET ================= */}

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">

            {wishlist.map((product) => (

            <div
                key={product.id}
                className="bg-[#c9f7fa] rounded-lg p-2 shadow-sm hover:shadow-md transition"
            >

                {/* Image */}
                <div className="relative">

                {/* Discount */}
                <span className="absolute top-2 left-2 z-10 bg-[#ff5b67] text-white text-[11px] font-semibold px-2 py-1 rounded">
                    {Math.round(product.discountPercentage)}% OFF
                </span>

                {/* Wishlist */}
                <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition"
                >
                    <FaHeart className="text-red-500 text-sm" />
                </button>

                <Link to={`/product/${product.id}`}>
                    <div className="bg-white rounded-lg h-[150px] flex items-center justify-center overflow-hidden">

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain p-3 hover:scale-105 transition duration-300"
                    />

                    </div>
                </Link>

                </div>


                {/* Product Info */}
                <div className="px-1 pt-2">

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm mb-1">

                    <FaStar className="text-yellow-400 text-xs" />

                    <span className="font-medium">
                    {product.rating}
                    </span>

                    <span className="text-gray-500 text-xs">
                    ({product.reviews})
                    </span>

                </div>


                {/* Product Name */}
                <h2 className="font-bold text-base truncate">
                    {product.title}
                </h2>


                {/* Category */}
                <p className="text-gray-600 text-xs mb-1">
                    {product.category}
                </p>


                {/* Price */}
                <div className="flex items-center gap-2 mb-2">

                    <span className="font-bold text-lg">
                    ₹{(product.price * 83).toFixed(2)}
                    </span>

                    <span className="text-gray-500 line-through text-xs">
                    ₹{(product.oldPrice * 83).toFixed(2)}
                    </span>

                </div>


                {/* Buttons */}
                <div className="flex gap-2">

                    <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="flex-1 bg-white border border-gray-400 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-1 hover:bg-gray-100 transition"
                    >
                    <FaTrash className="text-xs" />
                    Remove
                    </button>


                    <button
                    onClick={() => addToCart(product)}
                    className="flex-1 border border-blue-500 text-blue-500 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-1 hover:bg-blue-500 hover:text-white transition"
                    >
                    <FaShoppingCart className="text-xs" />
                    Cart
                    </button>

                </div>

                </div>

            </div>

            ))}

        </div>


        {/* ================= MOBILE ================= */}

        <div className="sm:hidden flex flex-col gap-3">

            {wishlist.map((product) => (

            <div
                key={product.id}
                className="bg-[#c9f7fa] rounded-lg p-2.5 shadow-sm"
            >

                <div className="flex gap-3">

                {/* Product Image */}

                <div className="relative w-[115px] h-[115px] shrink-0">

                    {/* Discount */}
                    <span className="absolute top-1 left-1 z-10 bg-[#ff5b67] text-white text-[9px] font-semibold px-1.5 py-1 rounded">
                    {Math.round(product.discountPercentage)}% OFF
                    </span>


                    <Link to={`/product/${product.id}`}>

                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">

                        <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain p-2"
                        />

                    </div>

                    </Link>

                </div>


                {/* Product Information */}

                <div className="flex-1 min-w-0">

                    {/* Top row */}

                    <div className="flex justify-between gap-2">

                    <h2 className="font-bold text-sm leading-tight line-clamp-2">
                        {product.title}
                    </h2>

                    <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="shrink-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                        <FaHeart className="text-red-500 text-sm" />
                    </button>

                    </div>


                    {/* Category */}

                    <p className="text-gray-600 text-xs mt-1">
                    {product.category}
                    </p>


                    {/* Rating */}

                    <div className="flex items-center gap-1 mt-1">

                    <FaStar className="text-yellow-400 text-xs" />

                    <span className="text-xs font-medium">
                        {product.rating}
                    </span>

                    <span className="text-gray-500 text-[11px]">
                        ({product.reviews})
                    </span>

                    </div>


                    {/* Price */}

                    <div className="flex items-center gap-2 mt-1">

                    <span className="font-bold text-base">
                        ₹{(product.price * 83).toFixed(2)}
                    </span>

                    <span className="text-gray-500 line-through text-[10px]">
                        ₹{(product.oldPrice * 83).toFixed(2)}
                    </span>

                    </div>


                    {/* Buttons */}

                    <div className="flex gap-2 mt-2">

                    <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="flex-1 bg-white border border-gray-400 rounded-md py-1.5 text-xs font-medium flex items-center justify-center gap-1"
                    >
                        <FaTrash className="text-[10px]" />
                        Remove
                    </button>


                    <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-blue-500 text-white rounded-md py-1.5 text-xs font-medium flex items-center justify-center gap-1"
                    >
                        <FaShoppingCart className="text-[10px]" />
                        Add Cart
                    </button>

                    </div>

                </div>

                </div>

            </div>

            ))}

        </div>

        </div>
          </>

        )}

      </div>

    </div>
  );
};

export default Wishlist;