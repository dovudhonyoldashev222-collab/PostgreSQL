const express = require("express");
const controller = require("../controller/sectorController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector CRUD
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     tags: [Sector]
 *     summary: Create Sector
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
router.post("/", controller.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: List sectors
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllSectors);

/**
 * @swagger
 * /api/sectors/search:
 *   get:
 *     tags: [Sector]
 *     summary: Search sectors
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
router.get("/search", controller.searchSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get Sector by ID
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
router.get("/:id", controller.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update Sector
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
router.put("/:id", controller.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete Sector
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
router.delete("/:id", controller.deleteSector);

module.exports = router;
