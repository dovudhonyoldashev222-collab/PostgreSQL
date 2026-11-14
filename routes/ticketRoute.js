const express = require("express");
const controller = require("../controller/ticketController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket CRUD
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     tags: [Ticket]
 *     summary: Create Ticket
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
router.post("/", controller.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: List tickets
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTickets);

/**
 * @swagger
 * /api/tickets/search:
 *   get:
 *     tags: [Ticket]
 *     summary: Search tickets
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
router.get("/search", controller.searchTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get Ticket by ID
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
router.get("/:id", controller.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Ticket
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
router.put("/:id", controller.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Ticket
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
router.delete("/:id", controller.deleteTicket);

module.exports = router;
