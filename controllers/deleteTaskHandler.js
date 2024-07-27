const fs = require('fs');

function deleteTaskHandler(req, res) {
    const fileName = './data/data.txt';
    fs.readFile(fileName, (err, data) => {
        if (err) console.log(err);
        const body = JSON.parse(data);
        const tasks = body.filter((el) => el.id !== parseInt(req.body.id));
        const isIdTrue = body.some((el) => el.id === parseInt(req.body.id));
        if (isIdTrue) {
            fs.writeFile(fileName, JSON.stringify(tasks), (err) => {
                if (err) console.log(err);
                res.send('<h1>Task was deleted.</h1><a href="/">One more</a>');
            });
        } else {
            res.send(
                '<h1>No such task with this id.</h1><a href="/">Try again</a>'
            );
        }
    });
}

module.exports = deleteTaskHandler;
