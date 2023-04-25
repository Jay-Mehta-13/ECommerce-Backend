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
            res.json({ response: false, status: res.statusCode, error: "Invalid User" })
        )
    } catch (err) {
        res.json({ response: false, status: res.statusCode, error: "Invalid authorization" })
    }
}

export default auth