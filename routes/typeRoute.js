const express = require("express");
const controller = require("../controller/typeController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Type
 *   description: Type CRUD
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Type]
 *     summary: Create Type
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
router.post("/", controller.createType);

/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Type]
 *     summary: List types
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTypes);

/**
 * @swagger
 * /api/types/search:
 *   get:
 *     tags: [Type]
 *     summary: Search types
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
router.get("/search", controller.searchTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Type]
 *     summary: Get Type by ID
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
router.get("/:id", controller.getTypeById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Type]
 *     summary: Update Type
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
router.put("/:id", controller.updateType);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Type]
 *     summary: Delete Type
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
router.delete("/:id", controller.deleteType);

module.exports = router;
