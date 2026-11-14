const express = require("express");
const controller = require("../controller/adminController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin CRUD
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admin]
 *     summary: Create Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Record created
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Duplicate value
 *       500:
 *         description: Server error
 */
router.post("/", controller.createAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     tags: [Admin]
 *     summary: List admins
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllAdmins);

/**
 * @swagger
 * /api/admins/search:
 *   get:
 *     tags: [Admin]
 *     summary: Search admins
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search term
 *     responses:
 *       200:
 *         description: Matching records returned
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/search", controller.searchAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Record returned
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Record updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Record not found
 *       409:
 *         description: Duplicate value
 *       500:
 *         description: Server error
 */
router.put("/:id", controller.updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Record deleted
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Record not found
 *       409:
 *         description: Record is referenced by another record
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteAdmin);

module.exports = router;
