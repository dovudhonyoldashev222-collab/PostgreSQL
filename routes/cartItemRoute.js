const express = require("express");
const controller = require("../controller/cartItemController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: CartItem CRUD
 */

/**
 * @swagger
 * /api/cart_items:
 *   post:
 *     tags: [CartItem]
 *     summary: Create CartItem
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
router.post("/", controller.createCartItem);

/**
 * @swagger
 * /api/cart_items:
 *   get:
 *     tags: [CartItem]
 *     summary: List cart_items
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCartItems);

/**
 * @swagger
 * /api/cart_items/search:
 *   get:
 *     tags: [CartItem]
 *     summary: Search cart_items
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
router.get("/search", controller.searchCartItems);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get CartItem by ID
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
router.get("/:id", controller.getCartItemById);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   put:
 *     tags: [CartItem]
 *     summary: Update CartItem
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
router.put("/:id", controller.updateCartItem);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete CartItem
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
router.delete("/:id", controller.deleteCartItem);

module.exports = router;
