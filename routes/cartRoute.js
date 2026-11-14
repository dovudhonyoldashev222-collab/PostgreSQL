const express = require("express");
const controller = require("../controller/cartController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart CRUD
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     tags: [Cart]
 *     summary: Create Cart
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
router.post("/", controller.createCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     tags: [Cart]
 *     summary: List carts
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCarts);

/**
 * @swagger
 * /api/carts/search:
 *   get:
 *     tags: [Cart]
 *     summary: Search carts
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
router.get("/search", controller.searchCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get Cart by ID
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
router.get("/:id", controller.getCartById);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update Cart
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
router.put("/:id", controller.updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete Cart
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
router.delete("/:id", controller.deleteCart);

module.exports = router;
