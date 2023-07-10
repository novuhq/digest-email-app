import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config();

import digestEmailRoute from "./routes/sendEmailDigest.js"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/v1", digestEmailRoute);

app.listen(3000, function () {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.send('Project running!')
})