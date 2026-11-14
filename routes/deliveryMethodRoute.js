const express = require("express");
const controller = require("../controller/deliveryMethodController");

const router = express.Router();

router.get("/", controller.getAllDeliveryMethods);
router.post("/", controller.createDeliveryMethod);
router.get("/:id", controller.getDeliveryMethodById);
router.put("/:id", controller.updateDeliveryMethod);
router.delete("/:id", controller.deleteDeliveryMethod);

module.exports = router;
