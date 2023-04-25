import express from "express"
import cors from "cors"
import logger from "morgan"
import dotenv from "dotenv"
import connectMongo from "./connector/connectMongo.js"
import indexRouter from "./routes/index.js"

dotenv.config()

var app = express()

connectMongo()

app.use(logger('dev'))

app.use(express.json())

app.use(cors())

app.use("/", indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listeninig from port ${port}`)
})
