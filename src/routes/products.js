import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
} from "../controllers/products.js";

const router = express();

router.get("/products", getAll);
router.get("/products/:id", get);
router.put("/products/:id", update);
router.delete("/products/:id", remove);
router.post("/products", create);
export default router;
