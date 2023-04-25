import express from "express"
import controller from "./controller.js"

const route = express.Router()


route.post("/", controller.authUser)

export default route