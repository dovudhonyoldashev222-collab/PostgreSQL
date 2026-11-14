const express = require("express");
const controller = require("../controller/flatController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat CRUD
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     tags: [Flat]
 *     summary: Create Flat
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
router.post("/", controller.createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: List flats
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllFlats);

/**
 * @swagger
 * /api/flats/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search flats
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
router.get("/search", controller.searchFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get Flat by ID
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
router.get("/:id", controller.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update Flat
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
router.put("/:id", controller.updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete Flat
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
router.delete("/:id", controller.deleteFlat);

module.exports = router;
