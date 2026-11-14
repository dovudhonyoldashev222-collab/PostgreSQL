const express = require("express");
const controller = require("../controller/customerCardController");

const router = express.Router();

router.get("/", controller.getAllCustomerCards);
router.post("/", controller.createCustomerCard);
router.get("/:id", controller.getCustomerCardById);
router.put("/:id", controller.updateCustomerCard);
router.delete("/:id", controller.deleteCustomerCard);

module.exports = router;
