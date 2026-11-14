
const express = require("express");
const router = express.Router();

const customerController = require("../controller/customerController");

router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer CRUD
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Customer yaratish
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ali Valiyev
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ali@example.com
 *               address:
 *                 type: string
 *                 example: Tashkent, Uzbekistan
 *     responses:
 *       201:
 *         description: Customer yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       409:
 *         description: Email mavjud
 *       500:
 *         description: Server xatosi
 *
 *   get:
 *     summary: Barcha customerlarni olish
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Customerlar ro'yxati
 *       500:
 *         description: Server xatosi
 *
 * /api/customers/{id}:
 *   get:
 *     summary: Bitta customer olish
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Customer topildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Customer topilmadi
 *
 *   put:
 *     summary: Customer yangilash
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Customer topilmadi
 *       409:
 *         description: Email mavjud
 *
 *   delete:
 *     summary: Customer o'chirish
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Customer o'chirildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Customer topilmadi
 */

module.exports = router;
