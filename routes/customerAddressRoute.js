const express = require("express");
const controller = require("../controller/customerAddressController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: CustomerAddress CRUD
 */

/**
 * @swagger
 * /api/customer_addresses:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create CustomerAddress
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
router.post("/", controller.createCustomerAddress);

/**
 * @swagger
 * /api/customer_addresses:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: List customer_addresses
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomerAddresses);

/**
 * @swagger
 * /api/customer_addresses/search:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Search customer_addresses
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
router.get("/search", controller.searchCustomerAddresses);

/**
 * @swagger
 * /api/customer_addresses/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get CustomerAddress by ID
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
router.get("/:id", controller.getCustomerAddressById);

/**
 * @swagger
 * /api/customer_addresses/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update CustomerAddress
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
router.put("/:id", controller.updateCustomerAddress);

/**
 * @swagger
 * /api/customer_addresses/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete CustomerAddress
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
router.delete("/:id", controller.deleteCustomerAddress);

module.exports = router;
