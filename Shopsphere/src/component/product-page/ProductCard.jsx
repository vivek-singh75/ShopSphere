import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

const LIMIT = 10;
const API_URL = "https://dummyjson.com/products";


// ======================================================
// PRODUCT CARD
// ======================================================

const ProductCardItem = ({ item }) => {

  const discountedPrice = (
    item.price -
    (item.price * item.discountPercentage) / 100
  ).toFixed(2);


  return (
    <Link
      to={`/product/${item.id}`}
      className="text-black no-underline block"
    >

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex flex-col bg-cyan-100 h-71 w-45 lg:h-81 lg:w-57 rounded overflow-hidden hover:shadow-lg hover:scale-[1.02] transition duration-200">

        {/* Image */}
        <div className="px-2 py-2 relative">

          <div className="absolute top-2 left-2 right-2 z-10 flex justify-between">

            <span className="h-4 w-15 bg-red-400 text-white flex justify-center items-center rounded text-[10px]">
              {Math.round(item.discountPercentage)}% OFF
            </span>

            <span className="text-xl">
              <CiHeart />
            </span>

          </div>

          <img
            src={item.thumbnail}
            alt={item.title}
            className="py-5 h-40 w-full object-contain rounded-xl bg-white"
          />

        </div>


        {/* Information */}
        <div className="px-2 flex-1">

          <div className="flex items-center gap-1 text-sm">

            <FaStar
              size={15}
              className="text-yellow-400"
            />

            <span>{item.rating}</span>

            <span className="text-gray-500">
              ({item.reviews?.length || 0})
            </span>

          </div>


          <h3 className="font-bold capitalize truncate">
            {item.category}
          </h3>


          <p className="text-sm truncate">
            {item.brand}
          </p>


          <div className="flex gap-2 items-center">

            <span className="font-bold">
              ₹{discountedPrice}
            </span>

            <span className="text-gray-500 text-sm line-through">
              ₹{item.price}
            </span>

          </div>

        </div>


        {/* Add To Cart */}
        <div className="px-2 pb-2">

          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="w-full flex items-center justify-center gap-2 text-blue-500 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <FaCartArrowDown />
            Add to Cart
          </button>

        </div>

      </div>


      {/* ================= MOBILE ================= */}

      <div className="md:hidden py-2">

        <div className="flex w-full min-h-[25vh] gap-2 bg-cyan-100 rounded-md overflow-hidden">

          {/* Image */}
          <div className="bg-white border-[10px] border-cyan-100 w-[35vw] shrink-0">

            <div className="flex justify-between items-center py-2">

              <span className="h-4 w-15 bg-red-400 text-white flex justify-center items-center rounded text-[10px]">
                {Math.round(item.discountPercentage)}% OFF
              </span>

              <span className="text-lg">
                <CiHeart />
              </span>

            </div>

            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-[15vh] w-full object-contain"
            />

          </div>


          {/* Information */}
          <div className="flex-1 py-3 pr-2 overflow-hidden">

            <div className="flex items-center gap-1 text-sm">

              <FaStar
                size={15}
                className="text-yellow-400"
              />

              <span>{item.rating}</span>

              <span className="text-gray-500">
                ({item.reviews?.length || 0})
              </span>

            </div>


            <h3 className="font-semibold capitalize truncate">
              {item.category}
            </h3>


            <p className="text-sm truncate">
              {item.brand}
            </p>


            <div className="flex gap-2 items-center">

              <span className="font-bold">
                ₹{discountedPrice}
              </span>

              <span className="text-gray-500 text-sm line-through">
                ₹{item.price}
              </span>

            </div>


            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="mt-2 flex items-center justify-center gap-1 text-blue-500 px-3 py-2 rounded border-2 border-blue-500 text-xs hover:bg-blue-500 hover:text-white transition"
            >
              <FaCartArrowDown />
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </Link>
  );
};


// ======================================================
// PRODUCT LIST
// ======================================================

const ProductCard = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  // Calculate skip from page
  const skip = (page - 1) * LIMIT;

  const totalPages = Math.ceil(total / LIMIT);


  // ====================================================
  // FETCH PRODUCTS
  // ====================================================

  const getProducts = async () => {

    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(
        `${API_URL}?limit=${LIMIT}&skip=${skip}`
      );

      setProducts(response.data.products);
      console.log(response.data.products)
      setTotal(response.data.total);

    } catch (error) {

      console.error(
        "Failed to fetch products:",
        error
      );

      setError(true);

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    getProducts();

  }, [skip]);


  // ====================================================
  // PAGINATION
  // ====================================================

  const nextPage = () => {

    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }

  };


  const previousPage = () => {

    if (page > 1) {
      setPage((prev) => prev - 1);
    }

  };


  // ====================================================
  // ERROR
  // ====================================================

  if (error) {

    return (
      <div className="flex flex-col justify-center items-center py-20">

        <h2 className="text-xl font-bold">
          Something went wrong
        </h2>

        <button
          onClick={getProducts}
          className="mt-4 bg-blue-950 text-white px-5 py-2 rounded"
        >
          Try Again
        </button>

      </div>
    );

  }


  return (

    <div>

      {/* ==================================================
          FILTER / SORT
      ================================================== */}

      <div className="flex justify-between items-center h-8 px-3 md:px-5">

        <div className="flex gap-5 md:gap-10 items-center">

          <button className="flex items-center h-7 w-25 bg-white rounded gap-3 px-2">

            <IoFilter size={15} />

            Filter

          </button>


          <h4 className="hidden md:block">
            {total} Products Found
          </h4>

        </div>


        <button className="h-7 w-35 bg-white rounded">
          Sort By:
        </button>

      </div>


      {/* ==================================================
          LOADING
      ================================================== */}

      {loading && (

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-3">

          {Array.from({ length: LIMIT }).map((_, index) => (

            <div
              key={index}
              className="bg-gray-200 rounded h-80 animate-pulse"
            />

          ))}

        </div>

      )}


      {/* ==================================================
          PRODUCTS
      ================================================== */}

      {!loading && (

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-3 p-3">

          {products.map((item) => (

            <ProductCardItem
              key={item.id}
              item={item}
            />

          ))}

        </div>

      )}


      {/* ==================================================
          PAGINATION
      ================================================== */}

      <div className="flex gap-4 justify-center items-center mt-5 mb-5">

        <button
          disabled={page === 1}
          onClick={previousPage}
          className="bg-blue-950 text-white rounded h-7 w-20 disabled:opacity-40 hover:bg-amber-700"
        >
          Previous
        </button>


        <h4>
          Page {page} of {totalPages}
        </h4>


        <button
          disabled={page === totalPages}
          onClick={nextPage}
          className="bg-blue-950 text-white rounded h-7 w-20 disabled:opacity-40 hover:bg-amber-700"
        >
          Next
        </button>

      </div>

    </div>

  );
};

export default ProductCard;