const router = require("express").Router();
const Controller = require("../controllers/productController");

router.get("/", Controller.allProduct);
router.post("/", Controller.addProduct);
router.get("/:id", Controller.productById);

module.exports = router;
