const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
                minlength: 3
        },

        price: {
                type: Number,
                required: true,
                min: 1,
        },

        description: {
                type: String,
                required: true,
                min: 3
        }

}, { timestamps: true });

module.exports.Product = mongoose.model("Product", ProductSchema);