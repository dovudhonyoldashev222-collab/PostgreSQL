const express = require("express");
const controller = require("../controller/venueController");

const router = express.Router();

router.get("/", controller.getAllVenues);
router.post("/", controller.createVenue);
router.get("/:id", controller.getVenueById);
router.put("/:id", controller.updateVenue);
router.delete("/:id", controller.deleteVenue);

module.exports = router;
