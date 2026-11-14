const express = require("express");
const controller = require("../controller/customerController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer CRUD
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     tags: [Customer]
 *     summary: Create Customer
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
router.post("/", controller.createCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     tags: [Customer]
 *     summary: List customers
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomers);

/**
 * @swagger
 * /api/customers/search:
 *   get:
 *     tags: [Customer]
 *     summary: Search customers
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
router.get("/search", controller.searchCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get Customer by ID
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
router.get("/:id", controller.getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update Customer
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
router.put("/:id", controller.updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete Customer
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
router.delete("/:id", controller.deleteCustomer);

module.exports = router;
