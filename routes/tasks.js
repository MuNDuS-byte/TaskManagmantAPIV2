const express = require('express');
const bodyParser = require('body-parser');
const postTasksHandler = require('../controllers/postTasksHandler');
const getTasksHandler = require('../controllers/getTasksHandler');
const deleteTaskHandler = require('../controllers/deleteTaskHandler');
const putTaskHandler = require('../controllers/putTaskHandler');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get('/', getTasksHandler);
router.post('/', urlencodedParser, postTasksHandler);
router.post('/delete', urlencodedParser, deleteTaskHandler);
router.post('/put', urlencodedParser, putTaskHandler);

module.exports = router;
