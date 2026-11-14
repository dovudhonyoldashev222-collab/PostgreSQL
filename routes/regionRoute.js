const express = require("express");
const controller = require("../controller/regionController");

const router = express.Router();

router.get("/", controller.getAllRegions);
router.post("/", controller.createRegion);
router.get("/:id", controller.getRegionById);
router.put("/:id", controller.updateRegion);
router.delete("/:id", controller.deleteRegion);

module.exports = router;
