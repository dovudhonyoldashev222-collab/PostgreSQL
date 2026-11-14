const express = require("express");
const controller = require("../controller/humanCategoryController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: HumanCategory CRUD
 */

/**
 * @swagger
 * /api/human_categories:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Create HumanCategory
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
router.post("/", controller.createHumanCategory);

/**
 * @swagger
 * /api/human_categories:
 *   get:
 *     tags: [HumanCategory]
 *     summary: List human_categories
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllHumanCategories);

/**
 * @swagger
 * /api/human_categories/search:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Search human_categories
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
router.get("/search", controller.searchHumanCategories);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get HumanCategory by ID
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
router.get("/:id", controller.getHumanCategoryById);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   put:
 *     tags: [HumanCategory]
 *     summary: Update HumanCategory
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
router.put("/:id", controller.updateHumanCategory);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   delete:
 *     tags: [HumanCategory]
 *     summary: Delete HumanCategory
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
router.delete("/:id", controller.deleteHumanCategory);

module.exports = router;
