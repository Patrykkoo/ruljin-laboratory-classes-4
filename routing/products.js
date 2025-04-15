const express = require("express");
const router = express.Router();

const {
  getProductsView,
  getAddProductView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct,
} = require("../controllers/productsController");

router.get("/", getProductsView);
router.get("/add", getAddProductView);
router.post("/add", addNewProduct);
router.get("/new", getNewProductView);
router.get("/:name", getProductView);
router.delete("/:name", deleteProduct);

module.exports = router;
