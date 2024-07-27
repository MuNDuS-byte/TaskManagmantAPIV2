const fs = require('fs');

function putTaskHandler(req, res) {
    const fileName = './data/data.txt';
    fs.readFile(fileName, (err, data) => {
        if (err) console.log(err);
        const body = JSON.parse(data);
        const task = body.find((el) => el.id === parseInt(req.body.id));
        if (task) {
            task.text = req.body.text;
            task.descriptions = req.body.descriptions;
            fs.writeFile(fileName, JSON.stringify(body), (err) => {
                if (err) console.log(err);
                res.send('<h1>Task was changed.</h1><a href="/">One more</a>');
            });
        } else {
            res.send('<h1>Task not found.</h1><a href="/">Try again</a>');
        }
    });
}

module.exports = putTaskHandler;
