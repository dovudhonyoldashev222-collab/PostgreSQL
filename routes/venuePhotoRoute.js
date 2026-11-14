const express = require("express");
const controller = require("../controller/venuePhotoController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto CRUD
 */

/**
 * @swagger
 * /api/venue_photos:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create VenuePhoto
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
router.post("/", controller.createVenuePhoto);

/**
 * @swagger
 * /api/venue_photos:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: List venue_photos
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenuePhotos);

/**
 * @swagger
 * /api/venue_photos/search:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Search venue_photos
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
router.get("/search", controller.searchVenuePhotos);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get VenuePhoto by ID
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
router.get("/:id", controller.getVenuePhotoById);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update VenuePhoto
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
router.put("/:id", controller.updateVenuePhoto);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete VenuePhoto
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
router.delete("/:id", controller.deleteVenuePhoto);

module.exports = router;
