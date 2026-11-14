const express = require("express");
const controller = require("../controller/eventTypeController");

const router = express.Router();

router.get("/", controller.getAllEventTypes);
router.post("/", controller.createEventType);
router.get("/:id", controller.getEventTypeById);
router.put("/:id", controller.updateEventType);
router.delete("/:id", controller.deleteEventType);

module.exports = router;
