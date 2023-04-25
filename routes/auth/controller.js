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
            res.status(200).json({ response: true, user: user, token: token })
        }
        else {
            res.status(400).json({ response: false, error: "Invalid password" })
        }
    } catch (error) {
        res.status(400).json({ response: false, error: "Invalid email-Id or password" })
    }
}



export default {
    authUser: authUser
}