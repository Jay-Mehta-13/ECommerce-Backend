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
            res.json({ response: true, status: res.statusCode, user: user, token: token })
        }
        else {
            res.json({ response: false, status: res.statusCode, error: "Invalid password" })
        }
    } catch (error) {
        res.json({ response: false, status: res.statusCode, error: "Invalid email-Id or password" })
    }
}



export default {
    authUser: authUser
}