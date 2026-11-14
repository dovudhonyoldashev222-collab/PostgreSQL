const express = require("express");
const controller = require("../controller/cartController");

const router = express.Router();

router.get("/", controller.getAllCarts);
router.post("/", controller.createCart);
router.get("/:id", controller.getCartById);
router.put("/:id", controller.updateCart);
router.delete("/:id", controller.deleteCart);

module.exports = router;
