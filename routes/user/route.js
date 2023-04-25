import express from "express"
import auth from "../../services/auth.js"
import controller from "./controller.js"

const route = express.Router()

route.get("/", auth, controller.showUser)
route.get("/:id", auth, controller.showUserById)
route.post("/", controller.addUser)
route.put("/:id", auth, controller.updateUser)
route.delete("/:id", auth, controller.deleteUser)

export default route