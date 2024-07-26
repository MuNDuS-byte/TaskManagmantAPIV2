const fs = require('fs');

function getTasksHandler(req, res) {
    fs.readFile('./data/data.txt', (err, data) => {
        if (err) console.log(err);
        if (req.headers['content-type'] === 'application/json') {
            const body = JSON.parse(data);
            res.json(body);
        }
        res.send(
            `<h1>You don't have any task</h1> <a href="/">Back to the root</a>`
        );
    });
}

module.exports = getTasksHandler;
