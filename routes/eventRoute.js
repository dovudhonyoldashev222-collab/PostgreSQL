const express = require("express");
const controller = require("../controller/eventController");

const router = express.Router();

router.get("/", controller.getAllEvents);
router.post("/", controller.createEvent);
router.get("/:id", controller.getEventById);
router.put("/:id", controller.updateEvent);
router.delete("/:id", controller.deleteEvent);

module.exports = router;
