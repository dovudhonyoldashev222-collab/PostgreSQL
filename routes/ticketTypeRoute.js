const express = require("express");
const controller = require("../controller/ticketTypeController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: TicketType CRUD
 */

/**
 * @swagger
 * /api/ticket_types:
 *   post:
 *     tags: [TicketType]
 *     summary: Create TicketType
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
router.post("/", controller.createTicketType);

/**
 * @swagger
 * /api/ticket_types:
 *   get:
 *     tags: [TicketType]
 *     summary: List ticket_types
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTicketTypes);

/**
 * @swagger
 * /api/ticket_types/search:
 *   get:
 *     tags: [TicketType]
 *     summary: Search ticket_types
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
router.get("/search", controller.searchTicketTypes);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get TicketType by ID
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
router.get("/:id", controller.getTicketTypeById);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update TicketType
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
router.put("/:id", controller.updateTicketType);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete TicketType
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
router.delete("/:id", controller.deleteTicketType);

module.exports = router;
