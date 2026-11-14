const express = require("express");
const controller = require("../controller/langController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Lang CRUD
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Lang]
 *     summary: Create Lang
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
router.post("/", controller.createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     tags: [Lang]
 *     summary: List langs
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllLangs);

/**
 * @swagger
 * /api/langs/search:
 *   get:
 *     tags: [Lang]
 *     summary: Search langs
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
router.get("/search", controller.searchLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get Lang by ID
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
router.get("/:id", controller.getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Update Lang
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
router.put("/:id", controller.updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Delete Lang
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
router.delete("/:id", controller.deleteLang);

module.exports = router;
