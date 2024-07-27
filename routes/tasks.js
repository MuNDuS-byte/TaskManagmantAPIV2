const express = require('express');
const bodyParser = require('body-parser');
const postTasksHandler = require('../controllers/postTasksHandler');
const getTasksHandler = require('../controllers/getTasksHandler');
const deleteTaskHandler = require('../controllers/deleteTaskHandler');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get('/', getTasksHandler);
router.post('/', urlencodedParser, postTasksHandler);
router.post('/delete', urlencodedParser, deleteTaskHandler);

module.exports = router;
