const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);
router.get("/edit/:id", ProductController.editProduct);
router.post("/edit", ProductController.editProductPost);
router.post("/remove", ProductController.removeProduct);
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.showProducts);

module.exports = router;
