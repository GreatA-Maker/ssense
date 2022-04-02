const mongoose = require("mongoose");

//creating product schema

const productSchema = new mongoose.Schema(
	{
		productName: { type: String, required: true },
		color: { type: String, required: true },
		price: { type: Number, required: true },
		image: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("product", productSchema);
