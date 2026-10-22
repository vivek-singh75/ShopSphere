const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const mongoose = require("mongoose");
const ProductModel = require("../Schemas/productModel");

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        const response = await fetch(
            "https://dummyjson.com/products?limit=100"
        );

        const data = await response.json();

        const products = data.products.map((product) => ({
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            reviews: product.reviews,
            brand: product.brand,
            stock: product.stock,
            availabilityStatus: product.availabilityStatus,
            thumbnail: product.thumbnail,
            images: product.images,
        }));

        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log(`${products.length} products inserted successfully`);

        await mongoose.connection.close();

    } catch (error) {
        console.error("Seeding failed:", error);
        process.exit(1);
    }
};

seedProducts();