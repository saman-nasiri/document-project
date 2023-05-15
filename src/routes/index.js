const express = require('express');
const docsRoute = require('./docs.route');
const userRoute = require('./user.route');
const authRoute = require('./auth.route');
const documentFileRoute = require('./documentFile.route');


const router = express.Router();

router.use('/docs', docsRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/document-file', documentFileRoute);


module.exports = router;
