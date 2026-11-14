const express = require("express");
const controller = require("../controller/seatController");

const router = express.Router();

router.get("/", controller.getAllSeats);
router.post("/", controller.createSeat);
router.get("/:id", controller.getSeatById);
router.put("/:id", controller.updateSeat);
router.delete("/:id", controller.deleteSeat);

module.exports = router;
