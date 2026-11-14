const express = require("express");
const controller = require("../controller/districtController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District CRUD
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     tags: [District]
 *     summary: Create District
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
router.post("/", controller.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: List districts
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllDistricts);

/**
 * @swagger
 * /api/districts/search:
 *   get:
 *     tags: [District]
 *     summary: Search districts
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
router.get("/search", controller.searchDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get District by ID
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
router.get("/:id", controller.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update District
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
router.put("/:id", controller.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete District
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
router.delete("/:id", controller.deleteDistrict);

module.exports = router;
