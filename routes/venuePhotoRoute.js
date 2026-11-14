const express = require("express");
const controller = require("../controller/venuePhotoController");

const router = express.Router();

router.get("/", controller.getAllVenuePhotos);
router.post("/", controller.createVenuePhoto);
router.get("/:id", controller.getVenuePhotoById);
router.put("/:id", controller.updateVenuePhoto);
router.delete("/:id", controller.deleteVenuePhoto);

module.exports = router;
