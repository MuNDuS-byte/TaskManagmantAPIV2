function getRootHandler(req, res) {
    res.sendFile(`${__dirname}/index.html`);
}

module.exports = getRootHandler;
