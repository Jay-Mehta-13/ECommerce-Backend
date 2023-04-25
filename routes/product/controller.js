import Product from "../../models/Product";
import md5 from "md5";

const showProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ response: true, products: products })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const showProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

export default {
    showProduct: showProduct,
    showProductById: showProductById,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}