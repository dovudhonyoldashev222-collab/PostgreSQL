const express = require("express");
const controller = require("../controller/eventTypeController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: EventType CRUD
 */

/**
 * @swagger
 * /api/event_types:
 *   post:
 *     tags: [EventType]
 *     summary: Create EventType
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
router.post("/", controller.createEventType);

/**
 * @swagger
 * /api/event_types:
 *   get:
 *     tags: [EventType]
 *     summary: List event_types
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllEventTypes);

/**
 * @swagger
 * /api/event_types/search:
 *   get:
 *     tags: [EventType]
 *     summary: Search event_types
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
router.get("/search", controller.searchEventTypes);

/**
 * @swagger
 * /api/event_types/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get EventType by ID
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
router.get("/:id", controller.getEventTypeById);

/**
 * @swagger
 * /api/event_types/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update EventType
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
router.put("/:id", controller.updateEventType);

/**
 * @swagger
 * /api/event_types/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete EventType
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
router.delete("/:id", controller.deleteEventType);

module.exports = router;
