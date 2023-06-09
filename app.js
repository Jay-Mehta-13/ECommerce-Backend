import express from "express"
import cors from "cors"
import logger from "morgan"
import dotenv from "dotenv"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import connectMongo from "./connector/connectMongo.js"
import indexRouter from "./routes/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config()

var app = express()

connectMongo()

app.use(cors())

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true })) 

app.use(logger('dev'))

app.use(express.json())

// var corsOptions = {
//     origin: ["http://www.example.com/","http://localhost:5173"],
//     optionsSuccessStatus: 200 // For legacy browser support
//     }
    
//     app.use(cors(corsOptions));

app.use("/", indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listeninig from port ${port}`)
})
