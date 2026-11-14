const express = require("express");
const controller = require("../controller/ticketTypeController");

const router = express.Router();

router.get("/", controller.getAllTicketTypes);
router.post("/", controller.createTicketType);
router.get("/:id", controller.getTicketTypeById);
router.put("/:id", controller.updateTicketType);
router.delete("/:id", controller.deleteTicketType);

module.exports = router;
