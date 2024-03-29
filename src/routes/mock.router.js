import { Router } from "express";
import { generateProduct } from "../utils.js";

const router = Router();

router.get("/mockingproducts", (req, res) => {
  const mockProductsArray = [];

  for (let i = 0; i < 100; i++) {
    mockProductsArray.push(generateProduct());
  }

  res.status(200).json({ message: "OK", products: mockProductsArray });
});

export default router;