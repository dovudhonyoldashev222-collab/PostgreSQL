const express = require("express");
const controller = require("../controller/langController");

const router = express.Router();

router.get("/", controller.getAllLangs);
router.post("/", controller.createLang);
router.get("/:id", controller.getLangById);
router.put("/:id", controller.updateLang);
router.delete("/:id", controller.deleteLang);

module.exports = router;
