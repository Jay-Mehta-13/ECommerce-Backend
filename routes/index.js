import express from "express"
import userRouter from './user/index.js'
import authRoute from "./auth/index.js"
import productRouter from "./product/index.js"

const route = express.Router()

route.use("/auth", authRoute)
route.use("/user", userRouter)
route.use("/product", productRouter)

export default route