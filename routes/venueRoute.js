const express = require("express");
const controller = require("../controller/venueController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue CRUD
 */

/**
 * @swagger
 * /api/venues:
 *   post:
 *     tags: [Venue]
 *     summary: Create Venue
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
router.post("/", controller.createVenue);

/**
 * @swagger
 * /api/venues:
 *   get:
 *     tags: [Venue]
 *     summary: List venues
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenues);

/**
 * @swagger
 * /api/venues/search:
 *   get:
 *     tags: [Venue]
 *     summary: Search venues
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
router.get("/search", controller.searchVenues);

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get Venue by ID
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
router.get("/:id", controller.getVenueById);

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update Venue
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
router.put("/:id", controller.updateVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete Venue
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
router.delete("/:id", controller.deleteVenue);

module.exports = router;
