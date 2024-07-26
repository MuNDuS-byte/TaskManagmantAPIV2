const express = require('express');
const getRootHandler = require('../controllers/getRootHandler');

const router = express.Router();

router.get('/', getRootHandler);

module.exports = router;
