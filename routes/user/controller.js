import User from "../../models/User.js";
import md5 from "md5";

const showUser = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ response: true, users: users })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const showUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({ response: true, user: user })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const addUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body, password: md5(req.body.password) })
        res.status(200).json({ response: true, user: user })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({ response: true, user: user })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ response: true, user: user })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

export default {
    showUser: showUser,
    showUserById: showUserById,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}