const express = require("express");
const controller = require("../controller/discountController");

const router = express.Router();

router.get("/", controller.getAllDiscounts);
router.post("/", controller.createDiscount);
router.get("/:id", controller.getDiscountById);
router.put("/:id", controller.updateDiscount);
router.delete("/:id", controller.deleteDiscount);

module.exports = router;
