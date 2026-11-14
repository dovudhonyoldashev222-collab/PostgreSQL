const express = require("express");
const controller = require("../controller/cartItemController");

const router = express.Router();

router.get("/", controller.getAllCartItems);
router.post("/", controller.createCartItem);
router.get("/:id", controller.getCartItemById);
router.put("/:id", controller.updateCartItem);
router.delete("/:id", controller.deleteCartItem);

module.exports = router;
