import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaStar,
  FaCartArrowDown,
  FaBolt,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import LoadingAnim from "../LoadingAnim";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        setProduct(response.data);
        setMainImage(response.data.thumbnail);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  LoadingAnim
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-8 lg:px-16">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center gap-2 text-sm">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <span>/</span>

        <Link to="/products" className="text-blue-600 hover:underline">
          Products
        </Link>

        <span>/</span>

        <span className="text-gray-500 truncate">
          {product.title}
        </span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-4 md:p-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= IMAGE SECTION ================= */}
          <div className="flex flex-col-reverse md:flex-row gap-4">

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">

              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`min-w-20 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                    mainImage === image
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}

            </div>

            {/* Main Image */}
            <div className="flex-1 h-[350px] md:h-[450px] bg-gray-50 rounded-xl flex items-center justify-center relative">

              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {Math.round(product.discountPercentage)}% OFF
              </span>

              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-contain p-6"
              />

            </div>
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div>

            {/* Stock */}
            <p className="text-green-600 font-semibold text-sm mb-2">
              {product.stock > 0 ? "● In Stock" : "● Out of Stock"}
            </p>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Brand */}
            <p className="text-gray-500 mt-2">
              By <span className="font-semibold">{product.brand}</span>
            </p>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3 mt-4">

              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded">
                <FaStar size={13} />
                <span>{product.rating}</span>
              </div>

              <span className="text-gray-500">
                ({product.reviews?.length || 0} Reviews)
              </span>

            </div>

            <hr className="my-5" />

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">

              <h2 className="text-3xl font-bold text-gray-900">
                ₹{discountedPrice}
              </h2>

              <p className="text-gray-400 line-through">
                ₹{product.price}
              </p>

              <p className="text-green-600 font-bold">
                {Math.round(product.discountPercentage)}% OFF
              </p>

            </div>

            <p className="text-sm text-gray-500 mt-2">
              Inclusive of all taxes
            </p>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">
                Product Description
              </h3>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>
            </div>

            {/* Size */}
            <div className="mt-6">

              <h3 className="font-semibold mb-3">
                Size:
              </h3>

              <div className="flex gap-3">
{/* wee have to hide this for foods related product */}
                if
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-10 rounded border font-medium ${
                      selectedSize === size
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* Quantity */}
            <div className="mt-6">

              <h3 className="font-semibold mb-3">
                Quantity
              </h3>

              <div className="flex items-center border border-gray-300 rounded-lg w-fit">

                <button
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  -
                </button>

                <span className="px-5 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(product.stock, prev + 1)
                    )
                  }
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-7">

              <button className="flex-1 flex justify-center items-center gap-2 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                <FaCartArrowDown />
                Add to Cart
              </button>

              <button className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                <FaBolt />
                Buy Now
              </button>

            </div>

          </div>
        </div>

        {/* ================= BENEFITS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t mt-10 pt-8">

          <div className="flex items-center gap-4">
            <FaTruck className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-500">
                On orders over ₹499
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaShieldAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-500">
                100% secure payment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaTruck className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-gray-500">
                7 days easy returns
              </p>
            </div>
          </div>

        </div>

        {/* ================= PRODUCT DETAILS ================= */}

        <div className="border-t mt-10 pt-8">

          <h2 className="text-2xl font-bold mb-6">
            Product Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>SKU:</strong> {product.sku || "N/A"}
            </p>

            <p>
              <strong>Weight:</strong> {product.weight || "N/A"}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p>
              <strong>Warranty:</strong>{" "}
              {product.warrantyInformation || "N/A"}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Product;