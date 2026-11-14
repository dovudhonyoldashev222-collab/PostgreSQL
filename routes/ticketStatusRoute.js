const express = require("express");
const controller = require("../controller/ticketStatusController");

const router = express.Router();

router.get("/", controller.getAllTicketStatuses);
router.post("/", controller.createTicketStatus);
router.get("/:id", controller.getTicketStatusById);
router.put("/:id", controller.updateTicketStatus);
router.delete("/:id", controller.deleteTicketStatus);

module.exports = router;
