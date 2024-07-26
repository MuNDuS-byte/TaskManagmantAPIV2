const fs = require('fs');

function getTasksHandler(req, res) {
    fs.readFile('./data/data.txt', (err, data) => {
        if (err) console.log(err);
        const body = JSON.parse(data);
        res.json(body);
    });
}

module.exports = getTasksHandler;
