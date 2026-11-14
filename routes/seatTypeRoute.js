const express = require("express");
const controller = require("../controller/seatTypeController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: SeatType CRUD
 */

/**
 * @swagger
 * /api/seat_types:
 *   post:
 *     tags: [SeatType]
 *     summary: Create SeatType
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
router.post("/", controller.createSeatType);

/**
 * @swagger
 * /api/seat_types:
 *   get:
 *     tags: [SeatType]
 *     summary: List seat_types
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllSeatTypes);

/**
 * @swagger
 * /api/seat_types/search:
 *   get:
 *     tags: [SeatType]
 *     summary: Search seat_types
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
router.get("/search", controller.searchSeatTypes);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get SeatType by ID
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
router.get("/:id", controller.getSeatTypeById);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update SeatType
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
router.put("/:id", controller.updateSeatType);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete SeatType
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
router.delete("/:id", controller.deleteSeatType);

module.exports = router;
