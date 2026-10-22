const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        discountPercentage: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },

        reviews: [
            {
                rating: {
                    type: Number,
                    min: 1,
                    max: 5,
                },

                comment: String,

                date: Date,

                reviewerName: String,

                reviewerEmail: String,
            },
        ],

        brand: {
            type: String,
            default: "generic",
            trim: true,
        },

        stock: {
            type: Number,
            required: true,
            min: 0,
        },

        availabilityStatus: {
            type: String,
            default: "In Stock",
        },

        thumbnail: {
            type: String,
            required: true,
        },

        images: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel