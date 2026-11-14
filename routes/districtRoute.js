const express = require("express");
const controller = require("../controller/districtController");

const router = express.Router();

router.get("/", controller.getAllDistricts);
router.post("/", controller.createDistrict);
router.get("/:id", controller.getDistrictById);
router.put("/:id", controller.updateDistrict);
router.delete("/:id", controller.deleteDistrict);

module.exports = router;
