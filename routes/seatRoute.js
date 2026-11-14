const express = require("express");
const controller = require("../controller/seatController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat CRUD
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     tags: [Seat]
 *     summary: Create Seat
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
router.post("/", controller.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     tags: [Seat]
 *     summary: List seats
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllSeats);

/**
 * @swagger
 * /api/seats/search:
 *   get:
 *     tags: [Seat]
 *     summary: Search seats
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
router.get("/search", controller.searchSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get Seat by ID
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
router.get("/:id", controller.getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update Seat
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
router.put("/:id", controller.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete Seat
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
router.delete("/:id", controller.deleteSeat);

module.exports = router;
