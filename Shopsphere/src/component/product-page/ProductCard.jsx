import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addToCart } from "../AddToCart";
import { allProducts } from "../../api/product.api";


// ======================================================
// CONSTANTS
// ======================================================

const LIMIT = 10;

const USD_TO_INR = 1;


// ======================================================
// PRODUCT CARD ITEM
// ======================================================

const ProductCardItem = ({ item }) => {

    // --------------------------------------------------
    // DISCOUNTED PRICE
    // --------------------------------------------------

    const discountedPrice = (
        item.priceINR -
        (item.priceINR * Number(item.discountPercentage || 0)) / 100
    ).toFixed(2);


    const product = item;

    const quantity = 1;


    // ====================================================
    // ADD TO CART
    // ====================================================

    const handleAddToCart = () => {

        addToCart(product, quantity);

        console.log(`${product.title} added in`);

        alert("Added to cart");

    };


    return (

        <Link
            to={`/product/${item._id}`}
            className="text-black no-underline block"
        >


            {/* ==================================================
                DESKTOP
            ================================================== */}

            <div className="hidden md:flex flex-col bg-cyan-100 h-71vh w-45vw lg:h-81vh lg:w-55vw rounded overflow-hidden hover:shadow-lg hover:scale-[1.02] transition duration-200">


                {/* ==================================================
                    IMAGE
                ================================================== */}

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
                        className="py-5 h-35 w-full object-contain rounded-xl bg-white"
                    />

                </div>


                {/* ==================================================
                    INFORMATION
                ================================================== */}

                <div className="px-2 flex-1">


                    {/* Rating */}

                    <div className="flex items-center gap-1 text-sm">

                        <FaStar
                            size={15}
                            className="text-yellow-400"
                        />

                        <span>
                            {item.rating}
                        </span>

                        <span className="text-gray-500">
                            ({item.reviews?.length || 0})
                        </span>

                    </div>


                    {/* Category */}

                    <h3 className="font-bold capitalize truncate">

                        {item.category}

                    </h3>


                    {/* Brand */}

                    <p className="text-sm truncate">

                        {item.brand}

                    </p>


                    {/* ==================================================
                        PRICE
                    ================================================== */}

                    <div className="flex gap-2 items-center">

                        <span className="font-bold">

                            ₹{discountedPrice}

                        </span>


                        <span className="text-gray-500 text-sm line-through">

                            ₹{Number(item.priceINR).toFixed(2)}

                        </span>

                    </div>

                </div>


                {/* ==================================================
                    ADD TO CART
                ================================================== */}

                <div className="px-2 pb-2">

                    <button
                        type="button"
                        onClick={(e) => {

                            e.preventDefault();

                            e.stopPropagation();

                            handleAddToCart();

                        }}
                        className="w-full flex items-center justify-center gap-2 text-blue-500 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition"
                    >

                        <FaCartArrowDown />

                        Add to Cart

                    </button>

                </div>


            </div>


            {/* ==================================================
                MOBILE
            ================================================== */}

            <div className="md:hidden py-2">


                <div className="flex w-full min-h-[25vh] gap-2 bg-cyan-100 rounded-md overflow-hidden">


                    {/* ==================================================
                        IMAGE
                    ================================================== */}

                    <div className="bg-white border-10px border-cyan-100 w-[35vw] shrink-0">

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


                    {/* ==================================================
                        INFORMATION
                    ================================================== */}

                    <div className="flex-1 py-3 pr-2 overflow-hidden">


                        {/* Rating */}

                        <div className="flex items-center gap-1 text-sm">

                            <FaStar
                                size={15}
                                className="text-yellow-400"
                            />

                            <span>
                                {item.rating}
                            </span>

                            <span className="text-gray-500">

                                ({item.reviews?.length || 0})

                            </span>

                        </div>


                        {/* Category */}

                        <h3 className="font-semibold capitalize truncate">

                            {item.category}

                        </h3>


                        {/* Brand */}

                        <p className="text-sm truncate">

                            {item.brand}

                        </p>


                        {/* Price */}

                        <div className="flex gap-2 items-center">

                            <span className="font-bold">

                                ₹{discountedPrice}

                            </span>


                            <span className="text-gray-500 text-sm line-through">

                                ₹{Number(item.priceINR).toFixed(2)}

                            </span>

                        </div>


                        {/* Add To Cart */}

                        <button
                            type="button"
                            onClick={(e) => {

                                e.preventDefault();

                                e.stopPropagation();

                                handleAddToCart();

                            }}
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

const ProductCard = ({ price }) => {


    const [products, setProducts] = useState([]);

    const [skip, setSkip] = useState(0);

    const [total, setTotal] = useState(0);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);


    // ====================================================
    // CURRENT PAGE
    // ====================================================

    const page = Math.floor(skip / LIMIT) + 1;


    // ====================================================
    // TOTAL PAGES
    // ====================================================

    const totalPages = Math.ceil(total / LIMIT);


    // ====================================================
    // FETCH PRODUCTS
    // ====================================================

    const getProducts = async () => {

        try {

            setLoading(true);

            setError(false);


            // --------------------------------------------
            // FETCH ONLY CURRENT PAGE
            // --------------------------------------------

            const response = await allProducts(
                LIMIT,
                skip,
                price
            );


            const dataOnPage =
                response.data.productData;


            // --------------------------------------------
            // SAVE PRODUCTS
            // --------------------------------------------

            setProducts(dataOnPage);


            // --------------------------------------------
            // SAVE TOTAL MATCHING PRODUCTS
            // --------------------------------------------

            setTotal(
                response.data.totalProducts
            );


            console.log(
                "Products on current page:",
                dataOnPage
            );


            console.log(
                "Total matching products:",
                response.data.totalProducts
            );


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


    // ====================================================
    // FETCH WHEN PAGE OR FILTER CHANGES
    // ====================================================

    useEffect(() => {

        getProducts();

    }, [skip, price]);


    // ====================================================
    // RESET PAGE WHEN PRICE FILTER CHANGES
    // ====================================================

    useEffect(() => {

        setSkip(0);

    }, [price]);


    // ====================================================
    // CONVERT PRICE
    // ====================================================

    const productsWithINR = products.map((item) => ({

        ...item,

        priceINR:
            Number(item.price) * USD_TO_INR

    }));


    // ====================================================
    // NEXT PAGE
    // ====================================================

    const nextPage = () => {

        if (page < totalPages) {

            setSkip((previousSkip) =>
                previousSkip + LIMIT
            );

        }

    };


    // ====================================================
    // PREVIOUS PAGE
    // ====================================================

    const previousPage = () => {

        if (skip >= LIMIT) {

            setSkip((previousSkip) =>
                previousSkip - LIMIT
            );

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


    // ====================================================
    // RETURN
    // ====================================================

    return (

        <div>


            {/* ==================================================
                FILTER / SORT
            ================================================== */}

            <div className="flex justify-between items-center h-8 px-3 md:px-5">


                <div className="flex gap-5 md:gap-10 items-center">


                    <button
                        className="flex items-center h-7 w-25 bg-white rounded gap-3 px-2"
                    >

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

                    {Array.from({ length: LIMIT }).map(
                        (_, index) => (

                            <div
                                key={index}
                                className="bg-gray-200 rounded h-80 animate-pulse"
                            />

                        )
                    )}

                </div>

            )}


            {/* ==================================================
                PRODUCTS
            ================================================== */}

            {!loading && (

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">


                    {productsWithINR.length > 0 ? (

                        productsWithINR.map((item) => (

                            <ProductCardItem
                                key={item._id}
                                item={item}
                            />

                        ))

                    ) : (

                        <div className="col-span-full flex justify-center items-center py-20">

                            <h2 className="text-xl font-semibold">

                                No products found in this price range.

                            </h2>

                        </div>

                    )}


                </div>

            )}


            {/* ==================================================
                PAGINATION
            ================================================== */}

            {!loading && totalPages > 0 && (

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

            )}


        </div>

    );

};


export default ProductCard;