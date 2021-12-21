const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(`METHOD - ${method} | URL - ${url} | TIME - ${time}`);

    next();
}

module.exports = logger;