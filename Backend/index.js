import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(`mongodb+srv://akibrot:1210xyzx@cluster0.fn3wl.mongodb.net/ecommerse?retryWrites=true&w=majority`);
const app = express();
app.use(cors());
app.listen("8080", () => {
  console.log("app satrted");
});

app.use("/", routes);
