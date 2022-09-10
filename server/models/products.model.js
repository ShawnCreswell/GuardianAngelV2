const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: [3, "Title must be 3 characters long"]
		},
		price: {
			type: Number,
			required: true,
			minlength: [3, "Price must be 3  characters long"]
		},
		description: {
			type: String,
			required: true,
			minlength: [5, "Description must be 5  characters long"]
		}
},
	{ timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;