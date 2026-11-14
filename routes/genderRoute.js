const express = require("express");
const controller = require("../controller/genderController");

const router = express.Router();

router.get("/", controller.getAllGenders);
router.post("/", controller.createGender);
router.get("/:id", controller.getGenderById);
router.put("/:id", controller.updateGender);
router.delete("/:id", controller.deleteGender);

module.exports = router;
