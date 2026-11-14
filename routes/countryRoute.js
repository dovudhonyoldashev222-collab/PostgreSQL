const express = require("express");
const controller = require("../controller/countryController");

const router = express.Router();

router.get("/", controller.getAllCountries);
router.post("/", controller.createCountry);
router.get("/:id", controller.getCountryById);
router.put("/:id", controller.updateCountry);
router.delete("/:id", controller.deleteCountry);

module.exports = router;
