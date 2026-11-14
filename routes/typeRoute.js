const express = require("express");
const controller = require("../controller/typeController");

const router = express.Router();

router.get("/", controller.getAllTypes);
router.post("/", controller.createType);
router.get("/:id", controller.getTypeById);
router.put("/:id", controller.updateType);
router.delete("/:id", controller.deleteType);

module.exports = router;
