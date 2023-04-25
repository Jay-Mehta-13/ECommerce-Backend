import jwt from "jsonwebtoken";
import User from "../models/User.js"
import dotenv from "dotenv"

dotenv.config()

const auth = async (req, res, next) => {
    try {
        const decodedUser = jwt.verify(req.headers.authorization, process.env.JWT_SECRETKEY)
        const validUser = await User.findById(decodedUser.user._id)
        if (validUser) {
            next()
        }
        else (
            res.status(400).json({ response: false, error: "Invalid User" })
        )
    } catch (err) {
        res.status(400).json({ response: false, error: "Invalid authorization" })
    }
}

export default auth