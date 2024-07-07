const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

/**
 * @swagger
 * /api/catalog:
 *   get:
 *     summary: List all catalog items
 *     tags: [Catalog]
 *     responses:
 *       200:
 *         description: A list of catalog items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *       500:
 *         description: Internal Server Error
 */
router.get('/', catalogController.listItems);

/**
 * @swagger
 * /api/catalog:
 *   post:
 *     summary: Register a new catalog item
 *     tags: [Catalog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Catalog item registered successfully
 *       400:
 *         description: Bad Request
 */
router.post('/', catalogController.register);

module.exports = router;
