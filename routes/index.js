import express from "express"
import userRouter from './user/index.js'
import authRoute from "./auth/index.js"

const route = express.Router()

route.use("/auth", authRoute)
route.use("/user", userRouter)

export default route