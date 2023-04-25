import express from "express"
import auth from "../../services/auth.js"
import controller from "./controller.js"

const route = express.Router()

route.get("/", auth, controller.showProduct)
route.get("/:id", auth, controller.showProductById)
route.post("/", auth, controller.addProduct)
route.put("/:id", auth, controller.updateProduct)
route.delete("/:id", auth, controller.deleteProduct)

export default route