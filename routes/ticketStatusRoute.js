const express = require("express");
const controller = require("../controller/ticketStatusController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TicketStatus
 *   description: TicketStatus CRUD
 */

/**
 * @swagger
 * /api/ticket_statuses:
 *   post:
 *     tags: [TicketStatus]
 *     summary: Create TicketStatus
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
router.post("/", controller.createTicketStatus);

/**
 * @swagger
 * /api/ticket_statuses:
 *   get:
 *     tags: [TicketStatus]
 *     summary: List ticket_statuses
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTicketStatuses);

/**
 * @swagger
 * /api/ticket_statuses/search:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Search ticket_statuses
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
router.get("/search", controller.searchTicketStatuses);

/**
 * @swagger
 * /api/ticket_statuses/{id}:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get TicketStatus by ID
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
router.get("/:id", controller.getTicketStatusById);

/**
 * @swagger
 * /api/ticket_statuses/{id}:
 *   put:
 *     tags: [TicketStatus]
 *     summary: Update TicketStatus
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
router.put("/:id", controller.updateTicketStatus);

/**
 * @swagger
 * /api/ticket_statuses/{id}:
 *   delete:
 *     tags: [TicketStatus]
 *     summary: Delete TicketStatus
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
router.delete("/:id", controller.deleteTicketStatus);

module.exports = router;
