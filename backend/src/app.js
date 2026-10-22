const express = require("express");

const app = express();
const cors  =require("cors")
app.use(express.json())

const allowedOrigins = [
    "http://localhost:5173",
    "https://vivek-singh75.github.io"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));



const productRouter = require("./Routes/product.route")

app.use("/api" , productRouter)


module.exports = app