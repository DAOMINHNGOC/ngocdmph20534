import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRouter from "./routes/products.js";
import AuthorRouter from "./routes/author.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(ProductRouter);
app.use(AuthorRouter);

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server is runnnign on port http://localhost:${process.env.PORT}`
//   );
// });

mongoose
  .connect("mongodb://localhost:27017/products")
  .then(() => console.log("DB is conntected"))
  .catch(() => console.log("failed connect"));

export const viteNodeApp = app;
