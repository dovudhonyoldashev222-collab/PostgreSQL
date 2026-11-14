const express = require("express");
const controller = require("../controller/paymentMethodController");

const router = express.Router();

router.get("/", controller.getAllPaymentMethods);
router.post("/", controller.createPaymentMethod);
router.get("/:id", controller.getPaymentMethodById);
router.put("/:id", controller.updatePaymentMethod);
router.delete("/:id", controller.deletePaymentMethod);

module.exports = router;
