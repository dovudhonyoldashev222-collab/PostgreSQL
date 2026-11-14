const express = require("express");
const controller = require("../controller/userController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User CRUD
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [User]
 *     summary: Create User
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
router.post("/", controller.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [User]
 *     summary: List users
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getUsers);

/**
 * @swagger
 * /api/users/search:
 *   get:
 *     tags: [User]
 *     summary: Search users
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
router.get("/search", controller.searchUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get User by ID
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
router.get("/:id", controller.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update User
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
router.put("/:id", controller.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete User
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
router.delete("/:id", controller.deleteUser);

module.exports = router;
