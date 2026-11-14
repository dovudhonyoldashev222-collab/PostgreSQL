const express = require("express");
const controller = require("../controller/bookingController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking CRUD
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     tags: [Booking]
 *     summary: Create Booking
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
router.post("/", controller.createBooking);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     tags: [Booking]
 *     summary: List bookings
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllBookings);

/**
 * @swagger
 * /api/bookings/search:
 *   get:
 *     tags: [Booking]
 *     summary: Search bookings
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
router.get("/search", controller.searchBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get Booking by ID
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
router.get("/:id", controller.getBookingById);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update Booking
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
router.put("/:id", controller.updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete Booking
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
router.delete("/:id", controller.deleteBooking);

module.exports = router;
