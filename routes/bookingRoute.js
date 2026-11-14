const express = require("express");
const controller = require("../controller/bookingController");

const router = express.Router();

router.get("/", controller.getAllBookings);
router.post("/", controller.createBooking);
router.get("/:id", controller.getBookingById);
router.put("/:id", controller.updateBooking);
router.delete("/:id", controller.deleteBooking);

module.exports = router;
