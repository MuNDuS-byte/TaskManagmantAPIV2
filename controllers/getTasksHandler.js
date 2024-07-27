const fs = require('fs');

function getTasksHandler(req, res) {
    fs.readFile('./data/data.txt', (err, data) => {
        const stat = fs.statSync('./data/data.txt');
        if (err) console.log(err);
        if (stat.size > 0) {
            const body = JSON.parse(data);
            res.json(body);
        } else {
            res.send(
                `<h1>You don't have any task</h1> <a href="/">Back to the root</a>`
            );
        }
    });
}

module.exports = getTasksHandler;
