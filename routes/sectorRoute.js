const express = require("express");
const controller = require("../controller/sectorController");

const router = express.Router();

router.get("/", controller.getAllSectors);
router.post("/", controller.createSector);
router.get("/:id", controller.getSectorById);
router.put("/:id", controller.updateSector);
router.delete("/:id", controller.deleteSector);

module.exports = router;
