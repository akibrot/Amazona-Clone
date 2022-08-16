import express from "express";
import { checking, sendproduct,seeds,fromdb } from "../controllers/controllers.js";
const routes = express.Router();
routes.get("/checking", checking);
routes.get("/api/products", sendproduct);
routes.get("/seed",seeds)
routes.get("/from",fromdb)
export default routes;
