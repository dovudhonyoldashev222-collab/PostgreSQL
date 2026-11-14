const express = require("express");
const controller = require("../controller/flatController");

const router = express.Router();

router.get("/", controller.getAllFlats);
router.post("/", controller.createFlat);
router.get("/:id", controller.getFlatById);
router.put("/:id", controller.updateFlat);
router.delete("/:id", controller.deleteFlat);

module.exports = router;
