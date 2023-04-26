import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
	},
	productPrice: {
		type: String,
		required: true,
	},
	productDescription: {
		type: String,
		required: true,
	},
	productRating: {
		type: Number,
		min: 0,
		max: 5,
		default: 3,
	},
	productImage: {
		type: String,
		default: "default.jpg",
	},
	productCategory: {
		type: String,
		enum: ["appliance", "grocery", "clothing"],
		required: true,
	},
});

const Product = mongoose.model("product", productSchema);
export default Product;
