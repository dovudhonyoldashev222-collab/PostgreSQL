const express = require("express");
const controller = require("../controller/humanCategoryController");

const router = express.Router();

router.get("/", controller.getAllHumanCategories);
router.post("/", controller.createHumanCategory);
router.get("/:id", controller.getHumanCategoryById);
router.put("/:id", controller.updateHumanCategory);
router.delete("/:id", controller.deleteHumanCategory);

module.exports = router;
