const express = require("express");
const controller = require("../controller/customerAddressController");

const router = express.Router();

router.get("/", controller.getAllCustomerAddresses);
router.post("/", controller.createCustomerAddress);
router.get("/:id", controller.getCustomerAddressById);
router.put("/:id", controller.updateCustomerAddress);
router.delete("/:id", controller.deleteCustomerAddress);

module.exports = router;
