const express = require("express");
const controller = require("../controller/countryController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country CRUD
 */

/**
 * @swagger
 * /api/countries:
 *   post:
 *     tags: [Country]
 *     summary: Create Country
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
router.post("/", controller.createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Country]
 *     summary: List countries
 *     responses:
 *       200:
 *         description: Records returned
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCountries);

/**
 * @swagger
 * /api/countries/search:
 *   get:
 *     tags: [Country]
 *     summary: Search countries
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
router.get("/search", controller.searchCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get Country by ID
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
router.get("/:id", controller.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update Country
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
router.put("/:id", controller.updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete Country
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
router.delete("/:id", controller.deleteCountry);

module.exports = router;
