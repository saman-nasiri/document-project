const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const documentFileValidation = require('../validations/documentFile.validation');
const documentFileController = require('../controllers/documentFile.controller');
const { scope } = require('../config/roles');

const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     DocumentFile:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the DocumentFile
 *         name:
 *           type: string
 *           description: The DocumentFile name
 *         description:
 *           type: string
 *           description: The DocumentFile description
 *         type:
 *            type: string
 *            description: The DocumentFile role
 *       example:
 *         id: d5fE_asz
 *         name: Xiaomi
 *         description: this is des 
 *         type: "text"
 */

 /**
  * @swagger
  * tags:
  *   name: DocumentFile
  *   description: The DocumentFile managing API
  */

 /**
 * @swagger
 * /api/document-file:
 *   get:
 *     summary: Returns the list of all the DocumentFile
 *     tags: [DocumentFile]
 *     responses:
 *       200:
 *         description: The list of the DocumentFile
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DocumentFile'
 */


/**
 * @swagger
 * /api/document-file:
 *   post:
 *     summary: Create a new DocumentFile
 *     tags: [DocumentFile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentFile'
 *     responses:
 *       200:
 *         description: The DocumentFile was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentFile'
 *       500:
 *         description: Some server error
 */

router
  .route('/')
    .post(auth(scope.CDF), validate(documentFileValidation.createDocumentFile), documentFileController.createDocumentFile)
    .get(auth(scope.SDF), validate(documentFileValidation.getDocumentFiles), documentFileController.getDocumentFiles);

/**
 * @swagger
 * /api/document-file/{dfid}:
 *   get:
 *     summary: Get the DocumentFile by id
 *     tags: [DocumentFile]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: The DocumentFile id
 *     responses:
 *       200:
 *         description: The DocumentFile description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentFile'
 *       404:
 *         description: The DocumentFile was not found
 */


/**
 * @swagger
 * /api/document-file/{dfid}:
 *   put:
 *     summary: Edit the DocumentFile by id
 *     tags: [DocumentFile]
 *     parameters:
 *       - in: path
 *         name: dfid
 *         schema:
 *           type: string
 *         required: true
 *         description: The DocumentFile id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentFile'
 *     responses:
 *       200:
 *         description: The DocumentFile description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentFile'
 *       404:
 *         description: The DocumentFile was not found
 */

/**
 * @swagger
 * /api/document-file/{dfid}:
 *   delete:
 *     summary: Delete the DocumentFile by id
 *     tags: [DocumentFile]
 *     parameters:
 *       - in: path
 *         name: dfid
 *         schema:
 *           type: string
 *         required: true
 *         description: The DocumentFile id
 *     responses:
 *       200:
 *         description: The DocumentFile Deleted by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentFile'
 *       404:
 *         description: The DocumentFile was not found
 */


router
  .route('/:dfid')
    .get(auth(scope.SDFBI), validate(documentFileValidation.getDocumentFile), documentFileController.getDocumentFile)
    .put(auth(scope.EDF), validate(documentFileValidation.editDocumentFile), documentFileController.editDocumentFile)    
    .delete(auth(scope.DDF), validate(documentFileValidation.deleteDocumentFile), documentFileController.deleteDocumentFile)    
    


module.exports = router;
