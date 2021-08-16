/* eslint-disable no-unused-vars */
import express from "express";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import configRoutes from "./routes/index.js";

const server = express();

server.set("view engine", "ejs");
server.set("views", "views");

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(compression());

configRoutes(server);

server.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  throw error;
});

server.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

export default server;
