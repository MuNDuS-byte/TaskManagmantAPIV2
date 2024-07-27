const express = require('express');
const bodyParser = require('body-parser');
const postTasksHandler = require('../controllers/postTasksHandler');
const getTasksHandler = require('../controllers/getTasksHandler');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get('/', getTasksHandler);
router.post('/', urlencodedParser, postTasksHandler);

module.exports = router;
