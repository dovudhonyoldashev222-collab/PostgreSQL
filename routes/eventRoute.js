const express = require("express");
const controller = require("../controller/eventController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event CRUD
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     tags: [Event]
 *     summary: Create Event
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
router.post("/", controller.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags: [Event]
 *     summary: List events
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllEvents);

/**
 * @swagger
 * /api/events/search:
 *   get:
 *     tags: [Event]
 *     summary: Search events
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
router.get("/search", controller.searchEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get Event by ID
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
router.get("/:id", controller.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update Event
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
router.put("/:id", controller.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete Event
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
router.delete("/:id", controller.deleteEvent);

module.exports = router;
