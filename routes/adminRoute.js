const express = require("express");
const controller = require("../controller/adminController");

const router = express.Router();

router.get("/", controller.getAllAdmins);
router.post("/", controller.createAdmin);
router.get("/:id", controller.getAdminById);
router.put("/:id", controller.updateAdmin);
router.delete("/:id", controller.deleteAdmin);

module.exports = router;
