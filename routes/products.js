const express = require("express");
const { getProducts, getProduct, createProduct, deleteProduct, updateProduct, getCategory } = require("../controllers/productController.js");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/category/:fCategory", getCategory);
module.exports = router;
