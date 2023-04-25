import User from "../../models/User.js";
import jwt from "jsonwebtoken"
import md5 from "md5";
import dotenv from "dotenv"

dotenv.config()

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user.password == md5(password)) {
            const token = jwt.sign({ user: user }, process.env.JWT_SECRETKEY, { expiresIn: '2h' })
            return res.status(200).json({ response: true, user: user, token: token })
        }
        res.status(400).json({ response: false, error: "Invalid password" })
    } catch (error) {
        res.status(400).json({ response: false, error: "Invalid email-Id or password" })
    }
}

const authToken = async (req, res) => {
    try {
        const data = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRETKEY)
        const verifiedUser = await User.findById(data.user._id)
        if (verifiedUser) {
            return res.status(200).json({ response: true, user: verifiedUser })
        }
        res.status(400).json({ response: false, error: "Invalid Token" })

    } catch (error) {
        res.status(400).json({ response: false, error: "Invalid Token" })
    }
}



export default {
    authUser: authUser,
    authToken: authToken
}