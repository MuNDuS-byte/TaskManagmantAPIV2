const fs = require('fs');

let tasks = [];

function postTasksHandler(req, res) {
    fs.readFile('./data/data.txt', (err, data) => {
        if (err) console.log(err);
        tasks = JSON.parse(data);
        tasks.push({ id: tasks.length + 1, ...req.body });
        fs.writeFile(
            './data/data.txt',
            JSON.stringify(tasks),
            'utf-8',
            (err) => {
                if (err) console.log(err);
            }
        );
    });
    res.send('<h1>Task was added.</h1><a href="/">One more</a>');
}

module.exports = postTasksHandler;
