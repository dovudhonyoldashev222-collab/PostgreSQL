const express = require("express");
const controller = require("../controller/regionController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region CRUD
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     tags: [Region]
 *     summary: Create Region
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
router.post("/", controller.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Region]
 *     summary: List regions
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllRegions);

/**
 * @swagger
 * /api/regions/search:
 *   get:
 *     tags: [Region]
 *     summary: Search regions
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
router.get("/search", controller.searchRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get Region by ID
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
router.get("/:id", controller.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update Region
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
router.put("/:id", controller.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete Region
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
router.delete("/:id", controller.deleteRegion);

module.exports = router;
