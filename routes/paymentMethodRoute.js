const express = require("express");
const controller = require("../controller/paymentMethodController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PaymentMethod
 *   description: PaymentMethod CRUD
 */

/**
 * @swagger
 * /api/payment_methods:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create PaymentMethod
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
router.post("/", controller.createPaymentMethod);

/**
 * @swagger
 * /api/payment_methods:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: List payment_methods
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllPaymentMethods);

/**
 * @swagger
 * /api/payment_methods/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search payment_methods
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
router.get("/search", controller.searchPaymentMethods);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get PaymentMethod by ID
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
router.get("/:id", controller.getPaymentMethodById);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   put:
 *     tags: [PaymentMethod]
 *     summary: Update PaymentMethod
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
router.put("/:id", controller.updatePaymentMethod);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete PaymentMethod
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
router.delete("/:id", controller.deletePaymentMethod);

module.exports = router;
