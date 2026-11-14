const express = require("express");
const controller = require("../controller/deliveryMethodController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DeliveryMethod
 *   description: DeliveryMethod CRUD
 */

/**
 * @swagger
 * /api/delivery_methods:
 *   post:
 *     tags: [DeliveryMethod]
 *     summary: Create DeliveryMethod
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
router.post("/", controller.createDeliveryMethod);

/**
 * @swagger
 * /api/delivery_methods:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: List delivery_methods
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllDeliveryMethods);

/**
 * @swagger
 * /api/delivery_methods/search:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Search delivery_methods
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
router.get("/search", controller.searchDeliveryMethods);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get DeliveryMethod by ID
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
router.get("/:id", controller.getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   put:
 *     tags: [DeliveryMethod]
 *     summary: Update DeliveryMethod
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
router.put("/:id", controller.updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   delete:
 *     tags: [DeliveryMethod]
 *     summary: Delete DeliveryMethod
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
router.delete("/:id", controller.deleteDeliveryMethod);

module.exports = router;
