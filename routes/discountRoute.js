const express = require("express");
const controller = require("../controller/discountController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount CRUD
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     tags: [Discount]
 *     summary: Create Discount
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
router.post("/", controller.createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     tags: [Discount]
 *     summary: List discounts
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllDiscounts);

/**
 * @swagger
 * /api/discounts/search:
 *   get:
 *     tags: [Discount]
 *     summary: Search discounts
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
router.get("/search", controller.searchDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get Discount by ID
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
router.get("/:id", controller.getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update Discount
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
router.put("/:id", controller.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete Discount
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
router.delete("/:id", controller.deleteDiscount);

module.exports = router;
