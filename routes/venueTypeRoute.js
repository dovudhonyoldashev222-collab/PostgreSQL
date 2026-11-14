const express = require("express");
const controller = require("../controller/venueTypeController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: VenueType CRUD
 */

/**
 * @swagger
 * /api/venue_types:
 *   post:
 *     tags: [VenueType]
 *     summary: Create VenueType
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
router.post("/", controller.createVenueType);

/**
 * @swagger
 * /api/venue_types:
 *   get:
 *     tags: [VenueType]
 *     summary: List venue_types
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenueTypes);

/**
 * @swagger
 * /api/venue_types/search:
 *   get:
 *     tags: [VenueType]
 *     summary: Search venue_types
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
router.get("/search", controller.searchVenueTypes);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get VenueType by ID
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
router.get("/:id", controller.getVenueTypeById);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update VenueType
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
router.put("/:id", controller.updateVenueType);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete VenueType
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
router.delete("/:id", controller.deleteVenueType);

module.exports = router;
