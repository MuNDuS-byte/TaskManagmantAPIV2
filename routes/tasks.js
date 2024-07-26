const express = require('express');
const bodyParser = require('body-parser');
const postTasksHandler = require('../controllers/postTasksHandler');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.post('/', urlencodedParser, postTasksHandler);

module.exports = router;
