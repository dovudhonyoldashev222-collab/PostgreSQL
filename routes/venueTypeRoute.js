const express = require("express");
const controller = require("../controller/venueTypeController");

const router = express.Router();

router.get("/", controller.getAllVenueTypes);
router.post("/", controller.createVenueType);
router.get("/:id", controller.getVenueTypeById);
router.put("/:id", controller.updateVenueType);
router.delete("/:id", controller.deleteVenueType);

module.exports = router;
