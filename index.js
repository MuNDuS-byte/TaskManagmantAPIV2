const express = require('express');

const app = express();

function getRootHandler(req, res) {
    res.send('Hello world');
}

app.get('/', getRootHandler);

app.listen(6000, () => {
    console.log('Server was running on the PORT 6000');
});
