const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(router);

app.listen(800, () => {
    console.log('Server was running on the PORT 800');
});
