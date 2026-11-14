const express = require("express");
const controller = require("../controller/seatTypeController");

const router = express.Router();

router.get("/", controller.getAllSeatTypes);
router.post("/", controller.createSeatType);
router.get("/:id", controller.getSeatTypeById);
router.put("/:id", controller.updateSeatType);
router.delete("/:id", controller.deleteSeatType);

module.exports = router;
