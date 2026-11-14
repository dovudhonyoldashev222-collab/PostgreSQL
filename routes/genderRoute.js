const express = require("express");
const controller = require("../controller/genderController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender CRUD
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     tags: [Gender]
 *     summary: Create Gender
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
router.post("/", controller.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     tags: [Gender]
 *     summary: List genders
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllGenders);

/**
 * @swagger
 * /api/genders/search:
 *   get:
 *     tags: [Gender]
 *     summary: Search genders
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
router.get("/search", controller.searchGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get Gender by ID
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
router.get("/:id", controller.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update Gender
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
router.put("/:id", controller.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete Gender
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
router.delete("/:id", controller.deleteGender);

module.exports = router;
