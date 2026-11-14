const express = require("express");
const controller = require("../controller/customerCardController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: CustomerCard CRUD
 */

/**
 * @swagger
 * /api/customer_cards:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create CustomerCard
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
router.post("/", controller.createCustomerCard);

/**
 * @swagger
 * /api/customer_cards:
 *   get:
 *     tags: [CustomerCard]
 *     summary: List customer_cards
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomerCards);

/**
 * @swagger
 * /api/customer_cards/search:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Search customer_cards
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
router.get("/search", controller.searchCustomerCards);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get CustomerCard by ID
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
router.get("/:id", controller.getCustomerCardById);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update CustomerCard
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
router.put("/:id", controller.updateCustomerCard);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete CustomerCard
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
router.delete("/:id", controller.deleteCustomerCard);

module.exports = router;
