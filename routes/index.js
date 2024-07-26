const express = require('express');
const tasksRouter = require('./tasks');
const rootRouter = require('./root');

const router = express();

router.use('/tasks', tasksRouter);
router.use('/', rootRouter);

module.exports = router;
