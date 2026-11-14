const express = require("express");
const controller = require("../controller/ticketController");

const router = express.Router();

router.get("/", controller.getAllTickets);
router.post("/", controller.createTicket);
router.get("/:id", controller.getTicketById);
router.put("/:id", controller.updateTicket);
router.delete("/:id", controller.deleteTicket);

module.exports = router;
