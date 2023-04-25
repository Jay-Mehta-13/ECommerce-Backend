import express from "express"
import controller from "./controller.js"

const route = express.Router()


route.post("/login", controller.authUser)
route.post("/token", controller.authToken)

export default route